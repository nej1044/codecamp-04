import { ChangeEvent, MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: any
  date: any
  addressShow: (event: MouseEvent<HTMLImageElement>)=>void
  upLike: () => void
  downlike: ()=>void
  handleList: ()=>void
  handleEdit: ()=>void
  handleDeleteBoard: ()=>void
}