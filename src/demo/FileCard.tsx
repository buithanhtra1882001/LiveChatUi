import React from "react";
import { DemoPage, DemoSection } from "../components";
import { FileCard } from "../src";

const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <FileCard file={file} />
    </DemoSection>
    <DemoSection title="Chỉ định phần mở rộng">
      <FileCard file={file} extension="pdf" />
    </DemoSection>
    <DemoSection title="Nội dung bổ sung">
      <FileCard file={file}>
        <a href="https://chatui.io/">Tải xuống</a>
      </FileCard>
    </DemoSection>
  </DemoPage>
);
