import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7hUAt66ndtDbzl6nShl7XrNfhmr07K3s",
    authDomain: "elite-buttress-418506.firebaseapp.com",
    projectId: "elite-buttress-418506",
    storageBucket: "elite-buttress-418506.appspot.com",
    messagingSenderId: "1095716343097",
    appId: "1:1095716343097:web:7ac9815d4dd8eefee66ce8",
    measurementId: "G-BTPKMPPSC5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Check if redirected from Google OAuth
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

console.log(code)

const app = createApp(App)

app.use(createPinia())
app.use(router)

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

app.mount('#app')
