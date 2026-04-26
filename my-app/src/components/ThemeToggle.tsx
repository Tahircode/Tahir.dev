"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./AnimatedToggle.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDefault = theme === "default";
  const handleClick = () => {
    setTheme(isDefault ? "light" : "default");
  };
  

  return (
    <div className="toggle-container">
      <div
        className={`toggle-switch ${isDefault ? "default-mode" : ""}`}
        onClick={handleClick}
        role="switch"
        aria-checked={isDefault}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      >
        <div className="content-wrapper">
          <div className="toggle-circle" />

          <div className="stars">
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="shooting-star-wrapper">
              <div className="shooting-star" />
            </div>
          </div>

          <div className="clouds">
            <div className="cloud" />
            <div className="cloud" />
            <div className="cloud" />
          </div>
        </div>
      </div>
    </div>
  );
}
