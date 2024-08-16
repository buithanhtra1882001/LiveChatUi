import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Loading } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Loading />
    </DemoSection>
    <DemoSection title="Văn bản tải">
      <Loading tip="Đang tải..." />
    </DemoSection>
  </DemoPage>
);
