import 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAJACywKruv7oCTYFccGyB2XwrRzdqqY0U',
  authDomain: 'movie-mingle-58b82.firebaseapp.com',
  databaseURL: 'https://movie-mingle-58b82-default-rtdb.firebaseio.com',
  projectId: 'movie-mingle-58b82',
  storageBucket: 'movie-mingle-58b82.appspot.com',
  messagingSenderId: '1020652618276',
  appId: '1:1020652618276:web:f6f4091c486b03b9aa0eb1',
  measurementId: 'G-T603MNFFTB',
}
export const firebaseApp = initializeApp(firebaseConfig)
