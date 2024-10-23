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

const roles = [
  'Physician',
  'Nurse',
  'Nurse Practitioner',
  'Physician Assistant',
  'Technician',
  'Pharmacist',
  'Laboratory Technologist',
  'Administrative Staff',
  'Social Worker',
  'Therapist'
];
</script>

<template>
  <div>
    <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
    <select
      id="role"
      v-model="value"
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
    >
      <option value="">Select Role</option>
      <option v-for="role in roles" :key="role" :value="role">
        {{ role }}
      </option>
    </select>
  </div>
</template>