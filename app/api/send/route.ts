import EmailTemplate from '#/components/Template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const template = EmailTemplate(body);

    const data = await resend.emails.send({
      from: 'Din nettside <onboarding@resend.dev>',
      to: 'bengt.andreas@live.no',
      subject: 'Contact form melding',
      react: template,
      text: 'test',
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
