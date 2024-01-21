import { API_BASE_URL } from "../../app/common/constants"
import { Card } from "../models/Card"

const tokenization = async (card: Card, token: string) => {
    const response = await fetch(`${API_BASE_URL}/tokenization`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...card }),
    });
    const data = await response.json()
    return data
}

export default tokenization;