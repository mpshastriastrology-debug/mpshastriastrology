import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    let cancelled = false;

    const initAos = () => {
      Promise.all([import("aos"), import("aos/dist/aos.css")]).then(
        ([{ default: AOS }]) => {
          if (cancelled) return;

          AOS.init({
            duration: 900,
            once: true,
            offset: 80,
            easing: "ease-out-cubic",
            mirror: false,
            disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          });
        }
      );
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(initAos, { timeout: 2500 });
    } else {
      window.setTimeout(initAos, 1200);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    import("aos").then(({ default: AOS }) => {
      window.setTimeout(() => AOS.refreshHard(), 100);
    });
  }, [pathname]);
}
