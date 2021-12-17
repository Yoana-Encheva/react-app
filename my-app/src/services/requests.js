const baseUrl = "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com";

export function create(requestData) {
  return fetch(`${baseUrl}/requests.json`, {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
