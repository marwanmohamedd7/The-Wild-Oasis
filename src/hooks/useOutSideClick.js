import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClickOutside, listenCapturing);
      return () =>
        document.addEventListener("click", handleClickOutside, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}

export default useOutSideClick;
