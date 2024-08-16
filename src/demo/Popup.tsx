import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Popup, Card, List, ListItem } from "../src";

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Card>
          <List>
            <ListItem
              content="Hiển thị Popup"
              as="button"
              onClick={() => {
                setOpen1(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="Không thể nhấp vào nền"
              as="button"
              onClick={() => {
                setOpen2(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="Không hiển thị nút đóng"
              as="button"
              onClick={() => {
                setOpen3(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="Popup có nút"
              as="button"
              onClick={() => {
                setOpen4(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="Popup có nút, cao 80px"
              as="button"
              onClick={() => {
                setOpen5(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="Nền màu xám"
              as="button"
              onClick={() => {
                setOpen6(true);
              }}
              rightIcon="chevron-right"
            />
          </List>
        </Card>
      </DemoSection>
      <Popup
        active={open1}
        title="Tiêu đề"
        onClose={() => {
          setOpen1(false);
        }}
      >
        <div style={{ padding: "0px 15px" }}>
          <p>
            Chi tiết nội dung, chi tiết nội dung, chi tiết nội dung, chi tiết
            nội dung, chi tiết nội dung, chi tiết nội dung
          </p>
        </div>
      </Popup>
      <Popup
        active={open2}
        title="Tiêu đề"
        onClose={() => {
          setOpen2(false);
        }}
        backdrop="static"
      >
        <div style={{ padding: "0px 15px" }}>
          <p>
            Chi tiết nội dung, chi tiết nội dung, chi tiết nội dung, chi tiết
            nội dung, chi tiết nội dung, chi tiết nội dung
          </p>
        </div>
      </Popup>
      <Popup
        active={open3}
        title="Tiêu đề"
        onClose={() => {
          setOpen3(false);
        }}
        showClose={false}
      >
        <div style={{ padding: "0px 15px" }}>
          <p>Chi tiết nội dung</p>
        </div>
      </Popup>
      <Popup
        active={open4}
        title="Tiêu đề"
        onClose={() => {
          setOpen4(false);
        }}
        actions={[
          { label: "Nút chính", color: "primary" },
          { label: "Nút phụ" },
        ]}
      >
        <div style={{ padding: "15px" }}>
          <p>Chi tiết nội dung</p>
        </div>
      </Popup>
      <Popup
        active={open5}
        title="Tiêu đề"
        onClose={() => {
          setOpen5(false);
        }}
        height={80}
        actions={[
          { label: "Nút chính", color: "primary" },
          { label: "Nút phụ" },
        ]}
      >
        <div style={{ padding: "15px" }}>
          <p>Chi tiết nội dung</p>
        </div>
      </Popup>
      <Popup
        active={open6}
        title="Tiêu đề"
        onClose={() => {
          setOpen6(false);
        }}
        bgColor="gray"
      >
        <div style={{ padding: "15px" }}>
          <p>
            Chi tiết nội dung, chi tiết nội dung, chi tiết nội dung, chi tiết
            nội dung, chi tiết nội dung, chi tiết nội dung
          </p>
        </div>
      </Popup>
    </DemoPage>
  );
};
