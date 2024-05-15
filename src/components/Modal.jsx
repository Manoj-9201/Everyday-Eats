import { useEffect, useRef } from "react";

export default function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const currentDialog = dialog.current;
    if (currentDialog) {
      if (open) {
        currentDialog.showModal();
      } else {
        currentDialog.close();
      }
    }
  }, [open]);

  return (
    <dialog ref={dialog} className={className} onClose={onClose}>
      {children}
    </dialog>
  );
}
