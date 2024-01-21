export const saveToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token)
    }
}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token')
    }
    return null
}