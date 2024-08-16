import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Radio, RadioGroup, RadioValue } from "../src";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear", disabled: true },
  { label: "Orange", value: "Orange" },
  { label: "Banana", value: "Banana" },
];

export default () => {
  const [value, setValue] = useState<RadioValue>("a");

  function handleChange(val: RadioValue) {
    setValue(val);
  }

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản" bg="gray">
        <Radio label="Lựa chọn A" value="a" />
        <Radio label="Lựa chọn B" value="b" checked />
        <Radio label="Lựa chọn C" value="c" disabled />
      </DemoSection>
      <DemoSection title="Nhóm Radio" bg="gray">
        <RadioGroup value={value} options={options} onChange={handleChange} />
      </DemoSection>
    </DemoPage>
  );
};
