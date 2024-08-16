import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Input } from "../src";

export default () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Input
          value={value1}
          onChange={setValue1}
          placeholder="Vui lòng nhập..."
        />
      </DemoSection>
      <DemoSection title="Nhập nhiều dòng">
        <Input
          rows={3}
          value={value2}
          onChange={setValue2}
          placeholder="Vui lòng nhập..."
        />
      </DemoSection>
      <DemoSection title="Tự điều chỉnh chiều cao">
        <Input
          autoSize
          value={value3}
          onChange={setValue3}
          placeholder="Vui lòng nhập..."
        />
      </DemoSection>
      <DemoSection title="Giới hạn số ký tự">
        <Input
          maxLength={20}
          value={value4}
          onChange={setValue4}
          placeholder="Vui lòng nhập..."
        />
      </DemoSection>
      <DemoSection title="Giới hạn số ký tự (không hiển thị)">
        <Input
          maxLength={10}
          value={value5}
          onChange={setValue5}
          placeholder="Vui lòng nhập..."
          showCount={false}
        />
      </DemoSection>
      <DemoSection title="Hiển thị số ký tự">
        <Input
          value={value6}
          onChange={setValue6}
          placeholder="Vui lòng nhập..."
          showCount
        />
      </DemoSection>
      <DemoSection title="Biến thể">
        <Input placeholder="Default (Outline)" />
        <br />
        <Input placeholder="Outline" variant="outline" />
        <br />
        <Input placeholder="Filled" variant="filled" />
        <br />
        <Input placeholder="Flushed" variant="flushed" />
      </DemoSection>
    </DemoPage>
  );
};
