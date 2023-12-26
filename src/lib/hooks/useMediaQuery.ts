import { useState, useEffect } from "react";

/**
 *
 * @returns boolean, Whether or not viewport is larger than breakpoint
 */
export const useMediaQuery = (breakpoint: number) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);

  useEffect(() => {
    const mediaQueryList = matchMedia(`(min-width: ${breakpoint}px)`);

    const mediaQueryHandler = (e: MediaQueryListEvent) => {
      setIsAboveBreakpoint(e.matches);
    };

    if ("addEventListener" in mediaQueryList) {
      mediaQueryList.addEventListener("change", mediaQueryHandler);
    }

    setIsAboveBreakpoint(mediaQueryList.matches);

    return () => {
      if ("removeEventListener" in mediaQueryList) {
        mediaQueryList.removeEventListener("change", mediaQueryHandler);
      }
    };
  }, [breakpoint]);

  return isAboveBreakpoint;
};

export default useMediaQuery;
