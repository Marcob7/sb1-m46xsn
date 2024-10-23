import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  type DocumentData
} from 'firebase/firestore';
import { db } from '../firebase/config';

interface Badge {
  id: string;
  userId: string;
  pseudonym: string;
  department: string;
  role: string;
  colorScheme: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export const useBadgeStore = defineStore('badge', () => {
  const badges = ref<Badge[]>([]);
  const loading = ref(false);

  const getUserBadges = computed(() => badges.value);
  const getPendingBadges = computed(() => 
    badges.value.filter(badge => badge.status === 'pending')
  );

  const createBadge = async (badgeData: Omit<Badge, 'id' | 'status' | 'createdAt'>) => {
    try {
      loading.value = true;
      const docRef = await addDoc(collection(db, 'badges'), {
        ...badgeData,
        status: 'pending',
        createdAt: new Date()
      });
      
      const newBadge: Badge = {
        id: docRef.id,
        ...badgeData,
        status: 'pending',
        createdAt: new Date()
      };
      
      badges.value.push(newBadge);
      return newBadge;
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserBadges = async (userId: string) => {
    try {
      loading.value = true;
      const q = query(collection(db, 'badges'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      
      badges.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Badge[];
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      loading.value = false;
    }
  };

  const updateBadgeStatus = async (badgeId: string, status: Badge['status']) => {
    try {
      loading.value = true;
      const badgeRef = doc(db, 'badges', badgeId);
      await updateDoc(badgeRef, { status });
      
      const index = badges.value.findIndex(b => b.id === badgeId);
      if (index !== -1) {
        badges.value[index].status = status;
      }
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      loading.value = false;
    }
  };

  return {
    badges,
    loading,
    getUserBadges,
    getPendingBadges,
    createBadge,
    fetchUserBadges,
    updateBadgeStatus
  };
});