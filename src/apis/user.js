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
      Authorization: localStorage.getItem("access-token"),
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

async function userInfo(email, username) {
  return await fetch(`/user/detail`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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

export { signupUser, loginUser, getUserByToken, userInfo };
