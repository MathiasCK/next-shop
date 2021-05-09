import { useEffect, useState } from "react";

const useMediaQuery = (query, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(mql.matches);
    };

    try {
      mql.addEventListener("change", onChange);
    } catch (e1) {
      try {
        // Safari
        mql.addListener(onChange);
      } catch (e2) {
        console.error(e2);
      }
    }

    setState(mql.matches);

    return () => {
      mounted = false;
      try {
        mql.removeEventListener("change", onChange);
      } catch (e1) {
        try {
          // Safari
          mql.removeListener(onChange);
        } catch (e2) {
          console.error(e2);
        }
      }
    };
  }, [query]);

  return state;
};

export default useMediaQuery;

export const useIsMobile = () =>
  useMediaQuery("only screen and (max-width: 768px)", true);
