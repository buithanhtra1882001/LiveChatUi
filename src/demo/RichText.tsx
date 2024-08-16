import React from "react";
import { DemoPage, DemoSection } from "../components";
import { RichText } from "../src";

const html =
  "<div><h1>Tiêu đề H1</h1><p>Đây là đoạn văn <em>thẻ em</em><strong>thẻ strong</strong></p></div>";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <RichText content={html} />
    </DemoSection>
  </DemoPage>
);
