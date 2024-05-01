
export const headers = { headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
    'Content-Type': 'application/json'
}}

export const authBaseUrl = import.meta.env.VITE_BASE_URL

export const authDevUrl = import.meta.env.VITE_BASE_URL_DEV