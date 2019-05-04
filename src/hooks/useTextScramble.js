import { useState, useLayoutEffect } from 'react';

function useTextScramble({
  from,
  to = from,
  decay = 400,
  delay = 0,
  scrambleChars = '!<>#@$\\/[]{}=+*?ASDFGHJKL1234567890',
}) {
  const [output, setOutput] = useState(from);

  useLayoutEffect(() => {
    let raf;
    let timeStart;
    let isRunning;
    let queue = [];

    // Runs on every animation frame
    function onFrame() {
      let completeCharCount = 0;
      const timeCurrent = Date.now() - timeStart;

      let outputText = '';
      for (let i = 0; i < queue.length; i++) {
        let { startChar, endChar, character, startMs, endMs } = queue[i];

        if (timeCurrent >= endMs) {
          completeCharCount++;
          outputText += endChar;
        } else if (timeCurrent >= startMs) {
          if (!character || Math.random() < 0.24) {
            character =
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            queue[i].character = character;
          }
          outputText += character;
        } else {
          outputText += startChar;
        }
      }

      if (completeCharCount >= queue.length) {
        outputText = to;
        isRunning = false;
      }

      setOutput(outputText);

      if (isRunning) {
        loop();
      }
    }

    // Calls `onFrame` whenever it can
    function loop() {
      raf = requestAnimationFrame(onFrame);
    }

    // Function used to start the animation loop
    function start() {
      // Stop any running animation first
      stop();

      const maxLength = Math.max(from.length, to.length);

      for (let i = 0; i < maxLength; i++) {
        const startChar = from[i] || '';
        const endChar = to[i] || '';
        const startMs = Math.floor(Math.random() * decay);
        const endMs = startMs + Math.floor(Math.random() * decay);
        queue.push({ startChar, endChar, startMs, endMs });
      }

      timeStart = Date.now();
      isRunning = true;
      loop();
    }

    // Function to stop the animation loop
    function stop() {
      isRunning = false;
      cancelAnimationFrame(raf);
    }

    // Start the animation after a delay
    const timerDelay = setTimeout(start, delay);

    // Clean up time
    return () => {
      clearTimeout(timerDelay);
      stop();
    };
  }, [from, to, delay, decay]);

  return output;
}

export default useTextScramble;
