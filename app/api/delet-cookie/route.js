import { cookies } from 'next/headers';
export async function POST(request) {
  try {
    // الوصول إلى الكوكيز
    const cookieStore = cookies();
    // الحصول على الـ token من الكوكيز
    const token = cookieStore.get('token_user_server');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Token not found' }), { status: 404 });
    }

    // إرجاع قيمة الـ token القديمة قبل حذفها
    const oldToken = token.value;

    // حذف الكوكيز
    cookieStore.delete('token_user_server', {
      path: '/',
      sameSite: 'Strict',
    });

    // إرجاع الـ token القديمة مع رسالة النجاح
    return new Response(
      JSON.stringify({ message: 'Token deleted successfully',valueToken:oldToken }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting cookie:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete cookie', details: error.message }),
      { status: 500 }
    );
  }
}
