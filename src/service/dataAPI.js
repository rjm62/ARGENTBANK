import { userFirstName } from "../redux/reducers"

export async function getToken (body) {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method:"POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(body),
    })
    return await response.json()

}

export async function getProfile (token) {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method:"POST",
        headers: {"Content-Type": "application/json",
                Authorization:'Bearer' +token,
        },
    })
    return await response.json()
}

export async function putNewName (token, body) {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method:"PUT",
        headers: {"Content-Type": "application/json",
        Authorization:'Bearer' +token,
    },
    body: JSON.stringify(body)
    })
    return await response.json()
}