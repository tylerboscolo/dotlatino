import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, language } = await request.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log subscription (replace with Resend/Mailchimp integration later)
    console.log(`[Subscribe] ${email} | Language: ${language} | Time: ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
