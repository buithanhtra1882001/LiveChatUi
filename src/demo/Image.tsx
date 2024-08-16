import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Image } from "../src";

const picUrl = "//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg";

const imgs = [
  "//gw.alicdn.com/tfs/TB1yGi2vfb2gK0jSZK9XXaEgFXa-320-240.png",
  "//gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1XCq4veH2gK0jSZFEXXcqMpXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1dzG8vbj1gK0jSZFuXXcrHpXa-620-319.jpg",
];

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Image src={picUrl} width="299" height="200" alt="Tên hình ảnh" />
    </DemoSection>
    <DemoSection title="Hình ảnh đáp ứng">
      <Image src={picUrl} alt="Responsive image" fluid />
    </DemoSection>
    <DemoSection title="Tải chậm">
      {imgs.map((img) => (
        <div key={img}>
          <p style={{ margin: "120px 0", background: "#eee" }}>placeholder</p>
          <Image
            src={img}
            style={{ minWidth: "10px", minHeight: "200px" }}
            lazy
            fluid
            key={img}
          />
        </div>
      ))}
    </DemoSection>
  </DemoPage>
);
