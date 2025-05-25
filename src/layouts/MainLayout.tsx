import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import FloatingNav from "../components/FloatingNav";

const MainLayout = () => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (layoutRef.current) {
      gsap.fromTo(
        layoutRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>
      <FloatingNav />
      <div
        ref={layoutRef}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      >
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
