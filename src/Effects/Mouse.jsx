import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Home_page from "../landingPage/Home_page";
const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor" ref={followerRef}></div>;
};

export default MouseFollower;
