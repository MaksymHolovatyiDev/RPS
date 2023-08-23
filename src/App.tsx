/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar } from 'react-native';

import Main from './Screens/Main';
import RPSProvider from './Provider/Provider';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <RPSProvider>
        <Main />
      </RPSProvider>
    </>
  );
}

export default App;
