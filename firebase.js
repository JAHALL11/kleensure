
// ============================================
// KLEENSURE - FIREBASE CONFIGURATION
// Firebase SDK v11.6.0
// ============================================

// Firebase App
import {
  initializeApp,
  getApps,
  getApp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

// Firebase Authentication
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Cloud Firestore
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase Storage
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

// ============================================
// FIREBASE PROJECT CONFIGURATION
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyCik-MVlxK6cshGy87dXOi10a0_c52cO1w",
  authDomain: "inventory-4f2b5.firebaseapp.com",
  projectId: "inventory-4f2b5",
  storageBucket: "inventory-4f2b5.firebasestorage.app",
  messagingSenderId: "185805306294",
  appId: "1:185805306294:web:d674bd3c32b9994fa46917",
  measurementId: "G-5KCN8KL8ET"
};

// ============================================
// INITIALIZE FIREBASE
// ============================================

export const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

// ============================================
// INITIALIZE FIREBASE SERVICES
// ============================================

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ============================================
// OPTIONAL DEFAULT EXPORT
// ============================================

const firebaseServices = {
  app,
  auth,
  db,
  storage
};

export default firebaseServices;