import { API_BASE_URL } from "../../app/common/constants"

const login = async (username: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    return data
}

export default login;