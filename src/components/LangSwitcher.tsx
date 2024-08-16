import React from "react";
import locales from "../src/components/ConfigProvider/locales";

interface LangSwitcherProps {
  value: string;
  onChange: (lang: string) => void;
}

export const LangSwitcher = ({ value, onChange }: LangSwitcherProps) => (
  <div>
    <label htmlFor="lang-switcher">Select Language:</label>
    <select
      id="lang-switcher"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {Object.keys(locales).map((t) => (
        <option value={t} key={t}>
          {t}
        </option>
      ))}
    </select>
  </div>
);
