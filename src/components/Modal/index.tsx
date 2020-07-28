import * as React from "react";

interface IModalProps {
  onClose: any;
  open: boolean;
  title: string;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { onClose, open, title, children } = props;

  const handleCloseModal = () => {
    onClose();
  };
  return (
    <div>
      {!!open && (
        <div className="modal-container">
          <div className="modal-outside" onClick={handleCloseModal} />
          <div className="modal-content">
            <div className="header-container-modal">
              <div>
                <strong>{title}</strong>
              </div>
              <button className="unstyled-btn" onClick={handleCloseModal}>
                X
              </button>
            </div>
            <div className="body-container-modal">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
