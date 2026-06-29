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

export default function PhoneShell() {
  const { currentScreen } = useApp();

  return (
    <div className="phone-shell">
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'uitleg' && <UitlegScreen />}
      {currentScreen === 'contacten' && <ContactenScreen />}
      {currentScreen === 'familie' && <FamilieScreen />}
      {currentScreen === 'instellingen' && <InstellingenScreen />}
      {currentScreen === 'dashboard' && <DashboardScreen />}
      {currentScreen === 'simulatie' && <SimulatieScreen />}
      {currentScreen === 'notificatie' && <NotificatieScreen />}
      {currentScreen === 'familie-dashboard' && <FamilieDashboardScreen />}
      {currentScreen === 'bericht' && <BerichtScreen />}
      {currentScreen === 'details' && <DetailsScreen />}
    </div>
  );
}
