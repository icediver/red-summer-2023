export const SERVER_URL = `${process.env.SERVER_URL}`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
