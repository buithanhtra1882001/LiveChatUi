import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import Chat, {
  Bubble,
  MessageProps,
  useMessages,
  QuickReplyItemProps,
  useQuickReplies,
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  Button,
  List,
  ListItem,
  Flex,
  FlexItem,
  ScrollView,
  ToolbarItemProps,
  RateActions,
} from "../src";
import OrderSelector from "./OrdderSelector";
import EmojiPicker from "emoji-picker-react";
import EventEmitter from "event-emitter";

export const eventBus = EventEmitter();

type MessageWithoutId = Omit<MessageProps, "_id">;

const initialMessages: MessageWithoutId[] = [
  {
    type: "system",
    content: { text: "Dịch vụ khách hàng thông minh BOT sẵn sàng phục vụ bạn" },
  },
  {
    type: "text",
    content: {
      text: "Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
    },
    user: {
      avatar:
        "//gw.alicdn.com/imgextra/i3/O1CN015amSBN287NjjndS06_!!6000000007885-2-tps-99-98.png",
      name: "Bot",
    },
    createdAt: Date.now(),
    hasTime: true,
  },
  {
    type: "text",
    content: { text: "Xin chào" },
    user: {
      avatar: "//gw.alicdn.com/tfs/TB1g6n4xQP2gK0jSZPxXXacQpXa-234-216.png",
      name: "user",
    },
    createdAt: Date.now(),
    hasTime: true,
    position: "right",
  },
  {
    type: "guess-you",
  },
  {
    type: "skill-cards",
  },
  {
    type: "text",
    content: { text: "Bot, tôi muốn xem thông tin vận chuyển của tôi" },
    position: "right",
    user: {
      avatar: "//gw.alicdn.com/tfs/TB1g6n4xQP2gK0jSZPxXXacQpXa-234-216.png",
    },
  },
  {
    type: "image",
    content: {
      picUrl: "//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
    },
  },
  {
    type: "system",
    content: {
      text: "Do bạn đã không nói chuyện trong một thời gian dài hoặc đã thoát khỏi Bot (rời khỏi trang, khóa màn hình, v.v.), dịch vụ lần này đã tự động kết thúc",
    },
  },
  {
    type: "image-text-button",
    content: {},
  },
];

const defaultQuickReplies = [
  {
    icon: "shopping-bag",
    name: "Hỏi về vấn đề đơn hàng (làm nổi bật)",
    code: "orderSelector",
    isHighlight: true,
  },
  {
    icon: "shopping-bag",
    name: "Làm thế nào để yêu cầu hoàn tiền (làm nổi bật)",
    code: "orderSelector",
    isHighlight: true,
  },
  {
    icon: "message",
    name: "Liên hệ dịch vụ khách hàng (làm nổi bật + mới)",
    code: "q1",
    isNew: true,
    isHighlight: true,
  },
  {
    name: "Vấn đề chất lượng (mới)",
    code: "q3",
    isNew: true,
  },
  {
    name: "nội dung/bài viết của người bán",
    code: "q4",
  },
  {
    name: "5 cụm từ nhanh mạnh mẽ",
    code: "q5",
  },
  {
    name: "6 cụm từ nhanh yếu",
    code: "q6",
  },
];

const skillList = [
  { title: "nạp tiền điện thoại", desc: "nạp tiền thông minh" },
  { title: "quản lý đánh giá", desc: "đánh giá của tôi" },
  { title: "liên hệ với người bán", desc: "liên hệ nhanh" },
  { title: "Khuyến mãi và phiếu giảm giá", desc: "Sử dụng ưu đãi" },
  { title: "Chỉnh sửa địa chỉ", desc: "Chỉnh sửa địa chỉ" },
];

// eslint-disable-next-line @typescript-eslint/no-redeclare
const toolbar: ToolbarItemProps[] = [
  {
    type: "smile",
    icon: "smile",
    title: "Biểu cảm",
  },
  {
    type: "image",
    icon: "image",
    title: "Tải lên hình ảnh",
  },
];

