import { useEffect } from 'react';

/**
 * Custom hook to detect when footer is visible and apply class to body
 * @returns {void}
 */
const useFooterVisibility = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.classList.add("footer-visible");
          } else {
            document.body.classList.remove("footer-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useFooterVisibility;
