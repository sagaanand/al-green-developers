import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenis } from "../main";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset standard window scroll
    window.scrollTo(0, 0);
    // Reset Lenis scroll instantly
    lenis.scrollTo(0, { immediate: true });
    // Recalculate dimensions for the new page
    lenis.resize();
  }, [pathname]);

  return null;
}
