import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Modal, Card, List, ListItem } from "../src";

function MainContent() {
  return (
    <div>
      Bạn thân mến, sau khi chọn giữ hàng, vui lòng quay lại trang đối thoại
      trong vòng 10 phút để được tư vấn, nếu không hệ thống sẽ tự động kết thúc
      cuộc gọi này nhé~
    </div>
  );
}

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Card>
          <List>
            <ListItem
              content="Hiển thị cửa sổ"
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
              content="Nút dọc"
              as="button"
              onClick={() => {
                setOpen4(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="Nút ngang"
              as="button"
              onClick={() => {
                setOpen5(true);
              }}
              rightIcon="chevron-right"
            />
          </List>
        </Card>
      </DemoSection>
      <Modal
        active={open1}
        title="Tiêu đề"
        onClose={() => {
          setOpen1(false);
        }}
      >
        <MainContent />
      </Modal>
      <Modal
        active={open2}
        title="Tiêu đề"
        onClose={() => {
          setOpen2(false);
        }}
        backdrop="static"
      >
        <MainContent />
      </Modal>
      <Modal
        active={open3}
        title="Tiêu đề"
        onClose={() => {
          setOpen3(false);
        }}
        showClose={false}
      >
        <MainContent />
      </Modal>
      <Modal
        active={open4}
        title="Tiêu đề"
        onClose={() => {
          setOpen4(false);
        }}
        actions={[{ label: "Xác nhận", color: "primary" }, { label: "Hủy" }]}
      >
        <MainContent />
      </Modal>
      <Modal
        active={open5}
        title="Bạn có muốn giữ hàng không?"
        onClose={() => {
          setOpen5(false);
        }}
        actions={[
          { label: "Kết thúc giữ hàng" },
          { label: "Giữ hàng", color: "primary" },
        ]}
        vertical={false}
      >
        <MainContent />
      </Modal>
    </DemoPage>
  );
};
