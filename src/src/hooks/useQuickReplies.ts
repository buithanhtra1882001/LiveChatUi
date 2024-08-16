import { useState, useEffect, useRef } from "react";
import { QuickReplyItemProps } from "../components/QuickReplies";

type QuickReplies = QuickReplyItemProps[];

export default function useQuickReplies(initialState: QuickReplies = []) {
  const [quickReplies, setQuickReplies] = useState(initialState);
  const [visible, setVisible] = useState(true);
  const savedRef = useRef<QuickReplies>();
  const stashRef = useRef<QuickReplies>();

  useEffect(() => {
    savedRef.current = quickReplies;
  }, [quickReplies]);

  const prepend = (list: QuickReplies) => {
    setQuickReplies((prev) => [...list, ...prev]);
  };

  // Sau khi sử dụng prepend hoặc replace, nếu ngay lập tức gọi save, chỉ lưu trạng thái trước đó
  // Điều này xảy ra vì cập nhật savedRef.current có độ ưu tiên cuối cùng, sử dụng setTimeout có thể giải quyết vấn đề này
  const save = () => {
    stashRef.current = savedRef.current;
  };

  const pop = () => {
    if (stashRef.current) {
      setQuickReplies(stashRef.current);
    }
  };

  return {
    quickReplies,
    prepend,
    replace: setQuickReplies,
    visible,
    setVisible,
    save,
    pop,
  };
}
