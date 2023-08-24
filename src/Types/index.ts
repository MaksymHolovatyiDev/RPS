export interface RPSItemType {
  colors: string[];
  style: { top?: number; left?: number; right?: number; bottom?: number };
  xml: string;
  key: string;
}

export interface RPSDataType {
  data: RPSItemType;
  isSelected?: boolean;
}

export interface RulesTypes {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface ContextValue {
  score: number;
  setScore: (callback: (prevState: number) => number) => void;
  picked: null | RPSItemType;
  setPicked: (pick: RPSItemType | null) => void;
  housePick: number | null;
  setHousePick: (num: number) => void;
}
