import { useEffect, useRef } from "react";

const RobotWatcher = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      [leftEyeRef.current, rightEyeRef.current].forEach((eye) => {
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;

        const angle = Math.atan2(dy, dx);
        const maxMove = 6;

        const x = Math.cos(angle) * maxMove;
        const y = Math.sin(angle) * maxMove;

        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="hidden md:flex robot-container">
      <div className="robot-head">
        <div className="robot-eye">
          <div className="robot-pupil" ref={leftEyeRef} />
        </div>
        <div className="robot-eye">
          <div className="robot-pupil" ref={rightEyeRef} />
        </div>
      </div>
    </div>
  );
};

export default RobotWatcher;
