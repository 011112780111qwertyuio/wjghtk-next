// app/api/set-cookie/route.js
import { cookies } from 'next/headers';
export async function POST(request) {
  const { token } = await request.json();
  try {
    const cookieStore = cookies();
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 8 * 30 * 24 * 60 * 60,
      path: '/',
      sameSite: 'Strict',
    };

    cookieStore.set('token_user_server', token, cookieOptions);

    return new Response(JSON.stringify({ message: 'Cookie set successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error setting cookie:', error);
    return new Response(JSON.stringify({ error: 'Failed to set cookie' }), { status: 500 });
  }
}
