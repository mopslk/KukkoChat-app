import { defineStore } from 'pinia';
import { container } from 'tsyringe';
import type { User } from "@/domain/entities/User";
import type { IUserService } from "@/domain/services/IUserService";

export const useUserVM = defineStore('user', () => {
    const userService = container.resolve<IUserService>('IUserService');

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
        userCount
    };
});