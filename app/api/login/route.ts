import login from "../../../services/login"

export async function POST(request: Request) {
    const { username, password } = await request.json()

    const response = await login(username, password);
    
    return Response.json({ ...response})
}