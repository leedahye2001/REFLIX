async function signupUser(email, password, name) {
  return await fetch("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
}

async function loginUser(email, password) {
  return await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(async (res) => {
      const result = await res.json();
      console.log(result);
      return result;
    })

    .then((data) => data);
}

async function getUserByToken(token) {
  return await fetch("/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}

export { signupUser, loginUser, getUserByToken };
