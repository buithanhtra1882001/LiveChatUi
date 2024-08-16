import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Progress, Button } from "../src";

export default () => {
  const [percentage, setPercentage] = useState(20);
  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Progress value={percentage} />
        <br />
        <Button onClick={() => setPercentage(percentage - 10)}>Giảm</Button>
        <Button onClick={() => setPercentage(percentage + 10)} color="primary">
          Tăng
        </Button>
      </DemoSection>
      <DemoSection title="Hiển thị trạng thái: active">
        <Progress value={30} status="active" />
      </DemoSection>
      <DemoSection title="Hiển thị trạng thái: success">
        <Progress value={40} status="success" />
      </DemoSection>
      <DemoSection title="Hiển thị trạng thái: error">
        <Progress value={50} status="error" />
      </DemoSection>
    </DemoPage>
  );
};
