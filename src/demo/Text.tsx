import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Text } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Text>Nội dung văn bản</Text>
    </DemoSection>
    <DemoSection title="Hiển thị một dòng">
      <Text truncate>
        Đây là một đoạn văn bản rất rất rất rất rất rất rất rất dài
      </Text>
    </DemoSection>
    <DemoSection title="Hiển thị nhiều dòng">
      <Text truncate={2}>
        Đây là một đoạn văn bản rất rất rất rất rất rất rất rất rất rất rất rất
        rất rất rất rất rất rất rất rất rất rất rất rất rất rất rất rất rất dài
      </Text>
    </DemoSection>
    <DemoSection title="Xuống dòng theo từ">
      <Text breakWord>ThisIsVeryVeryVeryVeryVeryVeryVeryLongEnglishWord</Text>
    </DemoSection>
  </DemoPage>
);
