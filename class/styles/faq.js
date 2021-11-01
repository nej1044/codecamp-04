import styled from '@emotion/styled'

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 640px;
  height: 1138px;
  margin: 0 auto;
  border: 1px solid black;
`
export const SearchImg = styled.img `
  width: 32px;
  height: 32px;
  margin-bottom: 31px;
  float: right;
`

export const WrapperHeader = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 346px;
  padding: 48px;
  border-bottom: 1px solid black;
`
export const Profile = styled.div `
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const ProfileTitle = styled.span `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  font-size: 24px;
  font-weight: 600;
`

export const ProfileImg = styled.img `
  width: 60px;
  height: 60px;
  margin-right: 10px;
`

export const HeaderNavbar = styled.li `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  list-style: none;
`

export const MenuTitle = styled.ul `
  padding: 0;
  color: #cacaca;
  font-size: 30px;
  font-weight: 600;
`

export const SelectTitle = styled.ul `
  padding: 0;
  color: #ff1b6d;
  font-size: 30px;
  font-weight: 600;
  border-bottom: 3px solid #ff1b6d;
`

export const WrapperBody = styled.ul `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 694px;
  margin: 0;
  padding: 29px 48px;
  list-style: none;
  border-bottom: 1px solid black;
`
export const QuestionNum = styled.p `
  color: #adadad;
  font-size: 18px;
  margin: 0;
  margin-bottom: 14px;
`

export const QuestionTitle = styled.span `
  color: #444444;
  font-size: 24px;
`

export const Question = styled.ul `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

export const QuestionImg = styled.img `
  width: 60px;
  height: 60px;
`

export const WrapperFooter = styled.ul `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 96px;
  padding: 10px 50px;
  margin: 0;
`

export const FooterMenu = styled.ul `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  color: #cacaca;
  font-size: 16px;
`

export const SelectFooterMenu = styled.ul `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  color: #ff1b6d;
  font-size: 16px;
  font-weight: 600;
`