import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './bottom-tabs.routes';
import { BlogRoutes } from './blog.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* <BottomTabs /> */}
      <BlogRoutes />
    </NavigationContainer>
  );
}
