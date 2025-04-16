import { useState, useEffect } from 'react';
import Heading from './atoms/Heading';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <>
      <button 
        onClick={toggleTheme}
        className="toggle-container"
        aria-label="Toggle theme"
        role="switch"
        aria-checked={isDark}
      >
        <Heading 
          size="xxs" 
          isMarginless 
          isInline
          weight={"bold"}
		  color={isDark ? "disabled" : "primary"}
        >
          Light
        </Heading>
        <div className="switch">
          <div className="switch-handle"></div>
        </div>
        <Heading 
          size="xxs" 
          isMarginless 
          isInline
          weight={"bold"}
		  color={isDark ? "primary" : "disabled"}
        >
          Dark
        </Heading>
      </button>
      <style jsx>{`
        .toggle-container {
          background: var(--white);
          padding: 8px 12px;
          display: flex;
          align-items: baseline;
          gap: 8px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
		  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .toggle-container:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
        }

        .switch {
          width: 32px;
          height: 18px;
          background-color: var(--black);
          border-radius: 100px;
          padding: 2px;
          position: relative;
          transition: background-color 0.3s ease;
          transform: translateY(2px);
        }

        .switch-handle {
          width: 12px;
          height: 12px;
          background-color: var(--golden-yellow);
          border-radius: 50%;
          position: absolute;
          left: 3px;
		  top: 3px;
          transition: all 0.3s ease;
        }

        .switch-handle::after {
          content: '';
          position: absolute;
          top: 0;
          left: 3px;
          width: 12px;
          height: 12px;
          background-color: var(--black);
          border-radius: 50%;
          transition: transform 0.3s ease;
          transform: scale(0);
        }

        :global(.dark) .switch-handle {
          transform: translateX(14px);
          background-color: var(--golden-yellow);
        }

        :global(.dark) .switch-handle::after {
          transform: scale(1) translateX(-8px);
        }
      `}</style>
    </>
  );
};

export default ThemeToggle; 