import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Button, IconButton } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Màu sắc nút">
      <Button color="primary">Nút chính</Button>
      <Button>Nút mặc định</Button>
    </DemoSection>
    <DemoSection title="Trạng thái vô hiệu hóa">
      <Button color="primary" disabled>
        Nút chính
      </Button>
      <Button disabled>Nút mặc định</Button>
    </DemoSection>
    <DemoSection title="Trạng thái tải">
      <Button color="primary" loading>
        Nút chính
      </Button>
      <Button loading>Nút mặc định</Button>
    </DemoSection>
    <DemoSection title="Biểu tượng">
      <Button color="primary" icon="search">
        Nút chính
      </Button>
      <Button icon="search">Nút mặc định</Button>
    </DemoSection>
    <DemoSection title="Kích thước nút">
      <div className="demo-row">
        <Button color="primary" size="sm">
          Nút nhỏ
        </Button>
        <Button color="primary">Nút bình thường</Button>
        <Button color="primary" size="lg">
          Nút lớn
        </Button>
      </div>
      <div>
        <Button size="sm">Nút nhỏ</Button>
        <Button>Nút bình thường</Button>
        <Button size="lg">Nút lớn</Button>
      </div>
    </DemoSection>
    <DemoSection title="Biến thể nút">
      <Button variant="outline" color="primary">
        outline variant
      </Button>
      <Button variant="text">text variant</Button>
    </DemoSection>
    <DemoSection title="Nút biểu tượng">
      <IconButton icon="image" />
      <IconButton icon="volume-circle" />
      <IconButton icon="plus-circle" size="lg" />
    </DemoSection>
    <DemoSection title="Phần tử khối">
      <div className="demo-row">
        <Button color="primary" block>
          Phần tử khối
        </Button>
      </div>
      <Button block>Phần tử khối</Button>
    </DemoSection>
  </DemoPage>
);
