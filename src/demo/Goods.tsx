import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Card, Goods } from "../src";
import { ConfigProvider } from "../src/components/ConfigProvider";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Card size="xl">
        <Goods
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Tên sản phẩm này rất rất dài đến mức phải xuống dòng"
          desc="Mô tả sản phẩm"
          tags={[
            { name: "3 tháng không lãi suất" },
            { name: "Giảm 4.1" },
            { name: "Thẻ đen tiết kiệm thêm 33.96" },
          ]}
          currency="¥"
          price={849}
          originalPrice={1999}
          meta="7 người thanh toán"
          count={6}
          unit="kg"
          action={{
            // icon: 'cart',
            onClick(e) {
              console.log(e);
              e.stopPropagation();
            },
          }}
        />
      </Card>
    </DemoSection>
    <DemoSection title="Đơn hàng">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019 phiên bản giới hạn nâu cao cổ giày bóng rổ..."
          desc="Phân loại màu: nâu; cỡ 42"
          currency="¥"
          price={30000.04}
          status="Giao dịch đã đóng"
          count={1}
        />
      </Card>
    </DemoSection>
    <DemoSection title="Render children">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019 phiên bản giới hạn nâu cao cổ giày bóng rổ..."
          desc="Phân loại màu: nâu; cỡ 42"
          currency="¥"
          price={30000.04}
          status="Giao dịch đã đóng"
          count={1}
          onClick={() => {
            console.log(111);
          }}
        >
          <div>children content</div>
        </Goods>
      </Card>
    </DemoSection>
    <DemoSection title="Danh sách đơn hàng">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Tên sản phẩm"
          desc="Mô tả sản phẩm"
          tags={[{ name: "3 tháng không lãi suất" }, { name: "Giảm 4.1" }]}
          currency="¥"
          price={300.0}
          count={8}
          unit="kg"
          status="Giao dịch đã đóng"
          action={{
            label: "Chi tiết",
            onClick(e) {
              console.log(e);
              e.stopPropagation();
            },
          }}
        />
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Tên sản phẩm này rất rất dài đến mức phải xuống dòng"
          desc="Mô tả sản phẩm"
          tags={[
            { name: "3 tháng không lãi suất" },
            { name: "Giảm 4.1" },
            { name: "Thẻ đen tiết kiệm thêm 33.96" },
          ]}
          currency="$"
          price={300.0}
          count={8}
          unit="kg"
          action={{
            label: "Chi tiết",
            onClick(e) {
              console.log(e);
              e.stopPropagation();
            },
          }}
        />
      </Card>
    </DemoSection>
    <DemoSection title="Tối ưu hóa cho người cao tuổi (props)">
      <Card>
        <Goods
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Tên sản phẩm này rất rất dài đến mức phải xuống dòng"
          desc="Mô tả sản phẩm rất rất dài đến mức phải xuống dòng rất rất dài đến mức phải xuống dòng rất rất dài đến mức phải xuống dòng"
          tags={[
            { name: "3 tháng không lãi suất" },
            { name: "Giảm 4.1" },
            { name: "Thẻ đen tiết kiệm thêm 33.96" },
          ]}
          currency="¥"
          price={849}
          originalPrice={1999}
          meta="7 người thanh toán"
          count={6}
          unit="kg"
          elderMode
          action={{
            label: "Gửi",
            color: "primary",
            onClick(e) {
              console.log(e);
            },
          }}
        />
      </Card>
    </DemoSection>
    <DemoSection title="Tối ưu hóa cho người cao tuổi (ConfigProvider)">
      <ConfigProvider elderMode>
        <Card>
          <Goods
            type="order"
            img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
            name="Air Joden2019 phiên bản giới hạn nâu cao cổ giày bóng rổ..."
            desc="Phân loại màu: nâu; cỡ 42"
            currency="¥"
            price={30000.04}
            status="Giao dịch đã đóng"
            count={1}
          />
        </Card>
      </ConfigProvider>
    </DemoSection>
  </DemoPage>
);
