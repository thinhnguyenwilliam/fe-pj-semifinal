const DOMAIN = "http://localhost:3002";


export const get = async (api) => {
  const response = await fetch(DOMAIN + api);//call API bằng method GET, kg ghi mặc định GET
  const result = await response.json();

  return result;
}

///////////////


export const post = async (api, data) => {
  const response = await fetch(DOMAIN + api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();

  return result;
}

export const patch = async (api, data) => {
  const response = await fetch(DOMAIN + api, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();

  return result;
}

export const del = async (api) => {
  const response = await fetch(DOMAIN + api, {
    method: "DELETE"
  })

  const result = await response.json();

  return result;
}