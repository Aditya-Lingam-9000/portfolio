import { useState, useEffect, useRef } from 'react';

export const useTypedText = (texts, typingSpeed = 100, erasingSpeed = 50, delayBetween = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const charIndexRef = useRef(0);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (isTyping) {
        if (charIndexRef.current < currentText.length) {
          setDisplayText(currentText.substring(0, charIndexRef.current + 1));
          charIndexRef.current++;
        } else {
          setTimeout(() => setIsTyping(false), delayBetween);
        }
      } else {
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setDisplayText(currentText.substring(0, charIndexRef.current));
        } else {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isTyping ? typingSpeed : erasingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, erasingSpeed, delayBetween]);

  return displayText;
};
