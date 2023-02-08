import { ApiClient } from './ApiClient';

class PublicApiService {
  // users
  register = (user: object) =>
    ApiClient.post('/auth/registration', { ...user });

  login = (credentials: object) =>
    ApiClient.post('/auth/login', { ...credentials });

  getUser = () =>
    ApiClient.get(`/users/${localStorage.getItem('email')}`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

  createListItem = (payload: object) => {
    console.log(payload);
    return ApiClient.patch(`users/${localStorage.getItem('email')}`, payload, {
      headers: { Authorization: localStorage.getItem('token') },
    });
  };
}

export default new PublicApiService();
