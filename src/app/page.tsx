import { AppProvider } from './context';
import PhoneShell from './components/PhoneShell';

export default function Home() {
  return (
    <AppProvider>
      <PhoneShell />
    </AppProvider>
  );
}