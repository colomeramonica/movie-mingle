import 'firebase/auth'
import { initializeApp } from 'firebase/app'
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://movie-mingle-58b82-default-rtdb.firebaseio.com',
  projectId: 'movie-mingle-58b82',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: 'G-T603MNFFTB',
}
export const firebaseApp = initializeApp(firebaseConfig)
