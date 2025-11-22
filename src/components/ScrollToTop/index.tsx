import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-99">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="group bg-primary/90 hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t-2 border-l-2 border-white transition-transform duration-300 group-hover:-translate-y-1"></span>
        </div>
      )}
    </div>
  );
}