export default ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}) => {
  // Danh sách tin nhắn
  const { messages, appendMsg, setTyping, prependMsgs } =
    useMessages(initialMessages);
  const { quickReplies, replace } = useQuickReplies(defaultQuickReplies);
  const msgRef = React.useRef(null);

  // const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  window.appendMsg = appendMsg;
  window.msgRef = msgRef;

  // Gửi callback
  function handleSend(type: string, val: string) {
    if (type === "text" && val.trim()) {
      // TODO: Gửi yêu cầu
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTimeout(() => {
        setTyping(true);
      }, 1000);

      // Mô phỏng trả lời tin nhắn
      setTimeout(() => {
        appendMsg({
          type: "text",
          content: {
            text: "Bạn ơi, bạn gặp phải vấn đề gì vậy? Hãy mô tả ngắn gọn vấn đề của bạn nhé!",
          },
        });
      }, 1500);
    }
  }

  // Callback cho cụm từ nhanh, có thể thực hiện các thao tác khác nhau dựa trên dữ liệu của item, ví dụ ở đây là gửi tin nhắn văn bản"
  function handleQuickReplyClick(item: QuickReplyItemProps) {
    handleSend("text", item.name);

    if (item.code === "q1") {
      replace([
        {
          name: "Cụm từ a",
          code: "qa",
          isHighlight: true,
        },
        {
          name: "Cụm từ b",
          code: "qb",
        },
      ]);
    } else if (item.code === "orderSelector") {
      // appendMsg({
      //   type: "order-selector",
      //   content: {},
      //   position: "pop",
      // });
    }
  }

  function handleRefresh() {
    // Call api to get old messages
    return new Promise((resolve) => {
      setTimeout(() => {
        const now = Date.now();

        prependMsgs([
          {
            _id: now + "1111",
            type: "text",
            content: {
              text: "11111Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "2222",
            type: "text",
            content: {
              text: "22222 Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "3333",
            type: "text",
            content: {
              text: "333 Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "4444",
            type: "text",
            content: {
              text: "444 Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "5555",
            type: "text",
            content: {
              text: "555 Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "6666",
            type: "text",
            content: {
              text: "666 Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "7777",
            type: "text",
            content: {
              text: "777 Hi，Mình là trợ lý thông minh riêng của bạn, Bot. Nếu có vấn đề gì, hãy liên hệ với mình bất cứ lúc nào nhé~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
        ]);
        resolve({});
      }, 800);
    });
  }

  function handleToolbarClick(item: ToolbarItemProps) {
    if (item.type === "image") {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
    if (item.type === "smile") {
      setShowEmojiPicker((prev) => !prev);
    }
  }

  const handleEmojiClick = (emojiObject: any) => {
    // Gửi emoji sử dụng event bus
    eventBus.emit("emoji", emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        appendMsg({
          type: "image",
          content: {
            picUrl: reader.result as string,
          },
          position: "right",
        });
      };
      reader.readAsDataURL(file);
    }
  }

  function renderMessageContent(msg: MessageProps) {
    const { type, content } = msg;

    // Render dựa trên loại tin nhắn
    switch (type) {
      case "text":
        return <Bubble content={content.text} />;
      case "guess-you":
        return (
          <Card fluid>
            <Flex>
              <div className="guess-you-aside">
                <h1>Dự đoán bạn muốn hỏi</h1>
              </div>
              <FlexItem>
                <List>
                  <ListItem
                    content="Hoàn tiền từ mã giảm giá của tôi đi đâu?"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="Làm thế nào để chỉnh sửa đánh giá của tôi?"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="Tôi muốn hỏi về vấn đề vận chuyển"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="Làm thế nào để chỉnh sửa đánh giá?"
                    as="a"
                    rightIcon="chevron-right"
                  />
                </List>
              </FlexItem>
            </Flex>
          </Card>
        );
      case "skill-cards":
        return (
          <ScrollView
            className="skill-cards"
            data={skillList}
            fullWidth
            renderItem={(item) => (
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.desc}</CardText>
              </Card>
            )}
          />
        );
      case "order-selector":
        return <OrderSelector />;

      case "image":
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      case "image-text-button":
        return (
          <Flex>
            <Card fluid>
              <CardMedia image="//gw.alicdn.com/tfs/TB1Xv5_vlr0gK0jSZFnXXbRRXXa-427-240.png" />
              <CardTitle>Card title</CardTitle>
              <CardText>
                Nếu bạn muốn người bán gửi hàng nhanh chóng, bạn có thể vào mục
                【Đơn hàng của tôi】 để tìm giao dịch đó, sau đó nhấp vào 【Nhắc
                nhở gửi hàng】 hoặc nhấp vào 【Liên hệ với người bán】 để trao
                đổi với người bán qua công cụ trò chuyện trực tuyến (Wangwang)
                nhằm yêu cầu họ gửi hàng sớm cho bạn. Nếu người bán rõ ràng cho
                biết không thể gửi hàng, bạn nên yêu cầu hoàn tiền và chọn mua
                lại sản phẩm có chất lượng cao hơn nhé.
              </CardText>
              <CardActions>
                <Button>Xác nhận</Button>
                <Button color="primary">Thanh toán ngay</Button>
              </CardActions>
            </Card>
            <RateActions onClick={console.log} />
          </Flex>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <Chat
        elderMode
        onRefresh={handleRefresh}
        navbar={{
          leftContent: {
            icon: "close",
            title: "Close",
            onClick() {
              // navigate('/');
              setIsOpen(!isOpen);
            },
          },
          // rightContent: [
          //   {
          //     icon: "apps",
          //     title: "Applications",
          //   },
          //   {
          //     icon: "ellipsis-h",
          //     title: "More",
          //   },
          // ],
          title: "Trợ lý ảo",
          // desc: 'Đường dây nóng chăm sóc khách hàng',
          logo: "https://gw.alicdn.com/imgextra/i4/O1CN016i66TT24lRwUecIk5_!!6000000007431-2-tps-164-164.png_80x80.jpg",
          align: "left",
        }}
        // rightAction={{ icon: 'close' }}
        toolbar={toolbar}
        messagesRef={msgRef}
        onToolbarClick={handleToolbarClick}
        recorder={{ canRecord: true }}
        wideBreakpoint="600px"
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={quickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
        onImageSend={() => Promise.resolve()}
      />
      {showEmojiPicker && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      <input
        title="Input field"
        placeholder="Enter text"
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload} // Xử lý khi người dùng chọn ảnh
      />
    </>
  );
};
