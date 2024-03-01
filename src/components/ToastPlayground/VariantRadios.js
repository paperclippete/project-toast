import React from "react";
import styles from "./ToastPlayground.module.css";
import { VARIANT_OPTIONS } from "../constants";

const VariantRadios = ({ currentVariant, setVariant }) => {
  return (
    <div
      role="radiogroup"
      aria-labelledby="variant-title"
      className={styles.row}
    >
      <div id="variant-title" className={styles.label}>
        Variant
      </div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((variantOption) => (
          <label htmlFor={`variant-${variantOption}`} key={variantOption}>
            <input
              id={`variant-${variantOption}`}
              type="radio"
              name="variant"
              value={variantOption}
              onChange={(e) => setVariant(e.target.value)}
              checked={variantOption === currentVariant}
            />
            {variantOption}
          </label>
        ))}
      </div>
    </div>
  );
};

export default VariantRadios;