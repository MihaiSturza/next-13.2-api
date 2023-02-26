export async function GET(request: Request, context: {params: {id:string}}) {
  const {id} = context.params
    return new Response(`User: ${JSON.stringify(id)}`, {status: 200})
  }