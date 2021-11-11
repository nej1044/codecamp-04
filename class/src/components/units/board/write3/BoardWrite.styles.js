import styled from '@emotion/styled'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${(props) => props.qqq === true ? "yellow" : "gray"};
    font-size: 30px;
`