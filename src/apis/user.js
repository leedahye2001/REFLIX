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

async function updateUser(password, name) {
  return await fetch("/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      name,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
}

async function getUserByToken(token) {
  return await fetch("/auth/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}

export { signupUser, getUserByToken, updateUser };
