import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const removeToastsOnEscape = React.useCallback(() => {
    setToasts([]);
  }, []);
  
  useEscapeKey(removeToastsOnEscape);

  const addToast = ({ toastId, toastMessage, toastVariant }) => {
    const newToast = [
      ...toasts,
      { id: toastId, message: toastMessage, variant: toastVariant },
    ];
    setToasts(newToast);
  };

  const removeToast = ({ toastId }) => {
    const updatedToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(updatedToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
