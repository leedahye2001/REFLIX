// 토큰
export default function setHeaders(headers) {
  if (localStorage.getItem("access-token")) {
    return {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    };
  } else {
    return headers;
  }
}

async function getContentDetail(productId) {
  return await fetch(`/api/product/id?productId=${productId}`, {
    headers: setHeaders({
      "Content-Type": "application/json",
    }),
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
}

export { getContentDetail };
