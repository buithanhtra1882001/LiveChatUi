import React from "react";
import { DemoPage, DemoSection } from "../components";
import { ScrollView, Button } from "../src";

// const list = [{ text: 'Nội dung 1' }, { text: 'Nội dung 2' }, { text: 'Nội dung 3' }];

export default () => {
  const [list, setList] = React.useState([
    { text: "Nội dung 1" },
    { text: "Nội dung 2" },
    { text: "Nội dung 3" },
  ]);
  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <button
          type="button"
          onClick={() =>
            setList((s) => [
              ...s,
              { text: "Nội dung 4" },
              { text: "Nội dung 5" },
              { text: "Nội dung 6" },
            ])
          }
        >
          add
        </button>
        <button
          type="button"
          onClick={() =>
            setList([
              { text: "Nội dung 1" },
              { text: "Nội dung 2" },
              { text: "Nội dung 3" },
            ])
          }
        >
          reset
        </button>
        <ScrollView
          data={list}
          renderItem={(item) => <Button label={item.text} />}
        />
      </DemoSection>
    </DemoPage>
  );
};
