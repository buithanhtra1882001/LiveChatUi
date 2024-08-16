import arEG from "./ar_EG";
import enUS from "./en_US";
import frFR from "./fr_FR";
import zhCN from "./zh_CN";
import viVN from "./vi_VN";

export default {
  "ar-EG": arEG, // Tiếng Ả Rập
  "fr-FR": frFR, // Tiếng Pháp
  "en-US": enUS, // Tiếng Anh (Mỹ)
  "vi-VN": viVN, // Tiếng Việt
  "zh-CN": zhCN, // Tiếng Trung (Giản thể)
} as Record<string, any>;
