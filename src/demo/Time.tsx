import React, { useState } from "react";
import { DemoPage, DemoSection, LangSwitcher } from "../components";
import { Time, ConfigProvider } from "../src";

const now = Date.now();
const MS_A_DAY = 24 * 60 * 60 * 1000;
const MS_A_WEEK = MS_A_DAY * 7;

export default () => {
  const [lang, setLang] = useState("vi-VN");

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <LangSwitcher value={lang} onChange={setLang} />
        <ConfigProvider locale={lang}>
          <p>
            <span>Hiện tại: </span>
            <Time date={now} />
          </p>
          <p>
            <span>Vừa rồi: </span>
            <Time date={now - 120000} />
          </p>
          <p>
            <span>Hôm qua: </span>
            <Time date={now - MS_A_DAY} />
          </p>
          <p>
            <span>Hôm trước: </span>
            <Time date={now - MS_A_DAY * 2} />
          </p>
          <p>
            <span>Tuần trước tuần trước: </span>
            <Time date={now - MS_A_WEEK * 2} />
          </p>
        </ConfigProvider>
      </DemoSection>
    </DemoPage>
  );
};
