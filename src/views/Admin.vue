<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useBadgeStore } from '../stores/badge';

const badgeStore = useBadgeStore();
const searchQuery = ref('');

const filteredBadges = computed(() => {
  return badgeStore.getPendingBadges.filter(badge => 
    badge.pseudonym.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    badge.department.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    badge.role.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const approveBadge = async (badgeId: string) => {
  // Implementation for badge approval
};

const rejectBadge = async (badgeId: string) => {
  // Implementation for badge rejection
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div class="mb-6">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search badges..."
          class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="space-y-4">
            <div v-for="badge in filteredBadges" :key="badge.id" class="border-b border-gray-200 pb-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-medium">{{ badge.pseudonym }}</h3>
                  <p class="text-sm text-gray-500">{{ badge.department }} - {{ badge.role }}</p>
                </div>
                <div class="space-x-2">
                  <button
                    @click="approveBadge(badge.id)"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    @click="rejectBadge(badge.id)"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>