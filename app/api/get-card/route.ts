import getCard from "../../../services/getCard";

export async function GET(request: Request) {
    const authorizationHeader = request.headers.get('Authorization');
    const token = authorizationHeader ? authorizationHeader.split(' ')[1] : "";

    const data = await getCard(token);

    return Response.json({ ...data })
}