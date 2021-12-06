const baseUrl = "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com";

export function getAll() {
  return fetch(`${baseUrl}/articles.json`).then((response) => {
    return response.json();
  });
}

export function getById(id) {
  return fetch(`${baseUrl}/articles/${id}.json`).then((response) => {
    return response.json();
  });
}

export function deleteArticle(id) {
  return fetch(`${baseUrl}/articles/${id}.json`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
}

export function create(articleData) {
  return fetch(`${baseUrl}/articles.json`, {
    method: "POST",
    body: JSON.stringify(articleData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function edit(articleData, id) {
  return fetch(`${baseUrl}/articles/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(articleData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
