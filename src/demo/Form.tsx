import React, { useState } from "react";
import { DemoPage, DemoSection } from "../components";
import { Form, FormItem, FormActions, Input, Button, RadioGroup } from "../src";

export default () => {
  const [usename, setUsername] = useState("");
  const [theme, setTheme] = useState("");

  return (
    <DemoPage>
      <DemoSection title="Cách sử dụng cơ bản">
        <Form theme={theme}>
          <FormItem>
            <Input
              value={usename}
              placeholder="Tên người dùng"
              onChange={setUsername}
              maxLength={6}
            />
          </FormItem>
          <FormItem>
            <Input value="" placeholder="Mật khẩu" />
          </FormItem>
          <FormActions>
            <Button color="primary">Xác nhận</Button>
          </FormActions>
        </Form>
      </DemoSection>
      <DemoSection title="Hiển thị nhãn">
        <Form theme={theme}>
          <FormItem label="Chọn giao diện">
            <RadioGroup
              options={[{ value: "", label: "default" }, { value: "light" }]}
              value={theme}
              onChange={(val) => {
                setTheme(val as string);
              }}
            />
          </FormItem>
          <FormItem label="Tên người dùng">
            <Input value="" placeholder="Tên người dùng" />
          </FormItem>
          <FormItem label="Mật khẩu">
            <Input value="" placeholder="Mật khẩu" />
          </FormItem>
        </Form>
      </DemoSection>
      <DemoSection title="Văn bản gợi ý">
        <Form theme={theme}>
          <FormItem label="Tên người dùng" help="Tối đa 6 ký tự">
            <Input value="" placeholder="Tên người dùng" />
          </FormItem>
          <FormItem label="Mật khẩu">
            <Input value="" placeholder="Mật khẩu" />
          </FormItem>
        </Form>
      </DemoSection>
      <DemoSection title="Thông báo lỗi">
        <Form theme={theme}>
          <FormItem label="Tên người dùng" help="Tối đa 6 ký tự" invalid>
            <Input value="" placeholder="Tên người dùng" />
          </FormItem>
          <FormItem label="Mật khẩu">
            <Input value="" placeholder="Mật khẩu" />
          </FormItem>
        </Form>
      </DemoSection>
      <DemoSection title="Hiển thị bắt buộc">
        <Form theme={theme}>
          <FormItem label="Tên người dùng" required>
            <Input value="" placeholder="Tên người dùng" />
          </FormItem>
          <FormItem label="Mật khẩu" required>
            <Input value="" placeholder="Mật khẩu" />
          </FormItem>
        </Form>
      </DemoSection>
    </DemoPage>
  );
};
