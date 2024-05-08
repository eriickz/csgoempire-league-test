import { createApp, ref } from 'vue';
import axios from "axios"
import App from './App.vue';
import router from './router';
import { LEAGUE_MATCHES } from "./global/constants"
import "./index.css";

axios.defaults.baseURL = "http://localhost:3001/api/v1"

const app = createApp(App);
app.provide(LEAGUE_MATCHES, ref([]))
app.use(router).mount('#app');
