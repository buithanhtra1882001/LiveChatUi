import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Icon } from "../src";

const symbols =
  document.getElementById("__CHATUI_ICONS__")?.querySelectorAll("symbol") || [];

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Icon type="bullhorn" />
    </DemoSection>
    <DemoSection title="Hiệu ứng xoay">
      <div style={{ fontSize: "64px" }}>
        <Icon type="spinner" spin />
      </div>
    </DemoSection>
    <DemoSection title="Hiệu ứng xoay">
      <div className="icon-list">
        {Array.from(symbols).map((item) => {
          const icon = item.id.replace("icon-", "");
          return (
            <div className="icon-box" key={icon}>
              <Icon type={icon} />
              <span>{icon}</span>
            </div>
          );
        })}
      </div>
    </DemoSection>
  </DemoPage>
);
