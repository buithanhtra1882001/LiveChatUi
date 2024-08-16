import React from "react";
import { DemoPage, DemoSection } from "../components";
import { SystemMessage } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <SystemMessage content="Dịch vụ khách hàng thông minh dành riêng cho VIP" />
    </DemoSection>
  </DemoPage>
);
