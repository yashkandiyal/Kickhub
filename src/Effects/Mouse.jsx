import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Mouse.css";

const MouseFollower = () => {
  const followerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      if (follower) {
        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      
      if (follower && window.innerWidth >= 968) {
        gsap.set(follower, { x: 0, y: 0 });
      }
    };

    
    window.onresize = handleResize;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.onresize = null; 
    };
  }, []);

  return (
    <>
      {!isMobile && <div className="cursor" ref={followerRef}></div>}
    </>
  );
};

export default MouseFollower;
