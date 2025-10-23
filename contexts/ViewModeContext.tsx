import { createContext, useContext, ReactNode } from 'react';

/**
 * View mode types for the application
 * - normal: Default interactive view with carousels
 * - flattened: All carousels expanded for print-friendly layout
 */
export type ViewMode = 'normal' | 'flattened';

interface ViewModeContextValue {
  mode: ViewMode;
  isFlattened: boolean;
}

const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined);

interface ViewModeProviderProps {
  mode: ViewMode;
  children: ReactNode;
}

/**
 * ViewModeProvider
 * Provides view mode state to all components in the tree
 *
 * @param mode - The current view mode ('normal' | 'flattened')
 */
export const ViewModeProvider = ({ mode, children }: ViewModeProviderProps) => {
  const value: ViewModeContextValue = {
    mode,
    isFlattened: mode === 'flattened',
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};

/**
 * useViewMode hook
 * Access the current view mode from any component
 *
 * @returns Object with mode and isFlattened flag
 * @throws Error if used outside ViewModeProvider
 */
export const useViewMode = (): ViewModeContextValue => {
  const context = useContext(ViewModeContext);

  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }

  return context;
};
