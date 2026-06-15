import { ConfigProvider, Grid, Modal, theme } from "antd";
import type { ReactNode } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { INITIAL_MODAL_OPTIONS } from "./modalResponsive.types";
import { ModalResponsiveContext } from "../hooks/useModalResponsive";
import type { OpenModalOptions } from "./modalResponsive.types";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalStackItem extends OpenModalOptions {
  id: string;
}

const BASE_MODAL_Z_INDEX = 1000;

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const screens = Grid.useBreakpoint();
  const modalIdRef = useRef(0);
  const [modalStack, setModalStack] = useState<ModalStackItem[]>([]);

  const closeModal = useCallback(() => {
    setModalStack((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
  }, []);

  const openModal = useCallback((options: OpenModalOptions) => {
    modalIdRef.current += 1;

    setModalStack((prev) => [
      ...prev,
      {
        ...INITIAL_MODAL_OPTIONS,
        ...options,
        id: `modal-${modalIdRef.current}`,
      },
    ]);
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
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        {modalStack.map((modalOptions, index) => {
          const resolvedWidth = screens.md ? modalOptions.width : "90vw";
          const isTopModal = index === modalStack.length - 1;

          return (
            <Modal
              key={modalOptions.id}
              title={modalOptions.title}
              open
              centered={modalOptions.centered}
              mask={{ closable: modalOptions.maskClosable && isTopModal }}
              destroyOnHidden={modalOptions.destroyOnClose}
              onOk={modalOptions.onOk}
              onCancel={(event) => {
                if (!isTopModal) {
                  return;
                }

                modalOptions.onCancel?.(event);
                closeModal();
              }}
              okText={modalOptions.okText}
              cancelText={modalOptions.cancelText}
              confirmLoading={modalOptions.confirmLoading}
              okButtonProps={modalOptions.okButtonProps}
              cancelButtonProps={modalOptions.cancelButtonProps}
              footer={modalOptions.showButtons ? modalOptions.footer : null}
              width={resolvedWidth}
              zIndex={BASE_MODAL_Z_INDEX + index}
              closable={isTopModal && modalOptions.closable}
              styles={{
                body: {
                  height: modalOptions.height,
                  overflowY: "auto",
                },
              }}
            >
              {modalOptions.content}
            </Modal>
          );
        })}
      </ConfigProvider>
    </ModalResponsiveContext.Provider>
  );
};