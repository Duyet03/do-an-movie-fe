
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import Login from './layout/wrapper/login.vue'
import client from './layout/wrapper/client.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("login-layout", Login);
app.component("client-layout", client);


app.mount("#app")