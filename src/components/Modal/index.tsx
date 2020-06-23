import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

import colors from '../../styles/colors';

interface IModalProps {
  children: any;
  isOpen: boolean;
  disableClose?: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  setIsOpen,
  disableClose = false,
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!disableClose}
      shouldCloseOnEsc={!disableClose}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: colors.primaryConstrast,
          borderRadius: '6px',
          width: '100%',
          maxWidth: '736px',
          border: 'none',
          boxShadow: `1px 1px 3px ${colors.overlay}`,
          padding: 0,
        },
        overlay: {
          backgroundColor: colors.overlay,
          zIndex: 10,
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
