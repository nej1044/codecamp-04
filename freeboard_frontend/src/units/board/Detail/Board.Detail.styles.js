import styled from "@emotion/styled";


export const Wrapper = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const DetailSection = styled.section `
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin-top: 59px;
  padding: 80px 102px;
  border: 1px solid #8EB695;
  border-radius: 50px;
`

export const DetailHeader = styled.section `
  display: flex;
  width: 100%;
  height: 240px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #8EB695;
`
export const Title = styled.h1 `
  font-size: 36px;
  font-weight: 700;
`

export const UserInfo = styled.div `
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`

export const UserProfile = styled.div `
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`

export const ProfileText = styled.span `
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const UserName = styled.p `
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
`

export const UserDate = styled.p `
  margin: 0;
  padding: 0;
  color: #828282;
  font-size: 16px;
`

export const UserMore = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  justify-content: space-between;
`
export const Address = styled.div `
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 376px;
  height: 72px;
  position: absolute;
  right: 15px;
  bottom: 40px;
  padding: 8px 16px 16px 16px;
  z-index: 1;
  background-image: url('/images/detail/addressBox.png');
  color: white;
  font-size: 14px;
  text-align: right;
`

export const DetailBody = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const BodyHeader = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0 120px 0; 

`
export const BodyImg = styled.img `
  width: 100%;
  height: 480px;
  margin-bottom: 40px;
  object-fit: cover;
`

export const DetailMoodlet = styled.div`
  display: flex;
  width: 142px;
  height: 51px;
  justify-content: space-between;
  align-items: center;
`

export const DetailLike = styled.div`
  display: flex;
  width: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const LikeNum = styled.p `
  margin: 0;
  height: 0;
  font-size: 18px;
  color: #FFD600;
`

export const UnLikeNum = styled.p `
  margin: 0;
  height: 0;
  font-size: 18px;
  color: #828282;
`

export const DetailBtnSection = styled.section`
  display: flex;
  width: 585px;
  height: 233px;
  justify-content: space-between;
  align-items: center;
`

export const DetailBtn = styled.button `
  width: 179px;
  height: 45px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background-color: #8EB695;
  border: 1px solid #8EB695;
  border-radius: 10px;
`
