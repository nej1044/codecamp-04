export interface ICartUI {
  shoppingCart: any;
  getDetail: (id: string) => () => void;
  onClickDelete: (id: string) => () => void;
}
