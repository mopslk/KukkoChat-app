<script setup lang="ts">
import { useUserVM } from "@/presentation/viewmodels/useUserVM";

const userVM = useUserVM();

onMounted(() => {
  userVM.loadUsers();
});
</script>

<template>
<div>
  index
</div>
</template>