import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Price } from "../src";

const number = 1234567.89;

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Price price={123.45} />
    </DemoSection>
    <DemoSection title="Ký hiệu tiền tệ">
      <Price price={123.45} currency="$" />
    </DemoSection>
    <DemoSection title="Giá gốc">
      <Price price={123.45} original />
    </DemoSection>
    <DemoSection title="Quốc tế hóa">
      <div>
        <span>Nhân dân tệ:</span>
        <Price price={number} locale="zh-CN" currency="CNY" />
      </div>
      <div>
        <span>Đô la Hồng Kông:</span>
        <Price price={number} locale="zh-HK" currency="HKD" />
      </div>
      <div>
        <span>Đô la Mỹ:</span>
        <Price price={number} locale="en-US" currency="USD" />
      </div>
      <div>
        <span>Euro:</span>
        <Price price={number} locale="de-DE" currency="EUR" />
      </div>
      <div>
        <span>Bảng Anh:</span>
        <Price price={number} locale="en-GB" currency="GBP" />
      </div>
      <div>
        <span>Yên Nhật:</span>
        <Price price={number} locale="ja-JP" currency="JPY" />
      </div>
      <div>
        <span>Baht Thái:</span>
        <Price price={number} locale="th-TH" currency="THB" />
      </div>
      <div>
        <span>Việt Nam đồng:</span>
        <Price price={number} locale="vi-VN" currency="VND" />
      </div>
    </DemoSection>
  </DemoPage>
);
