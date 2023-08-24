import {Animated} from 'react-native';
import {AnimatedFunc} from 'src/Types';

export const AnimatedFunction: AnimatedFunc = (
  animatedRef,
  value,
  timing = 500,
  useNativeDriver = true,
) => {
  Animated.timing(animatedRef, {
    toValue: value,
    duration: timing,
    useNativeDriver,
  }).start();
};
