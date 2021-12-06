export interface IMarketListUI {
  onLoadMore: () => void;
  data?: any;
  getDetail: (el: any) => () => void;
  moveWrite: () => void;
}
