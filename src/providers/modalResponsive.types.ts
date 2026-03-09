import type { ModalProps } from "antd";
import type { ReactNode } from "react";

export interface OpenModalOptions {
  title?: ReactNode;
  content: ReactNode;
  width?: number | string;
  height?: number | string;
  centered?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  onOk?: ModalProps["onOk"];
  onCancel?: ModalProps["onCancel"];
  okText?: ReactNode;
  cancelText?: ReactNode;
  footer?: ModalProps["footer"];
}

export interface ModalResponsiveContextValue {
  openModal: (options: OpenModalOptions) => void;
  closeModal: () => void;
}

export const INITIAL_MODAL_OPTIONS: OpenModalOptions = {
  title: undefined,
  content: null,
  width: "60dvw",
  height: "60dvh",
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  onOk: undefined,
  onCancel: undefined,
  okText: undefined,
  cancelText: undefined,
  footer: undefined,
};
