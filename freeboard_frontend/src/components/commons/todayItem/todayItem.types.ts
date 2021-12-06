export interface ITodayItemUI {
  todayItem: any;
  getDetail: (id: string) => () => void;
}
