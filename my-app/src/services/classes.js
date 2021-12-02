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
  return fetch(
    "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com/classes.json",
    {
      method: "POST",
      body: JSON.stringify(classData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
