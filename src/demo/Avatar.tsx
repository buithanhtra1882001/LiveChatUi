import React from "react";
import { DemoPage, DemoSection } from "../components";
// import { Avatar } from "../../../src";
import { Avatar } from "../src";

const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";

export default () => (
  <DemoPage>
    <DemoSection title="Kích thước ảnh đại diện">
      <Avatar src={img} size="sm" />
      <Avatar src={img} />
      <Avatar src={img} size="lg" />
    </DemoSection>
    <DemoSection title="Hình dạng ảnh đại diện">
      <Avatar src={img} size="sm" shape="square" />
      <Avatar src={img} shape="square" />
      <Avatar src={img} size="lg" shape="square" />
    </DemoSection>
  </DemoPage>
);
