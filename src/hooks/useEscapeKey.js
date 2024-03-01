import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event?.key && event?.key === "Escape") {
        callback(event);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [callback]);
};

export { useEscapeKey };
