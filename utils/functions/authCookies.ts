import Cookies from "js-cookie";

/**
 * Stores the given id and token into cookies.
 *
 * @param {string} id - The id to be stored in the cookies.
 * @param {string} token - The token to be stored in the cookies.
 */
export function setAuthCookies(id: string, token: string): void {
  // const expires = 30 / (24 * 60); // 30 minutes converted to fraction of a day
  const expires = 3 / 24; // 3 hours converted to fraction of a day

  // Set the id and token into cookies with the same expiration time
  Cookies.set("id", id, { expires });
  Cookies.set("token", token, { expires });
}

/**
 * Removes the authentication cookies (id and token).
 */
export function removeAuthCookies(): void {
  Cookies.remove("id");
  Cookies.remove("token");
}

// Example usage:
// setAuthCookies('12345', 'your-token-here');
// removeAuthCookies();
