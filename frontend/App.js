import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native'
import Login from './views/Login'

const LoginStack = createStackNavigator()

const LoginStackNavigator = () => {
  return(
    <LoginStack.Navigator headerMode='none' initialRouteName='Login'>
      <LoginStack.Screen name='Login' component={Login} />
    </LoginStack.Navigator>
  )
}

const Stack = createStackNavigator()

const AppContainer = () => {
  return(
    <Stack.Navigator headerMode='none' initialRouteName='LoginStack'>
      <Stack.Screen name='LoginStack' component={LoginStackNavigator} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  )
}

export default App