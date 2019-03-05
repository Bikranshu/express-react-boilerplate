export const apiPath = 'api/';

export const APP_HOST = process.env.APP_HOST || 'localhost';
export const APP_PORT = process.env.APP_PORT || 3000;
export const HOST = `${APP_HOST}:${APP_PORT}/`;

export const API_URL = `http://${HOST}${apiPath}`;