import { container } from 'tsyringe';
import { UserApiRepository } from '@/data/repositories/UserRepository';
import { UserService } from '@/data/services/UserService';

type DependencyRegistration = {
  token: string | symbol;
  provider: { useClass: new (...args: any[]) => any };
};

const dependencies: DependencyRegistration[] = [
  {
    token    : 'IUserRepository',
    provider : { useClass: UserApiRepository },
  },
  {
    token    : 'IUserService',
    provider : { useClass: UserService },
  },
];

export const registerDependencies = () => {
  dependencies.forEach(({ token, provider }) => {
    container.register(token, provider);
  });
};
