import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Bubble } from "../src";
// import { Bubble } from "../../../src";

export default () => (
  <DemoPage>
    <DemoSection title="Khung văn bản">
      <div className="Message left">
        <div className="Message-content">
          <Bubble type="text">
            <p>Nội dung khung bên trái</p>
          </Bubble>
        </div>
      </div>
      <div className="Message right">
        <div className="Message-content">
          <Bubble content="Nội dung khung bên phải" />
        </div>
      </div>
    </DemoSection>
    <DemoSection title="Khung hình ảnh">
      <div className="Message left">
        <div className="Message-content">
          <Bubble type="image">
            <img
              src="https://gw.alicdn.com/tfs/TB1HURhcBCw3KVjSZR0XXbcUpXa-750-364.png"
              alt=""
            />
          </Bubble>
        </div>
      </div>
      <div className="Message right">
        <div className="Message-content">
          <Bubble type="image">
            <img
              src="https://gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg"
              alt=""
            />
          </Bubble>
        </div>
      </div>
    </DemoSection>
  </DemoPage>
);
