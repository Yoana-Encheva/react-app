const baseUrl = "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com";

export function getAll() {
  return fetch(`${baseUrl}/coaches.json`).then((response) => {
    return response.json();
  });
}

export function getById(id) {
  return fetch(`${baseUrl}/coaches/${id}.json`).then((response) => {
    return response.json();
  });
}

export function deleteCoach(id) {
  return fetch(`${baseUrl}/coaches/${id}.json`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
}

export function create(coachData) {
  return fetch(`${baseUrl}/coaches.json`, {
    method: "POST",
    body: JSON.stringify(coachData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function edit(coachData, id) {
  return fetch(`${baseUrl}/coaches/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(coachData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
