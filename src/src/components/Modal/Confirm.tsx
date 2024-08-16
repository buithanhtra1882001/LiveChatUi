import React from "react";
import clsx from "clsx";
import { Base, ModalProps, BaseModalHandle } from "./Base";
import { useLocale } from "../ConfigProvider";
import { ButtonProps } from "../Button";

const isPrimary = (btn: ButtonProps) => btn.color === "primary";

export const Confirm = React.forwardRef<BaseModalHandle, ModalProps>(
  (props, ref) => {
    const { className, vertical: oVertical, actions, ...other } = props;
    const { locale = "" } = useLocale();
    const isVi = locale.includes("vi");
    // Tiếng Việt mặc định hiển thị theo chiều ngang
    const vertical = oVertical != null ? oVertical : !isVi;

    if (Array.isArray(actions)) {
      // Sắp xếp các nút chính: nút chính theo chiều ngang ở phía sau, nút chính theo chiều dọc ở phía trước
      actions.sort((a, b) => {
        if (isPrimary(a)) {
          return vertical ? -1 : 1;
        }
        if (isPrimary(b)) {
          return vertical ? 1 : -1;
        }
        return 0;
      });
    }

    return (
      <Base
        baseClass="Modal"
        className={clsx("Confirm", className)}
        showClose={false}
        btnVariant="outline"
        vertical={vertical}
        actions={actions}
        ref={ref}
        {...other}
      />
    );
  }
);
