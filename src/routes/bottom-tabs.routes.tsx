import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlogRoutes } from './blog.routes';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="BlogRoutes" component={BlogRoutes} />
    </Tab.Navigator>
  );
}
