import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </Background>
  );
}