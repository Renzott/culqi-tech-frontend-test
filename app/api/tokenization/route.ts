import { Card } from "@/services/models/Card"
import tokenization from "../../../services/tokenization";

export async function POST(request: Request) {
    const {
        card_number = "",
        ccv = "",
        email = "",
        expiration_month = "",
        expiration_year = "",

    } = await request.json()
    const authorizationHeader = request.headers.get('Authorization');
    const token = authorizationHeader ? authorizationHeader.split(' ')[1] : "";

    const response = await tokenization(
        {
            card_number: Number(card_number),
            ccv: Number(ccv),
            email,
            expiration_month,
            expiration_year,
        },
        token
    );

    return Response.json({ ...response })
} 