import { defineStore } from 'pinia';
import type { User } from '@/domain/entities/User';
import type { IUserService } from '@/domain/services/IUserService';
import { useDI } from '@/core/di/provider';

export const useUserVM = defineStore('user', () => {
  const userService = useDI().resolve<IUserService>('IUserService');

  const users = ref<User[]>([]);
  const isLoading = ref(false);

  const loadUsers = async () => {
    isLoading.value = true;
    try {
      users.value = await userService.fetchUsers();
    } finally {
      isLoading.value = false;
    }
  };

  const userCount = computed(() => users.value.length);

  return {
    users,
    isLoading,
    loadUsers,
    userCount,
  };
});
