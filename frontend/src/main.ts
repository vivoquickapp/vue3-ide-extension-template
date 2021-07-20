import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import i18n from "./i18n/index";
import "./assets/style/common.less";

// @ts-ignore
const vscode = acquireVsCodeApi();
const app = createApp(App);
app.use(store);
app.use(i18n);
app.mount("#app");

window.addEventListener("message", (event) => {
  const message = event.data;
  switch (message.command) {
    case "setSetting": {
      const resource =
        message.data.resource.scheme +
        "://" +
        message.data.resource.authority +
        message.data.resource.path;
      store.dispatch("setting/changeLanguage", message.data.language);
      store.dispatch("setting/changeResource", resource);
      break;
    }
    default:
      break;
  }
});

window.addEventListener("load", () => {
  vscode.postMessage({
    command: "getSetting",
  });
});
