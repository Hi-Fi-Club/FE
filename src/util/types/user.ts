import { Dispatch, SetStateAction } from "react";

// user - RegisterInterest (컴포넌트 관련)
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

// user - RegisterInterest (API 요청 관련)
type TInterestMainProps = {
  id: number;
  name: string;
};
type TInterestInfo = {
  main: TInterestMainProps[];
  detail: any;
};

type TInterestDetailProp = {
  detailId: number;
  name: string;
};

export type { TSelectItem, TSelectedInfo, TInterestSelectProps, TInterestInfo, TInterestDetailProp  };
