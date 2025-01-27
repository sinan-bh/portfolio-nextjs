"use client";

import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on cleanup
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle hover state for outside lighting effect
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer light effect (gray) */}
      <div
        className={`w-12 h-12 rounded-full absolute bg-gray-800 opacity-50 ${
          hovered ? "animate-pulse" : ""
        }`}
        style={{
          transform: `translate3d(-50%, -50%, 0)`,
        }}
      ></div>

      {/* Inner glowing circle */}
      <div
        className={`w-8 h-8 rounded-full bg-gradient-to-r from-gray-500 to-gray-500 opacity-70 ${
          hovered ? "animate-pulse" : ""
        }`}
        style={{
          transform: `translate3d(-50%, -50%, 0)`,
        }}
      ></div>
    </div>
  );
}
