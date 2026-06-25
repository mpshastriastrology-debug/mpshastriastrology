import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export function useScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
      mirror: false,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    window.setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, [pathname]);
}
