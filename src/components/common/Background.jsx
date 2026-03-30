import React, { useEffect, useRef } from 'react';


const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const FONT_SIZE = 12;
    const columns = [];
    const gridLines = [];
    const charSet = "01010101DECRYPTINGIDENTITYSYSTEMREADYARCHITECTINGLUMINA";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize streams on resize
      const columnCount = Math.floor(canvas.width / FONT_SIZE);
      columns.length = 0;
      for (let i = 0; i < columnCount; i++) {
        columns.push({
          x: i * FONT_SIZE,
          y: Math.random() * -canvas.height,
          speed: Math.random() * 2 + 1,
          chars: []
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const drawGrid = (time) => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;

      // Vertical Grid Lines with subtle movement
      const spacing = 60;
      const offset = (time * 0.02) % spacing;
      
      for (let x = offset; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal Grid Lines
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawStreams = () => {
      ctx.font = `bold ${FONT_SIZE}px monospace`;
      
      columns.forEach(col => {
        // Randomly change characters for glitch effect
        const char = charSet[Math.floor(Math.random() * charSet.length)];
        
        // Draw the main leading character (brightest)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fillText(char, col.x, col.y);

        // Draw the trail
        for(let i = 1; i < 15; i++) {
          const trailChar = charSet[Math.floor(Math.random() * charSet.length)];
          ctx.fillStyle = `rgba(255, 255, 255, ${0.1 / i})`;
          ctx.fillText(trailChar, col.x, col.y - (i * FONT_SIZE));
        }

        // Update position
        col.y += col.speed;

        // Reset stream when it leaves screen
        if (col.y - (15 * FONT_SIZE) > canvas.height) {
          col.y = -Math.random() * 100;
          col.speed = Math.random() * 2 + 1;
        }
      });
    };

    const animate = (time) => {
      // Clear with dark fade for motion blur
      ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid(time);
      drawStreams();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full grayscale opacity-60"
      />
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none" />
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />
    </div>
  );
};

export default Background;