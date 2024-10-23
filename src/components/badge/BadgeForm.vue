<script setup lang="ts">
import { ref } from 'vue';
import { useBadgeStore } from '../../stores/badge';
import { useAuthStore } from '../../stores/auth';
import ColorPicker from './ColorPicker.vue';
import DepartmentSelect from './DepartmentSelect.vue';
import RoleSelect from './RoleSelect.vue';

const badgeStore = useBadgeStore();
const authStore = useAuthStore();

const pseudonym = ref('');
const department = ref('');
const role = ref('');
const colorScheme = ref('#0ea5e9');

const submitForm = async () => {
  try {
    if (!authStore.currentUser?.uid) return;
    
    await badgeStore.createBadge({
      userId: authStore.currentUser.uid,
      pseudonym: pseudonym.value,
      department: department.value,
      role: role.value,
      colorScheme: colorScheme.value
    });
    
    // Reset form
    pseudonym.value = '';
    department.value = '';
    role.value = '';
    colorScheme.value = '#0ea5e9';
  } catch (error) {
    console.error('Error creating badge:', error);
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
    <div>
      <label for="pseudonym" class="block text-sm font-medium text-gray-700">Pseudonym</label>
      <input
        id="pseudonym"
        v-model="pseudonym"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        placeholder="Enter preferred display name"
      />
    </div>

    <DepartmentSelect v-model="department" />
    <RoleSelect v-model="role" />
    <ColorPicker v-model="colorScheme" />

    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      Create Badge
    </button>
  </form>
</template>