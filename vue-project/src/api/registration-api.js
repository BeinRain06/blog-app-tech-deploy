const base_url = import.meta.env.VITE_API_URL
const base_url_1 = import.meta.env.VITE_API_URL_ONE

export const registrationapi = async (userInfo) => {
  const user = {
    email: userInfo.email,
    username: userInfo.username,
    password: userInfo.password,
    secret: userInfo.custom
  }

  const userCreation = await fetch(`${base_url_1}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then((res) => res.json())
    .then((newres) => newres.data)

  return userCreation
}
