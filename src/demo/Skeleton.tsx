import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Skeleton, Flex, FlexItem } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Skeleton h={16} w="80%" r="sm" />
    </DemoSection>
    <DemoSection title="Mô phỏng đơn hàng">
      <Flex>
        <Skeleton w={70} h={70} r="md" />
        <FlexItem style={{ marginLeft: "12px" }}>
          <Flex direction="column" justifyContent="space-between">
            <Skeleton h={16} w="80%" r="sm" mb="6px" />
            <Skeleton h={16} w={100} r="sm" />
          </Flex>
        </FlexItem>
      </Flex>
    </DemoSection>
  </DemoPage>
);
