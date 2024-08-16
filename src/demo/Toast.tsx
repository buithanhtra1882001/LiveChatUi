import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Card, List, ListItem, toast } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Card>
        <List>
          <ListItem
            content="Thông báo văn bản"
            as="button"
            onClick={() => {
              toast.show("Nội dung thông báo");
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="Thông báo thành công"
            as="button"
            onClick={() => {
              toast.success("Hoạt động thành công");
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="Thông báo thất bại"
            as="button"
            onClick={() => {
              toast.fail("Hoạt động thất bại");
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="Thông báo đang tải"
            as="button"
            onClick={() => {
              toast.loading("Đang tải...", -1);
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="Văn bản dài"
            as="button"
            onClick={() => {
              toast.success(
                "Rất vui được giúp bạn với văn bản, đến văn bản bạn văn bản đến văn bản đến văn bản"
              );
            }}
            rightIcon="chevron-right"
          />
        </List>
      </Card>
    </DemoSection>
  </DemoPage>
);
