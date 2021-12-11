const baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts";
const baseKey = "AIzaSyCip7fnJIPC5Ukeb7P7fGPPGEZC2rQlIBU";

export function login(userData) {
  return fetch(`${baseUrl}:signInWithPassword?key=${baseKey}`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function register(userData) {
  return fetch(`${baseUrl}:signUp?key=${baseKey}`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateUserInfo(userData) {
  return fetch(`${baseUrl}:update?key=${baseKey}`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function authenticate(userData, isLogin) {
  return isLogin ? login(userData) : register(userData);
}
