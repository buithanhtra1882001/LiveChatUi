import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Search } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Search placeholder="Nhập từ khóa sản phẩm" />
    </DemoSection>
    <DemoSection title="Trạng thái bị vô hiệu hóa">
      <Search disabled aria-label="Search" />
    </DemoSection>
    <DemoSection title="Không bật biểu tượng xóa">
      <Search clearable={false} />
    </DemoSection>
  </DemoPage>
);
