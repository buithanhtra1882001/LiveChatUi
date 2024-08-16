import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Typing } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <div className="Message left">
        <Typing />
      </div>
    </DemoSection>
  </DemoPage>
);
