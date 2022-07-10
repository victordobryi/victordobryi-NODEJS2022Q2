import { RESTDataSource } from 'apollo-datasource-rest';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
  }

  getUsers() {
    return this.get('users');
  }

  getAUser(userId: string) {
    return this.get(`user/${userId}`);
  }
}
