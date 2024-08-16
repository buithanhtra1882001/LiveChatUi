import React from "react";
import { DemoPage, DemoSection } from "../components";
import { RateActions, ConfigProvider } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản" bg="gray">
      <RateActions
        onClick={(val: string) => {
          console.log(val);
        }}
      />
    </DemoSection>
    <DemoSection title="Đa ngôn ngữ (Tiếng Anh)" bg="gray">
      <ConfigProvider locale="en-US">
        <RateActions
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </ConfigProvider>
    </DemoSection>
    <DemoSection title="Chỉnh sửa tiêu đề" bg="gray">
      <ConfigProvider locale="en-US">
        <RateActions
          upTitle="Like"
          downTitle="Unlike"
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </ConfigProvider>
    </DemoSection>
  </DemoPage>
);
