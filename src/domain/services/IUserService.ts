import type { User } from "@/domain/entities/User";

export interface IUserService {
    fetchUsers(): Promise<User[]>;
}