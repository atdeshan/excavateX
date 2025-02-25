import React, { useState, useEffect } from 'react';

function TypingText({ texts, speed = 100, delay = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    const typeOrDelete = () => {
      const currentText = texts[currentTextIndex];
      const displayedLength = displayedText.length;

      if (isTyping) {
        if (displayedLength < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedLength + 1));
          timeout = setTimeout(typeOrDelete, speed);
        } else {
          setIsTyping(false);
          timeout = setTimeout(typeOrDelete, delay); // Delay before deleting
        }
      } else {
        if (displayedLength > 0) {
          setDisplayedText(currentText.substring(0, displayedLength - 1));
          timeout = setTimeout(typeOrDelete, speed);
        } else {
          setIsTyping(true);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length); // Cycle through texts
          timeout = setTimeout(typeOrDelete, speed); // Small delay before typing next text
        }
      }
    };

    timeout = setTimeout(typeOrDelete, speed); // Initial typing starts here

    return () => clearTimeout(timeout); // Clear timeout on unmount or text change
  }, [currentTextIndex, displayedText, isTyping, texts, speed, delay]);

  return (
    <span className="typing-text">
      {displayedText}
    </span>
  );
}

// Example usage (you can place this directly in your component where you need it)
const myTexts = [
  "Hello, world!",
  "Welcome to my website!",
  "This is a cool demo.",
  "And it keeps going..."
];

// In your component's JSX:
// <TypingText texts={myTexts} speed={30} delay={1500} />

export default TypingText;