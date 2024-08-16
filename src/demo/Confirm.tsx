import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Confirm, Card, List, ListItem } from "../src";

export default () => {
  const [open1, setOpen1] = useState(false);

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Card>
          <List>
            <ListItem
              content="Hiển thị cửa sổ xác nhận"
              as="button"
              onClick={() => {
                setOpen1(true);
              }}
              rightIcon="chevron-right"
            />
          </List>
        </Card>
      </DemoSection>
      <Confirm
        active={open1}
        title="Tiêu đề"
        onClose={() => {
          setOpen1(false);
        }}
        actions={[
          {
            label: "Xác nhận",
            color: "primary",
          },
        ]}
      >
        <div>Nội dung chi tiết</div>
      </Confirm>
    </DemoPage>
  );
};
