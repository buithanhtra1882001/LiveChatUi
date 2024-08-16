import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Notice } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản" bg="gray">
      <div style={{ position: "relative", height: "60px" }}>
        <Notice content="Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot" />
      </div>
    </DemoSection>
    <DemoSection title="Không có nút đóng" bg="gray">
      <div style={{ position: "relative", height: "60px" }}>
        <Notice
          closable={false}
          content="Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot, Thông báo nội dung của Bot"
        />
      </div>
    </DemoSection>
    <DemoSection title="Văn bản ngắn" bg="gray">
      <div style={{ position: "relative", height: "60px" }}>
        <Notice content="Thông báo nội dung của Bot, Thông báo nội dung của Bot" />
      </div>
    </DemoSection>
    <DemoSection title="Nút bên trái" bg="gray">
      <div style={{ position: "relative", height: "60px" }}>
        <Notice
          content="Thông báo nội dung của Bot"
          leftIcon="warning-circle-fill"
        />
      </div>
    </DemoSection>
  </DemoPage>
);
