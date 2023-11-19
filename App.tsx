import Toast from 'react-native-toast-message';
import { Bootstrap } from './src/Bootstrap';
import { ContextProvider } from './src/context';
import { toastConfig } from './src/components/Toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ContextProvider>
        <Bootstrap />
        <Toast config={toastConfig} />
      </ContextProvider>
    </GestureHandlerRootView>
  );
}
