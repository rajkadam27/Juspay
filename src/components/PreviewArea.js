import React from "react";
import CatSprite from "./CatSprite"; // Replace with your cat sprite component

export default function PreviewArea({ position, rotation, size, message }) {
  const characterWidth = 95 * size;  
  const characterHeight = 100 * size;

  return (
    <div className="w-1/4 h-full flex-none overflow-hidden flex flex-col items-center">
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          transition: "transform 0.5s ease",
          position: "relative",
          width: `${characterWidth}px`,
          height: `${characterHeight}px`,
        }}
      >
        <CatSprite width={characterWidth} height={characterHeight} />
      </div>
      {message && <div className="mt-2 text-xl font-bold">{message}</div>}
    </div>
  );
}
