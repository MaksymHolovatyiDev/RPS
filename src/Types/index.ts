import {Animated} from 'react-native';

export interface RPSItemType {
  colors: string[];
  style: {top?: number; left?: number; right?: number; bottom?: number};
  xml: string;
  key: string;
}

export interface RPSDataType {
  data: RPSItemType;
  isSelected?: boolean;
}

export interface RulesTypes {
  translateY: Animated.Value;
}

export interface AnimatedFunc {
  (
    animatedRef: Animated.Value,
    value: number,
    timing?: number,
    useNativeDriver?: boolean,
  ): void;
}

export interface ContextValue {
  score: number;
  setScore: (callback: (prevState: number) => number) => void;
  picked: null | RPSItemType;
  setPicked: (pick: RPSItemType | null) => void;
  housePick: number | null;
  setHousePick: (num: number) => void;
  opacity: Animated.Value;
}
