<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const displayName = ref('');
const email = ref('');

onMounted(() => {
  if (authStore.currentUser) {
    displayName.value = authStore.currentUser.displayName || '';
    email.value = authStore.currentUser.email || '';
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>
        
        <div class="bg-white shadow rounded-lg p-6 space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Display Name</label>
            <div class="mt-1">
              <input
                type="text"
                v-model="displayName"
                class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input
                type="email"
                v-model="email"
                disabled
                class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>

          <div class="pt-5">
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>