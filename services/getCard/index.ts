import { API_BASE_URL } from "../../app/common/constants"

// get with Authorization header
const getCard = async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/getCard`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })

    const data = await response.json()
    
    return data
}

export default getCard;