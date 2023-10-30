// /users (GET)
// /users/:id (GET)
// /users/:id (PUT)
// /users/:id (DELETE)

import { baseUrl } from "./configs";

export class UserAPI {
  static getUsers = () => {
    return fetch(`${baseUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  static getUserById = (userId: string) => {
    return fetch(`${baseUrl}/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  static updateUser = (userId: string) => {
    return fetch(`${baseUrl}/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  static deleteUser = (userId: string) => {
    return fetch(`${baseUrl}/users/${userId}`, {
      method: "DELETE",
    });
  };
}
