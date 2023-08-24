import {createContext, useContext, ReactNode, useState, useRef} from 'react';
import {ContextValue, RPSItemType} from '@/Types';
import {Animated} from 'react-native';

const RPSContext = createContext<ContextValue>({} as ContextValue);

export const useRPS = () => useContext(RPSContext);

const RPSProvider = ({children}: {children: ReactNode}) => {
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<RPSItemType | null>(null);
  const [housePick, setHousePick] = useState<number | null>(null);
  const opacity = useRef(new Animated.Value(1)).current;

  const value = {
    score,
    setScore,
    picked,
    setPicked,
    housePick,
    setHousePick,
    opacity,
  };

  return <RPSContext.Provider value={value}>{children}</RPSContext.Provider>;
};

export default RPSProvider;
