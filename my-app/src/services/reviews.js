const baseUrl = "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com";

export function getAll() {
  return fetch(`${baseUrl}/reviews.json`).then((response) => {
    return response.json();
  });
}
