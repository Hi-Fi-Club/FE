import { Dispatch, SetStateAction } from "react";

type TSelectItem = {
  mainIdx: number;
  subIdx: number;
  value?: string;
};
type TSelectedInfo = {
  selectedMainIdx: number;
  isMax: boolean;
  items: TSelectItem[];
};

type TInterestSelectProps = {
  selectedInfo: TSelectedInfo;
  setSelectedInfo: Dispatch<SetStateAction<TSelectedInfo>>;
};

export type { TSelectedInfo, TInterestSelectProps };
