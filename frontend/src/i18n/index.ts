import { createI18n } from "vue-i18n";

const en = require("./locale/en.json");
const zhCN = require("./locale/zh-CN.json");

// 语言包根据语言环境分类
const messages = {
  en,
  "zh-CN": zhCN,
};

const i18n = createI18n({
  locale: "zh-CN", // 设置当前语言环境，默认中文简体
  messages, // 设置语言环境对应信息
});

export default i18n;