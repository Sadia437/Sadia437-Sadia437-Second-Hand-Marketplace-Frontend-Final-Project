import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKHXgrvgFNX86GX6uP11nvIMlQfBNHpik",
  authDomain: "secondhand-marketplace-80630.firebaseapp.com",
  projectId: "secondhand-marketplace-80630",
  storageBucket: "secondhand-marketplace-80630.firebasestorage.app",
  messagingSenderId: "140222442474",
  appId: "1:140222442474:web:05c27b5e28fb1425eb2093"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
