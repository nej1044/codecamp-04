import { ChangeEvent, MouseEvent } from "react";

export interface IBoardNewProps {
  isEdit?: boolean
  btnColor?: boolean
}

export interface IUpdateBoardInput {
  title?: string
  contents?: string
  youtubeUrl?:string
}

export interface IMyVariables {
  updateBoardInput: any
  password: string | number
  boardId: String
}

export interface IBoardNewUIProps {
  isEdit?: boolean
  btnColor?: boolean
  selectedTopic: (event: MouseEvent<HTMLInputElement>) => void
  changedWriter: (event: ChangeEvent<HTMLInputElement>) => void
  changedPassword: (event: ChangeEvent<HTMLInputElement>) => void
  changedTitle: (event: ChangeEvent<HTMLInputElement>) => void
  changedContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  changedUrl: (event: ChangeEvent<HTMLInputElement>) => void
  errorWriter: string
  errorPassword: string
  errorTitle: string
  errorContents: string
  data?: any
  sendBoard: ()=>void
  editBoard: ()=>void
}

export interface IBoardNewEmotion {
  btnColor?: boolean
}
