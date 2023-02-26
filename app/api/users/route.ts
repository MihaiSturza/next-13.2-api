export async function GET(request: Request) {
  const body = {
    user: 'happy',
    style: 'cool'
  }
    return new Response(JSON.stringify(body), {status: 200})
  }