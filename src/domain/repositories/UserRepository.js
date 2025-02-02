// src/repositories/UserRepository.js
import { ApiClient } from '../../data/network/apiClient';
import { User } from '../entities/User';

export class UserRepository {
  async fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = await ApiClient.get(url);
    return data.map(user => new User(user.id, user.name, user.email,user.email));
  }
}
