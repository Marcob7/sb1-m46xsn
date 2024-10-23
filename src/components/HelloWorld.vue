<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const navigateToDashboard = () => {
  if (authStore.isAuthenticated) {
    router.push('/dashboard');
  } else {
    router.push('/login');
  }
};

defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">{{ msg }}</span>
          <span class="block text-primary-600 mt-2">Healthcare Badge Management</span>
        </h1>
        
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Secure, compliant, and efficient badge management system for healthcare professionals. Create and manage your digital identity with confidence.
        </p>

        <div class="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <button
            @click="navigateToDashboard"
            class="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
          >
            Get Started
          </button>
          
          <a
            href="#features"
            class="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      <div id="features" class="mt-24">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-primary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Secure Identity</h3>
            <p class="text-gray-600">Advanced encryption and security measures to protect your digital identity.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-primary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
            <p class="text-gray-600">Built with healthcare privacy and compliance requirements in mind.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-primary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">QR Integration</h3>
            <p class="text-gray-600">Quick verification with secure QR codes linked to verified credentials.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>