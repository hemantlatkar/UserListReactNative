// src/usecases/GetUsersUseCase.js
import { UserRepository } from "../repositories/UserRepository";

export class GetUsersUseCase {
  constructor() {
    this.userRepository = new UserRepository();
  }

  execute() {
    return this.userRepository.fetchUsers();
  }
}
