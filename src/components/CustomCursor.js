import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    window.addEventListener("mousemove", handleMove);

    const interactiveElements = document.querySelectorAll("a, button, .project-card, .tech-card, .timeline-card, .profile-card");

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${active ? "cursor-active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${active ? "cursor-active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}

export default CustomCursor;
