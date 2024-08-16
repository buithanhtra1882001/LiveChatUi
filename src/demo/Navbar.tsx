import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Navbar } from "../src";

export default () => {
  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Navbar title="Dịch vụ khách hàng Bot" />
      </DemoSection>
      <DemoSection title="Quay lại cấp trên">
        <Navbar
          title="Dịch vụ khách hàng Bot"
          leftContent={{ icon: "chevron-left" }}
        />
      </DemoSection>
      <DemoSection title="Nút bên phải">
        <Navbar
          title="Dịch vụ khách hàng Bot"
          // rightContent={[{ icon: "apps" }, { icon: "ellipsis-h" }]}
        />
      </DemoSection>
      <DemoSection title="LOGO">
        <Navbar
          title="Dịch vụ khách hàng Bot"
          logo="//alime-base.oss-cn-beijing.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1636689421751-小蜜头像.png"
          leftContent={{ icon: "chevron-left" }}
          // rightContent={[{ icon: "apps" }, { icon: "ellipsis-h" }]}
        />
      </DemoSection>
    </DemoPage>
  );
};
