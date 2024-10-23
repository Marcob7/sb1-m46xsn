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

const departments = [
  'Emergency Medicine',
  'Internal Medicine',
  'Surgery',
  'Pediatrics',
  'Obstetrics & Gynecology',
  'Psychiatry',
  'Radiology',
  'Anesthesiology',
  'Laboratory',
  'Pharmacy'
];
</script>

<template>
  <div>
    <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
    <select
      id="department"
      v-model="value"
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
    >
      <option value="">Select Department</option>
      <option v-for="dept in departments" :key="dept" :value="dept">
        {{ dept }}
      </option>
    </select>
  </div>
</template>