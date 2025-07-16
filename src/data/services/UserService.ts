import { injectable, inject } from "tsyringe";
import type { IUserService } from "@/domain/services/IUserService";
import type { IUserRepository } from "@/domain/repositories/IUserRepository";
import type { User } from "@/domain/entities/User";

@injectable()
export class UserService implements IUserService {
    constructor(
        @inject('IUserRepository')
        private readonly repository: IUserRepository
    ) {}

    async fetchUsers(): Promise<User[]> {
        return this.repository.getAll();
    }
}