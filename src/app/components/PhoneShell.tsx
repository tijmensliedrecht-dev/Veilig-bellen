'use client';

import { useApp } from '../context';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import UitlegScreen from '../screens/UitlegScreen';
import ContactenScreen from '../screens/ContactenScreen';
import FamilieScreen from '../screens/FamilieScreen';
import InstellingenScreen from '../screens/InstellingenScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SimulatieScreen from '../screens/SimulatieScreen';
import NotificatieScreen from '../screens/NotificatieScreen';
import FamilieDashboardScreen from '../screens/FamilieDashboardScreen';
import BerichtScreen from '../screens/BerichtScreen';
import DetailsScreen from '../screens/DetailsScreen';
import type { ScreenId } from '../types';

const screens: Record<ScreenId, React.ComponentType> = {
  'splash':            SplashScreen,
  'welcome':           WelcomeScreen,
  'uitleg':            UitlegScreen,
  'contacten':         ContactenScreen,
  'familie':           FamilieScreen,
  'instellingen':      InstellingenScreen,
  'dashboard':         DashboardScreen,
  'simulatie':         SimulatieScreen,
  'notificatie':       NotificatieScreen,
  'familie-dashboard': FamilieDashboardScreen,
  'bericht':           BerichtScreen,
  'details':           DetailsScreen,
};

export default function PhoneShell() {
  const { currentScreen } = useApp();

  return (
    <div className="phone-shell">
      {(Object.entries(screens) as [ScreenId, React.ComponentType][]).map(([id, Screen]) => (
        <div
          key={id}
          className={`screen${currentScreen === id ? '' : ' hidden'}`}
        >
          <Screen />
        </div>
      ))}
    </div>
  );
}