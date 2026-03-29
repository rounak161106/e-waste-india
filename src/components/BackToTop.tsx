import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-ewaste-green flex items-center justify-center shadow-lg shadow-ewaste-green/20 hover:shadow-ewaste-green/40 transition-all hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="text-ewaste-dark" />
    </button>
  );
};

export default BackToTop;
