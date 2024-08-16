import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Divider } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Divider />
    </DemoSection>
    <DemoSection title="Hiển thị văn bản">
      <Divider>Văn bản</Divider>
    </DemoSection>
    <DemoSection title="Vị trí nội dung">
      <Divider>Văn bản</Divider>
      <Divider position="left">Văn bản trái</Divider>
      <Divider position="right">Văn bản phải</Divider>
    </DemoSection>
  </DemoPage>
);
