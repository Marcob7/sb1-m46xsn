<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue)
});

const colorOptions = [
  { name: 'Blue', value: '#0ea5e9' },
  { name: 'Green', value: '#10b981' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' }
];
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">Color Scheme</label>
    <div class="mt-2 grid grid-cols-5 gap-2">
      <button
        v-for="color in colorOptions"
        :key="color.value"
        type="button"
        :class="[
          'w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2',
          value === color.value ? 'ring-2 ring-offset-2 ring-primary-500' : ''
        ]"
        :style="{ backgroundColor: color.value }"
        @click="value = color.value"
      />
    </div>
  </div>
</template>