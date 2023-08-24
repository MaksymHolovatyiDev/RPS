import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { ContextValue, RPSItemType } from '@/Types';

const RPSContext = createContext<ContextValue>({} as ContextValue);

export const useRPS = () => useContext(RPSContext);

const RPSProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<RPSItemType | null>(null);
  const [housePick, setHousePick] = useState<number | null>(null);

  const value = {
    score,
    setScore,
    picked,
    setPicked,
    housePick,
    setHousePick,
  };

  return <RPSContext.Provider value={value}>{children}</RPSContext.Provider>;
};

export default RPSProvider;
