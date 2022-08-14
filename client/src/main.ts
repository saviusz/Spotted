import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import * as pl from "@/lang/pl";
import * as en from "@/lang/en_US";

import App from "./App.vue";
import router from "./router";

import "the-new-css-reset";
import "./assets/main.css";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    pl: pl,
    en: en,
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
