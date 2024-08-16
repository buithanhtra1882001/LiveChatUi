import { useState } from "react";
import Chat from "../demo/Chat";

export default function DemoIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideChat, setHideChat] = useState(true);

  const toggleChat = () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
      setHideChat(true);
    } else {
      setHideChat(false);
      setIsOpen(true);
    }
  };

  return (
    <div className="container-cus">
      <button className="chat-btn-cus" onClick={toggleChat}>
        {isOpen ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90FmR2ZJiVvLg6fPtmdullTNGUf9SKNobnnD8ugA75QgkVzkekQW6CfjMFAWEGZeWAI8&usqp=CAU"
            alt="Trợ lý FPTShop"
            className="chat-icon"
          />
        ) : (
          <img
            src="https://d3v-itcollectionhelp.zendesk.com/flow_composer/assets/bot-avatar/01HZK4VF5BR7JED1W88KNC4C1C"
            alt="Trợ lý FPTShop"
            className="chat-icon"
          />
        )}
        <span className="chat-text">
          Trợ lý
          <br />
          FPTShop
        </span>
      </button>
      {isOpen && (
        <div className={`chat-container ${hideChat ? "hide" : ""}`}>
          <Chat setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      )}
    </div>
  );
}
