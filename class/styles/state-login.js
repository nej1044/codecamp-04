import styled from '@emotion/styled'

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 640px;
  height: 1138px;
  margin: 0 auto;
  padding: 50px;
  background-image: url('/images/img-bg.png');
`

export const Header = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 523px;
`
export const Logo = styled.span `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderImg = styled.img `
  position: relative;
  z-index: 1;
`

export const UnderImg = styled.img `
  position: absolute;
`

export const Title = styled.span `
  margin-top: 27px;
  font-size: 60px;
  font-weight: 600;
  color: white;
`

export const Body = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 350px;
`

export const Form = styled.span `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`

export const InputWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  height: 50px;
  border-bottom: 1px solid rgba(255,255, 255, 0.4);
`
export const Input = styled.input `
  width: 500px;
  padding-bottom: 10px;
  font-size: 24px;
  background: none;
  border: 0;
  opacity: 100%;
  color: white;
  &:focus {
    outline: none;
  }
`

 export const Error = styled.p `
  color: #ff1b6d;
  font-size: 18px;
 `

 export const Signin = styled.button `
  width: 100%;
  height: 76px;
  background-color: rgba(255, 27, 109, 0.5);
  border: 0;
  border-radius: 38px;
  color: white;
  font-size: 26px;
  font-weight: 600;
 `

 export const BodyFooter = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin-top: 20px;
`

export const Option = styled.span `
  color: white;
  font-size: 20px;
`

export const Line = styled.div `
  height: 20px;
  border-left: 1px solid white;
`

export const Footer = styled.button `
  width: 100%;
  height: 76px;
  background-color: transparent;
  border: 1px solid #fae100;
  border-radius: 38px;
  color: #fae100;
  font-size: 26px;
  font-weight: 600;
`

export const FooterImg = styled.img `
  margin-right: 30px;
`