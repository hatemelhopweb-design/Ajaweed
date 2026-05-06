import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc, increment, serverTimestamp, setDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function trackVisitor() {
  const path = 'global_stats/visitors';
  const visitorDoc = doc(db, 'global_stats', 'visitors');
  
  if (typeof window !== 'undefined' && !sessionStorage.getItem('visitor_tracked')) {
    try {
      const snap = await getDoc(visitorDoc);
      if (snap.exists()) {
        await updateDoc(visitorDoc, {
          value: increment(1),
          updatedAt: serverTimestamp()
        });
      } else {
        await setDoc(visitorDoc, {
          value: 1,
          updatedAt: serverTimestamp()
        });
      }
      sessionStorage.setItem('visitor_tracked', 'true');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  }
}

export async function getVisitorCount(): Promise<number> {
  const path = 'global_stats/visitors';
  const visitorDoc = doc(db, 'global_stats', 'visitors');
  try {
    const snap = await getDoc(visitorDoc);
    return snap.exists() ? snap.data().value : 0;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return 0;
  }
}
