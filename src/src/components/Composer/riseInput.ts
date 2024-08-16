import { isIOS, isSafariOrIOS11, getIOSMajorVersion } from "../../utils/ua";

const iOS = isIOS();

function testScrollType() {
  if (iOS) {
    if (isSafariOrIOS11()) {
      /**
       * Không xử lý
       * - Safari
       * - iOS 11.0-11.3（`scrollTop`/`scrolIntoView` có bug）
       */
      return 0;
    }

    const major = getIOSMajorVersion();
    // Dành cho iOS 12 và các phiên bản thấp hơn sử dụng phương pháp `scrollTop`
    if (major < 13) {
      return 1;
    }
  }
  // Các trường hợp khác sử dụng phương pháp `scrollIntoView`
  return 2;
}

export default function riseInput(input: Element, wrap?: Element | null) {
  const scrollType = testScrollType();
  let scrollTimer: ReturnType<typeof setTimeout>;
  const target = wrap || input;

  const scrollIntoView = () => {
    if (scrollType === 0) return;
    if (scrollType === 1) {
      document.body.scrollTop = document.body.scrollHeight;
    } else {
      target.scrollIntoView(false);
    }
  };

  input.addEventListener("focus", () => {
    setTimeout(scrollIntoView, 300);
    scrollTimer = setTimeout(scrollIntoView, 1000);
  });

  input.addEventListener("blur", () => {
    clearTimeout(scrollTimer);

    // Trong một số trường hợp, sau khi thu gọn bàn phím, ô nhập liệu không thu lại và trang bị khoảng trắng ở dưới
    // Ví dụ: Xianyu, Damai, Le Sport, WeChat
    if (scrollType && iOS) {
      // Để tránh việc nhấp vào cụm từ tắt không có hiệu quả
      setTimeout(() => {
        document.body.scrollIntoView();
      });
    }
  });
}
