'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ScreenId, Contact, FamilyMember } from './types';

interface AppContextType {
  currentScreen: ScreenId;
  prevScreen: ScreenId | null;
  go: (screen: ScreenId) => void;
  back: () => void;
  contacts: Contact[];
  toggleContact: (id: number) => void;
  family: FamilyMember[];
  warningMinutes: number;
  setWarningMinutes: (m: number) => void;
  callSeconds: number;
  setCallSeconds: (s: number) => void;
  hasWarning: boolean;
  setHasWarning: (v: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const defaultContacts: Contact[] = [
  { id: 1, name: 'Anna',          initials: 'A', bgColor: '#eef2ff', textColor: '#4338ca', checked: true  },
  { id: 2, name: 'Mark',          initials: 'M', bgColor: '#f0fdf4', textColor: '#166534', checked: true  },
  { id: 3, name: 'Huisarts',      initials: 'H', bgColor: '#fef3c7', textColor: '#92400e', checked: true  },
  { id: 4, name: 'Peter',         initials: 'P', bgColor: '#fce7f3', textColor: '#9d174d', checked: true  },
  { id: 5, name: 'Els',           initials: 'E', bgColor: '#ede9fe', textColor: '#6d28d9', checked: true  },
  { id: 6, name: 'Bakker Jansen', initials: 'B', bgColor: '#f3f4f6', textColor: '#374151', checked: false },
  { id: 7, name: 'Tandarts',      initials: 'T', bgColor: '#ecfdf5', textColor: '#065f46', checked: false },
];

const defaultFamily: FamilyMember[] = [
  { id: 1, name: 'Lisa', relation: 'Dochter', active: true },
  { id: 2, name: 'Mark', relation: 'Zoon',    active: true },
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('splash');
  const [prevScreen, setPrevScreen] = useState<ScreenId | null>(null);
  const [contacts, setContacts] = useState<Contact[]>(defaultContacts);
  const [family] = useState<FamilyMember[]>(defaultFamily);
  const [warningMinutes, setWarningMinutes] = useState(5);
  const [callSeconds, setCallSeconds] = useState(0);
  const [hasWarning, setHasWarning] = useState(false);

  const go = useCallback((screen: ScreenId) => {
    setPrevScreen(currentScreen);
    setCurrentScreen(screen);
  }, [currentScreen]);

  const back = useCallback(() => {
    if (prevScreen) {
      setCurrentScreen(prevScreen);
      setPrevScreen(null);
    }
  }, [prevScreen]);

  const toggleContact = useCallback((id: number) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
  }, []);

  return (
    <AppContext.Provider value={{
      currentScreen, prevScreen, go, back,
      contacts, toggleContact,
      family,
      warningMinutes, setWarningMinutes,
      callSeconds, setCallSeconds,
      hasWarning, setHasWarning,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}