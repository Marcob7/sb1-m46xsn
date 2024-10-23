import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const loading = ref(true);

  // Initialize auth state
  onAuthStateChanged(auth, (user) => {
    currentUser.value = user;
    isAuthenticated.value = !!user;
    loading.value = false;
  });

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      currentUser.value = userCredential.user;
      isAuthenticated.value = true;
      return userCredential.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      currentUser.value = null;
      isAuthenticated.value = false;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return {
    currentUser,
    isAuthenticated,
    loading,
    login,
    logout
  };
});