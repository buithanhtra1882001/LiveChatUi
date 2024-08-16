import React, { useEffect } from "react";
import { ConfigProvider, ConfigContextType } from "../ConfigProvider";
import { Navbar, NavbarProps } from "../Navbar";
import {
  MessageContainer,
  MessageContainerProps,
  MessageContainerHandle,
} from "../MessageContainer";
import { QuickReplies, QuickReplyItemProps } from "../QuickReplies";
import {
  Composer as DComposer,
  ComposerProps,
  ComposerHandle,
} from "../Composer";
import { isSafari, getIOSMajorVersion } from "../../utils/ua";

export type ChatProps = Omit<ComposerProps, "onFocus" | "onChange" | "onBlur"> &
  ConfigContextType &
  MessageContainerProps & {
    /**
     * Điểm phân cách chế độ rộng
     */
    // wideBreakpoint?: string;
    /**
     * Cấu hình thanh điều hướng
     */
    navbar?: NavbarProps;
    /**
     * Hàm render thanh điều hướng
     */
    renderNavbar?: () => React.ReactNode;
    /**
     * Văn bản tải thêm
     */
    // loadMoreText?: string;
    /**
     * Hàm render phía trên danh sách tin nhắn
     */
    // renderBeforeMessageList?: () => React.ReactNode;
    /**
     * Tham chiếu danh sách tin nhắn
     */
    messagesRef?: React.RefObject<MessageContainerHandle>;
    /**
     * Callback tải lại khi kéo xuống
     */
    // onRefresh?: () => Promise<any>;
    /**
     * Callback cuộn danh sách tin nhắn
     */
    // onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    /**
     * Danh sách tin nhắn
     */
    // messages: MessageProps[];
    /**
     * Hàm render nội dung tin nhắn
     */
    // renderMessageContent: (message: MessageProps) => React.ReactNode;
    /**
     * Cụm từ tắt
     */
    quickReplies?: QuickReplyItemProps[];
    /**
     * Cụm từ tắt có thể nhìn thấy không
     */
    quickRepliesVisible?: boolean;
    /**
     * Callback khi nhấp vào cụm từ tắt
     */
    onQuickReplyClick?: (item: QuickReplyItemProps, index: number) => void;
    /**
     * Callback cuộn cụm từ tắt
     */
    onQuickReplyScroll?: () => void;
    /**
     * Hàm render cụm từ tắt
     */
    renderQuickReplies?: () => void;
    /**
     * Tham chiếu khu vực nhập
     */
    composerRef?: React.RefObject<ComposerHandle>;
    /**
     * Nội dung khởi tạo của ô nhập
     */
    // text?: string;
    /**
     * Placeholder của ô nhập
     */
    // placeholder?: string;
    /**
     * Callback khi ô nhập được tập trung
     */
    onInputFocus?: ComposerProps["onFocus"];
    /**
     * Callback khi ô nhập thay đổi
     */
    onInputChange?: ComposerProps["onChange"];
    /**
     * Callback khi ô nhập mất tập trung
     */
    onInputBlur?: ComposerProps["onBlur"];
    /**
     * Callback gửi tin nhắn
     */
    // onSend: (type: string, content: string) => void;
    /**
     * Callback gửi hình ảnh
     */
    // onImageSend?: (file: File) => Promise<any>;
    /**
     * Loại nhập liệu
     */
    // inputType?: InputType;
    /**
     * Callback thay đổi loại nhập liệu
     */
    // onInputTypeChange?: () => void;
    /**
     * Nhập liệu bằng giọng nói
     */
    // recorder?: RecorderProps;
    /**
     * Thanh công cụ
     */
    // toolbar?: ToolbarItemProps[];
    /**
     * Callback khi nhấp vào thanh công cụ
     */
    // onToolbarClick?: () => void;
    /**
     * Callback khi nhấp vào nội dung phụ
     */
    // onAccessoryToggle?: () => void;
    /**
     * Thành phần nhập liệu
     */
    Composer?: React.ElementType; // FIXME
  };

export const Chat = React.forwardRef<HTMLDivElement, ChatProps>(
  (props, ref) => {
    const {
      wideBreakpoint,
      locale = "zh-CN",
      locales,
      elderMode,
      navbar,
      renderNavbar,
      loadMoreText,
      renderBeforeMessageList,
      messagesRef,
      onRefresh,
      onScroll,
      messages = [],
      isTyping,
      renderMessageContent,
      onBackBottomShow,
      onBackBottomClick,
      quickReplies = [],
      quickRepliesVisible,
      onQuickReplyClick = () => {},
      onQuickReplyScroll,
      renderQuickReplies,
      text,
      textOnce,
      placeholder,
      onInputFocus,
      onInputChange,
      onInputBlur,
      onSend,
      onImageSend,
      inputOptions,
      composerRef,
      inputType,
      onInputTypeChange,
      recorder,
      toolbar,
      onToolbarClick,
      onAccessoryToggle,
      rightAction,
      Composer = DComposer,
    } = props;

    function handleInputFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
      if (messagesRef && messagesRef.current) {
        messagesRef.current.scrollToEnd({ animated: false, force: true });
      }
      if (onInputFocus) {
        onInputFocus(e);
      }
    }

    useEffect(() => {
      const rootEl = document.documentElement;
      if (isSafari()) {
        rootEl.dataset.safari = "";
      }

      const v = getIOSMajorVersion();
      // iOS 9 và 10 không hỗ trợ việc sử dụng flex cho nút
      if (v && v < 11) {
        rootEl.dataset.oldIos = "";
      }
    }, []);

    // console.log('---------text', text);

    return (
      <ConfigProvider locale={locale} locales={locales} elderMode={elderMode}>
        <div className="ChatApp" data-elder-mode={elderMode} ref={ref}>
          {renderNavbar ? renderNavbar() : navbar && <Navbar {...navbar} />}
          <MessageContainer
            ref={messagesRef}
            loadMoreText={loadMoreText}
            messages={messages}
            isTyping={isTyping}
            renderBeforeMessageList={renderBeforeMessageList}
            renderMessageContent={renderMessageContent}
            onRefresh={onRefresh}
            onScroll={onScroll}
            onBackBottomShow={onBackBottomShow}
            onBackBottomClick={onBackBottomClick}
          />
          <div className="ChatFooter">
            {renderQuickReplies ? (
              <>{renderQuickReplies()}</>
            ) : (
              <QuickReplies
                items={quickReplies}
                visible={quickRepliesVisible}
                onClick={onQuickReplyClick}
                onScroll={onQuickReplyScroll}
              />
            )}
            <Composer
              wideBreakpoint={wideBreakpoint}
              ref={composerRef}
              inputType={inputType}
              text={text}
              textOnce={textOnce}
              inputOptions={inputOptions}
              placeholder={placeholder}
              onAccessoryToggle={onAccessoryToggle}
              recorder={recorder}
              toolbar={toolbar}
              onToolbarClick={onToolbarClick}
              onInputTypeChange={onInputTypeChange}
              onFocus={handleInputFocus}
              onChange={onInputChange}
              onBlur={onInputBlur}
              onSend={onSend}
              onImageSend={onImageSend}
              rightAction={rightAction}
            />
          </div>
        </div>
      </ConfigProvider>
    );
  }
);
