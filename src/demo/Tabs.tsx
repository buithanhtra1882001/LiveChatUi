import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Tabs, Tab } from "../src";

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex2, setTabIndex2] = useState(0);

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Tabs index={tabIndex} onChange={setTabIndex}>
          <Tab label="Tab 1">
            <p>Nội dung 1</p>
          </Tab>
          <Tab label="Tab 2">
            <p>Nội dung 2</p>
          </Tab>
          <Tab label="Tab 3">
            <p>Nội dung 3</p>
          </Tab>
        </Tabs>
      </DemoSection>
      <DemoSection title="Tự động cuộn">
        <Tabs index={tabIndex2} scrollable onChange={setTabIndex2}>
          <Tab label="Tab 1">
            <p>Nội dung 1</p>
          </Tab>
          <Tab label="Tab 2">
            <p>Nội dung 2</p>
          </Tab>
          <Tab label="Tab 3">
            <p>Nội dung 3</p>
          </Tab>
          <Tab label="Tab 4">
            <p>Nội dung 4</p>
          </Tab>
          <Tab label="Tab 5">
            <p>Nội dung 5</p>
          </Tab>
          <Tab label="Tab 6">
            <p>Nội dung 6</p>
          </Tab>
        </Tabs>
      </DemoSection>
    </DemoPage>
  );
};
