export const BASE_SERVER_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
console.log('The API is available at', BASE_SERVER_URL);

export const SERVER_URLS = {
  CITIES: BASE_SERVER_URL + '/routes/cities',
  ROUTES: BASE_SERVER_URL + '/routes',
};

export const ROUTES = {
  home: '/',
};