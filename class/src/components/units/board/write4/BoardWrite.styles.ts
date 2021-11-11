import styled from '@emotion/styled'
import { IEmotionProps } from './BoardWrite.types'


export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${(props:IEmotionProps) => props.qqq === true ? "yellow" : "gray"};
    font-size: 30px;
`