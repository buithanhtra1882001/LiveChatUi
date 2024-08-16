import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Empty, Button } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Empty tip="Chưa có dữ liệu" />
    </DemoSection>
    <DemoSection title="Nội dung tùy chỉnh">
      <Empty type="error" tip="Oops... Tải thất bại, bấm để thử lại">
        <Button color="primary">Làm mới</Button>
      </Empty>
    </DemoSection>
  </DemoPage>
);
