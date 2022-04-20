import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabs,Button,Table,Select,Input } from "@oruga-ui/oruga-next";
import "@oruga-ui/oruga-next/dist/oruga.css";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Tabs)
app.use(Button)
app.use(Table)
app.use(Select)
app.use(Input)
app.mount("#app");

