import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Post } from '../screens/Post';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';
import { ResetPassword } from '../screens/ResetPassword';

const Stack = createNativeStackNavigator();

export function BlogRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}
