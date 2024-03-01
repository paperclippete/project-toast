import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);
  
  const toastOnClick = (id) => {
    removeToast({ toastId: id})
  };

  return (
    <ol
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      className={styles.wrapper}
    >
      {toasts.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            id={id}
            variant={variant}
            message={message}
            toastOnClick={toastOnClick}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
