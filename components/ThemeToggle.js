import { useState, useEffect } from 'react';
import Heading from './atoms/Heading';

const ThemeToggle = ({ isHidden = true }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved preference if it exists
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      document.documentElement.classList.toggle('dark', isDarkMode);
      // Add user-theme class to indicate user preference
      document.documentElement.classList.add('user-theme');
    } else {
      // Otherwise use system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDarkMode);
      document.documentElement.classList.toggle('dark', prefersDarkMode);
      // Don't add user-theme class when using system preference
      document.documentElement.classList.remove('user-theme');
    }
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (localStorage.getItem('theme') === null) {
        const newTheme = e.matches;
        setIsDark(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        // Don't add user-theme class when using system preference
        document.documentElement.classList.remove('user-theme');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
    // Add user-theme class when user manually toggles theme
    document.documentElement.classList.add('user-theme');
  };

  return (
    <>
      <button 
        onClick={toggleTheme}
        className={`toggle-container ${isHidden ? 'hidden' : ''}`}
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
          freezeColor={true}
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
          freezeColor={true}
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

        .toggle-container.hidden {
          display: none;
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