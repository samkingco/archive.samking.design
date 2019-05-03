import React, { useState, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';

function TextScrambler({ initialValue, from, to }) {
  let queue = [];
  let frame = 0;
  let frameRequest = null;
  const scrambleChars = '!<>-#@$\\/[]{}—=+*?';

  const prevFrom = usePrevious(from);
  const initialOutput = initialValue || from;
  const [output, setOutput] = useState(initialOutput);

  const updateText = () => {
    let outputText = '';
    let complete = 0;

    for (let index = 0; index < queue.length; index++) {
      let { prev, next, start, end, character } = queue[index];

      if (frame >= end) {
        complete++;
        outputText += next;
      } else if (frame >= start) {
        if (!character || Math.random() < 0.24) {
          character =
            scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          queue[index].character = character;
        }
        outputText += character;
      } else {
        outputText += prev;
      }
    }

    setOutput(outputText);

    if (complete !== queue.length) {
      frameRequest = requestAnimationFrame(updateText);
      frame++;
    }
  };

  const setText = nextText => {
    const prevText = prevFrom ? from : initialOutput;
    const maxLength = Math.max(prevText.length, nextText.length);

    for (let index = 0; index < maxLength; index++) {
      const prev = prevText[index] || '';
      const next = nextText[index] || '';
      const start = Math.floor(Math.random() * 24);
      const end = start + Math.floor(Math.random() * 24);
      queue.push({ prev, next, start, end });
    }

    cancelAnimationFrame(frameRequest);
    frame = 0;
    updateText();
  };

  useEffect(() => {
    if (prevFrom) {
      setText(to);
    } else {
      setText(initialOutput);
    }
  }, [from, to, initialOutput]);

  return <React.Fragment>{output}</React.Fragment>;
}

export default TextScrambler;
