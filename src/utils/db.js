import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH5F_GkzxuhYEnM1b17Em7TIeRa3biRsg",
  authDomain: "database-ab5ab.firebaseapp.com",
  projectId: "database-ab5ab",
  storageBucket: "database-ab5ab.appspot.com",
  messagingSenderId: "908064451021",
  appId: "1:908064451021:web:38ae3e9d3e02a56585bc84"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);