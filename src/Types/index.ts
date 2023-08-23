export interface RPSItemType {
  colors: string[];
  style: { top?: number; left?: number; right?: number; bottom?: number };
  xml: string;
}

export interface RPSDataType {
    data: RPSItemType;
    isSelected?: boolean;
}

export interface RulesTypes{
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

export interface TitleTypes{
    score: number;
}