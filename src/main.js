import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import Login from './Layout/Wrapper/Login.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("login-layout", Login);

app.mount("#app")