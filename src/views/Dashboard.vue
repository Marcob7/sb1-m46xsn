<script setup lang="ts">
import { onMounted } from 'vue';
import { useBadgeStore } from '../stores/badge';
import { useAuthStore } from '../stores/auth';
import BadgeForm from '../components/badge/BadgeForm.vue';

const badgeStore = useBadgeStore();
const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.currentUser?.uid) {
    await badgeStore.fetchUserBadges(authStore.currentUser.uid);
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Badge Management Dashboard</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Create New Badge</h2>
          <BadgeForm />
        </div>
        
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Your Badges</h2>
          <div class="space-y-4">
            <div
              v-for="badge in badgeStore.getUserBadges"
              :key="badge.id"
              class="bg-white p-4 rounded-lg shadow"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-medium">{{ badge.pseudonym }}</h3>
                  <p class="text-sm text-gray-500">{{ badge.department }} - {{ badge.role }}</p>
                </div>
                <span
                  :class="[
                    'px-2 py-1 text-xs font-medium rounded-full',
                    badge.status === 'approved' ? 'bg-green-100 text-green-800' :
                    badge.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  ]"
                >
                  {{ badge.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>