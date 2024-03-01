import React from "react";
import Button from "../Button";
import MessageInput from "./MessageInput";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VariantRadios from "./VariantRadios";
import styles from "./ToastPlayground.module.css";
import { VARIANT_OPTIONS } from "../constants";
import ToastShelf from "../ToastShelf/ToastShelf";

const DEFAULT_VARIANT = VARIANT_OPTIONS[0];
const DEFAULT_MESSAGE = "";

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState(DEFAULT_VARIANT);
  const [toastMessage, setToastMessage] = React.useState("");
  const { toasts, addToast } = React.useContext(ToastContext)
  const toastId = Math.floor(Math.random() * 10000);

  const popToastOnSubmit = (e) => {
    e.preventDefault();
    addToast({toastId, toastMessage, toastVariant});
    setToastVariant(DEFAULT_VARIANT);
    setToastMessage(DEFAULT_MESSAGE);
  };


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => popToastOnSubmit(e)}
      >
        <MessageInput
          currentMessage={toastMessage}
          setMessage={setToastMessage}
        />
        <VariantRadios
          currentVariant={toastVariant}
          setVariant={setToastVariant}
        />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
