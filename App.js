import React from 'react'
import { Text } from 'react-native'
import {Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/Navigation/Index'
import {Provider as StoreProvider} from 'react-redux'
import store from './src/reducer/store'
import { persistor } from './src/reducer/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App(){
  return (
    <StoreProvider store = {store}>
      <PersistGate loading={<Text>Loading ...</Text>} persistor={persistor}>
        <PaperProvider>
          <AppNavigator/>
        </PaperProvider> 
        </PersistGate>
    </StoreProvider>
  )
}