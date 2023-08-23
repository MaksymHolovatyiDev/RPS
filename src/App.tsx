/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar } from 'react-native';

import Main from './Screens/Main';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Main />
    </>
  );
}

export default App;
