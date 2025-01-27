import React from "react";
import SocialMedia from "../ui/social-media";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="flex items-center gap-4 w-full">
        <div className="flex-grow h-px bg-gray-700"></div>
        <span className="text-gray-400">Stay in touch</span>
        <div className="flex-grow h-px bg-gray-700"></div>
      </div>
      <SocialMedia className="flex gap-4 pb-4  mt-6" />
    </footer>
  );
}
