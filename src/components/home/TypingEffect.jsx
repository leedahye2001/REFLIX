import { useState, useEffect } from "react";

function TypingEffect({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (currentIndex === text.length) {
      setTyping(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      const newText = typing
        ? displayText + text[currentIndex]
        : displayText.slice(0, -1);
      setDisplayText(newText);
      setCurrentIndex(typing ? currentIndex + 1 : currentIndex - 1);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [displayText, currentIndex, text, typing]);

  return (
    <h1 className="font-black text-white text-4xl laptop:text-5xl opacity-90">
      {displayText}
    </h1>
  );
}

export default TypingEffect;
