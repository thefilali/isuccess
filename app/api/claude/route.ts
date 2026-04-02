import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { system, message } = await req.json();

    if (!system || !message) {
      return NextResponse.json({ error: 'Missing system or message' }, { status: 400 });
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system,
      messages: [{ role: 'user', content: message }],
    });

    const textBlock = response.content.find(b => b.type === 'text');
    return NextResponse.json({ response: textBlock?.text || '' });
  } catch (error) {
    console.error('Claude API error:', error);
    return NextResponse.json({ error: 'Claude API call failed' }, { status: 500 });
  }
}
