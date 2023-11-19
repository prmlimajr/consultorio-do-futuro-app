import { Bootstrap } from './src/Bootstrap';
import { ContextProvider } from './src/context';

export default function App() {
  return (
    <ContextProvider>
      <Bootstrap />
    </ContextProvider>
  );
}
