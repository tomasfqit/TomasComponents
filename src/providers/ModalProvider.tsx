import { Grid, Modal } from "antd";
import type { ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import { INITIAL_MODAL_OPTIONS } from "./modalResponsive.types";
import { ModalResponsiveContext } from "../hooks/useModalResponsive";
import type { OpenModalOptions } from "./modalResponsive.types";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const screens = Grid.useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<OpenModalOptions>(INITIAL_MODAL_OPTIONS);
  const resolvedWidth = screens.md ? modalOptions.width : "90vw";

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalOptions(INITIAL_MODAL_OPTIONS);
  }, []);

  const openModal = useCallback((options: OpenModalOptions) => {
    setModalOptions({
      ...INITIAL_MODAL_OPTIONS,
      ...options,
    });
    setIsOpen(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal],
  );

  return (
    <ModalResponsiveContext.Provider value={contextValue}>
      {children}
      <Modal
        title={modalOptions.title}
        open={isOpen}
        centered={modalOptions.centered}
        maskClosable={modalOptions.maskClosable}
        destroyOnClose={modalOptions.destroyOnClose}
        onOk={modalOptions.onOk}
        onCancel={(event) => {
          modalOptions.onCancel?.(event);
          closeModal();
        }}
        okText={modalOptions.okText}
        cancelText={modalOptions.cancelText}
        footer={modalOptions.showButtons ? modalOptions.footer : null}
        width={resolvedWidth}
        styles={{
          body: {
            height: modalOptions.height,
            overflowY: "auto",
          },
        }}
      >
        {modalOptions.content}
      </Modal>
    </ModalResponsiveContext.Provider>
  );
};