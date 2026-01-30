import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading simulation

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black transition-opacity duration-1000">
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-xl font-bold text-white tracking-widest animate-pulse">LOADING</p>
        </div>
    </div>
  );
};

export default Preloader;
