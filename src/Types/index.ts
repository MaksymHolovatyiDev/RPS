export interface RPSItemType {
  colors: string[];
  style: { top?: number; left?: number; right?: number; bottom?: number };
  xml: string;
}

export interface RPSDataType {
  data: RPSItemType;
}

export interface RulesTypes{
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}