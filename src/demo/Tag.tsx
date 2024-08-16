import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Tag } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Tag>Thẻ mặc định</Tag>
      <Tag color="primary">Thẻ sản phẩm</Tag>
      <Tag color="success">Trạng thái thành công</Tag>
      <Tag color="danger">Trạng thái thất bại</Tag>
      <Tag color="warning">Trạng thái cảnh báo</Tag>
    </DemoSection>
  </DemoPage>
);
