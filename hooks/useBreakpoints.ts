import { useEffect, useState } from 'react';

interface MediaQuery {
  name: string;
  media: string;
}

interface MediaQueryResult extends MediaQuery {
  matches: boolean;
}

interface Breakpoints {
  isDesktop: boolean;
  isMobile: boolean;
}

const queries: MediaQuery[] = [
  {
    name: 'desktop',
    media: '(min-width: 1140px)',
  },
];

const useBreakpoints = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    isDesktop: false,
    isMobile: true,
  });

  useEffect(() => {
    function handleResize() {
      const mediaQueries: MediaQueryResult[] = queries.map((query) => {
        const mediaQuery = window.matchMedia(query.media);
        return {
          name: query.name,
          media: mediaQuery.media,
          matches: mediaQuery.matches,
        };
      });

      const matchedQuery = mediaQueries.find((mediaQuery) => mediaQuery.matches);

      if (matchedQuery?.name === 'desktop') {
        setBreakpoints({ isDesktop: true, isMobile: false });
      } else {
        setBreakpoints({ isDesktop: false, isMobile: true });
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
};

export default useBreakpoints;
