<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  await authStore.logout();
  router.push('/login');
};
</script>

<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-primary-600 font-bold text-xl">
              HealthBadge
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2"
              :class="[$route.path === '/' ? 'border-primary-500' : 'border-transparent hover:border-gray-300']"
            >
              Home
            </router-link>
            
            <router-link
              v-if="authStore.isAuthenticated"
              to="/dashboard"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2"
              :class="[$route.path === '/dashboard' ? 'border-primary-500' : 'border-transparent hover:border-gray-300']"
            >
              Dashboard
            </router-link>
            
            <router-link
              v-if="authStore.isAuthenticated"
              to="/profile"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2"
              :class="[$route.path === '/profile' ? 'border-primary-500' : 'border-transparent hover:border-gray-300']"
            >
              Profile
            </router-link>
            
            <router-link
              v-if="authStore.isAuthenticated"
              to="/admin"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2"
              :class="[$route.path === '/admin' ? 'border-primary-500' : 'border-transparent hover:border-gray-300']"
            >
              Admin
            </router-link>
          </div>
        </div>
        
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <template v-if="authStore.isAuthenticated">
            <button
              @click="handleLogout"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Login
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>