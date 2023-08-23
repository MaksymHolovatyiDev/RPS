import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { ContextValue, RPSItemType } from '../Types';

const RPSContext = createContext<ContextValue>({} as ContextValue);

export const useRPS = () => useContext(RPSContext);

const RPSProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<RPSItemType | null>(null);

  useEffect(() => {
    if (picked) Math.floor(Math.random() * 3) + 1;
  }, [picked]);

  const value = {
    score,
    setScore,
    picked,
    setPicked,
  };

  return <RPSContext.Provider value={value}>{children}</RPSContext.Provider>;
};

export default RPSProvider;
