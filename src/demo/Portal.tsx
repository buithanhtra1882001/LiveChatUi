import React, { useRef } from "react";
import { DemoPage, DemoSection } from "../components";
import { Portal } from "../src";

export default () => {
  const containerRef = useRef(null);
  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Portal>
          <p>Xuất hiện trong `document.body`</p>
        </Portal>
      </DemoSection>
      <DemoSection title="Chỉ định container (ref)">
        <div ref={containerRef} />
        <Portal container={containerRef}>
          <p>Xuất hiện trong `ref` được chỉ định</p>
        </Portal>
      </DemoSection>
      <DemoSection title="Chỉ định container (element)">
        <Portal container={document.querySelector("#root")}>
          <p>Xuất hiện trong element được chỉ định</p>
        </Portal>
      </DemoSection>
    </DemoPage>
  );
};
