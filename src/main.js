import { createApp } from 'vue';
import axios from "axios"
import App from './App.vue';
import router from './router';
import "./index.css";

axios.defaults.baseURL = "http://localhost:3001/api/v1"

const app = createApp(App);
app.use(router).mount('#app');
