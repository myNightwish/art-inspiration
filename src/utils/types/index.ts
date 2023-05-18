export interface openCardDetail {
  developer: string;
  // 标题
  cardTitle: string;
  // 状态
  cardStatus: string;
  // 卡片类型
  cardType: string;
  // 是否已完成TODO：去掉
  // cardIsFinished?: boolean;
  // 卡片号
  cardId: string;
  cardPlanBox?: string;
  cardEndTime?: string;
  cardStartTime?: string;
}

interface Properties {
  displayValue: string;
  localId: number;
  propertyName: string;
  value: string;
}

export interface yunDetail {
  cardTitle: string;
  cardDeveloper: string;
  cardId: number;
  cardIcafeId: string;
  cardStatus: string;
}

export interface openCards {
  id: string;
  cardNums: number;
  yunInfo: {
    topicStoryNums: number;
    iteraStoryNums: number;
    yunCardDetails: Array<yunDetail>;
  };
  voteInfo: {
    codeVoteRate?: number;
  };
  cardsDetail: Array<openCardDetail>;
}

export interface StoryCard {
  title: string;
  status: string;
  sequence?: number;
  spacePrefixCode?: string;
  properties: Array<Properties>;
  type: {
    name: string;
  };
}

export interface matchForm {
  flag: boolean;
  index: number;
  person?: string;
}

export interface SpanMethodProps {
  rowIndex: number;
  columnIndex: number;
}
export interface RowForm {
  cardEndTime?: string;
  cardId: string;
  cardPlanBox: string;
  cardStartTime: string;
  cardStatus: string;
  cardTitle: string;
  cardType: string;
  color: string;
  developer: string;
  icon: any;
  type: string;
}
