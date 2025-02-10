import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHashNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the correct section on initial load
    const adjustedHash = location.hash.replace("#", "");
    if (adjustedHash) {
      const element = document.getElementById(adjustedHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    // Track sections and update hash in URL while scrolling
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");

            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useHashNavigation;
