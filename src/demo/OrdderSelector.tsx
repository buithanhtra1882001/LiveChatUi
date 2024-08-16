import React, { useState } from "react";
import { Popup, Card, Goods, Tabs, Tab, Button, Search, Confirm } from "../src";

export default () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Popup
      className="EmojiSelector"
      active={active}
      onClose={() => {
        setActive(false);
      }}
      title="Vui lòng chọn đơn hàng mà bạn muốn hỏi"
      actions={[{ label: "Không có đơn hàng tương ứng" }]}
    >
      <div>
        <Tabs index={tabIndex} onChange={setTabIndex}>
          <Tab label="Đã mua">
            <div>
              <Search
                placeholder="Nhập từ khóa sản phẩm"
                onSearch={(q) => {
                  console.log(q);
                }}
                onClear={() => {
                  console.log("cancel");
                }}
              />
              <Card className="OrderGroup">
                <div className="OrderGroup-header">
                  <h3>Nike Official Store</h3>
                  <span className="OrderGroup-status">
                    Trạng thái giao dịch
                  </span>
                </div>
                <div className="OrderGroup-list">
                  <Goods
                    type="order"
                    img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
                    name="Air Joden2019 bản giới hạn..."
                    desc="Phân loại màu sắc: Màu nâu; Size 42"
                    currency="¥"
                    price={30000.04}
                    count={1}
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                </div>
                <div className="OrderGroup-actions">
                  <Button size="sm">Chi tiết đơn hàng</Button>
                  <Button color="primary" size="sm">
                    Gửi
                  </Button>
                </div>
              </Card>
            </div>
          </Tab>
          <Tab label="Giỏ hàng">
            <p>Nội dung 2</p>
          </Tab>
          <Tab label="Danh sách yêu thích">
            <p>Nội dung 3</p>
          </Tab>
          <Tab label="Lịch sử">
            <p>Nội dung 4</p>
          </Tab>
        </Tabs>
        <Confirm
          active={open}
          title="Bạn có chắc chắn muốn gửi không?"
          onClose={() => {
            setOpen(false);
          }}
          actions={[
            {
              label: "Xác nhận",
              color: "primary",
            },
            {
              label: "Hủy",
            },
          ]}
        >
          <div>Content 1</div>
        </Confirm>
      </div>
    </Popup>
  );
};
