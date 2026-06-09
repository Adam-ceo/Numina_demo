import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Instant, not smooth — route transitions should snap to top immediately.
    // Smooth would feel sluggish and fight with the page entrance animation.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
