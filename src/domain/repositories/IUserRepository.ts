import type { User } from '@/domain/entities/User';

export interface IUserRepository {
  getAll(): Promise<User[]>;
}
