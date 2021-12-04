const baseUrl = "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com";

export function getAll() {
  return fetch(`${baseUrl}/classes.json`).then((response) => {
    return response.json();
  });
}

export function getById(id) {
  return fetch(`${baseUrl}/classes/${id}.json`).then((response) => {
    return response.json();
  });
}

export function deleteClass(id) {
  return fetch(`${baseUrl}/classes/${id}.json`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
}

export function create(classData) {
  return fetch(`${baseUrl}/classes.json`, {
    method: "POST",
    body: JSON.stringify(classData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function edit(classData, id) {
  return fetch(`${baseUrl}/classes/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(classData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
