import { injectable } from 'tsyringe';
import type { IUserRepository } from '@/domain/repositories/IUserRepository';
import type { User } from '@/domain/entities/User';

@injectable()
export class UserApiRepository implements IUserRepository {
    private readonly baseUrl = '/api/users';

    async getAll(): Promise<User[]> {
        return [];
    }
}