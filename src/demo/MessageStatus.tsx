import React from "react";
import { DemoPage, DemoSection } from "../components";
import { MessageStatus } from "../src";

export default () => {
  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản (loading sau 1,5 giây, thất bại sau 5 giây)">
        <MessageStatus status="pending" />
      </DemoSection>
      <DemoSection title="Gửi thành công">
        <MessageStatus status="sent" />
      </DemoSection>
      <DemoSection title="Gửi thất bại">
        <MessageStatus status="fail" />
      </DemoSection>
    </DemoPage>
  );
};
