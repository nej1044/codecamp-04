import { ChangeEvent, MouseEvent } from "react";

export interface IBoardListFunc {
  error: any
} 

export interface IBoardListUIProps {
  first: any
  second: any
  startPage: number
  lastPage: number
  current: any
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>)=>void
  clickSearchValue: (event: MouseEvent<HTMLElement>) => void
  handleCreate: ()=>void
  onClickPage: (event: MouseEvent<HTMLElement>)=>void
  getDetail: (event: MouseEvent<HTMLDivElement>) => void
}

