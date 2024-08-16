import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Card, List, ListItem } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản" bg="gray">
      <List>
        <ListItem content="Nội dung 1" />
        <ListItem content="Nội dung 2" />
        <ListItem content="Nội dung 3" />
      </List>
    </DemoSection>
    <DemoSection title="Viền" bg="gray">
      <List bordered>
        <ListItem content="Nội dung 1" />
        <ListItem content="Nội dung 2" />
        <ListItem content="Nội dung 3" />
      </List>
    </DemoSection>
    <DemoSection title="Biểu tượng" bg="gray">
      <List>
        <ListItem content="Nội dung 1" rightIcon="chevron-right" />
        <ListItem content="Nội dung 2" rightIcon="chevron-right" />
        <ListItem content="Nội dung 3" rightIcon="chevron-right" />
      </List>
    </DemoSection>
    <DemoSection title="Card + as=a + Biểu tượng" bg="gray">
      <Card>
        <List>
          <ListItem
            content="Nội dung 1"
            as="a"
            href="/"
            rightIcon="chevron-right"
          />
          <ListItem content="Nội dung 2" as="a" rightIcon="chevron-right" />
          <ListItem content="Nội dung 3" as="a" rightIcon="chevron-right" />
        </List>
      </Card>
    </DemoSection>
    <DemoSection title="Card + as=button + Biểu tượng" bg="gray">
      <Card>
        <List>
          <ListItem
            content="Nội dung 1"
            as="button"
            rightIcon="chevron-right"
          />
          <ListItem
            content="Nội dung 2"
            as="button"
            rightIcon="chevron-right"
          />
          <ListItem
            content="Nội dung 3"
            as="button"
            rightIcon="chevron-right"
          />
        </List>
      </Card>
    </DemoSection>
  </DemoPage>
);
