import React from "react";
import { DemoPage, DemoSection } from "../components";
import { MediaObject } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <MediaObject
        picUrl="https://gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg"
        picAlt="ChatUI"
        picSize="lg"
        title="ChatUI"
        meta="Hệ thống thiết kế và phát triển phục vụ cho lĩnh vực đối thoại, hỗ trợ xây dựng chatbot thông minh"
      />
    </DemoSection>
  </DemoPage>
);
