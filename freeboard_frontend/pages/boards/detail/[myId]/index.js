import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  Wrapper,
  DetailSection,
  DetailHeader,
  Title,
  UserInfo,
  UserProfile,
  ProfileText,
  UserName,
  UserDate,
  UserMore,
  DetailBody,
  BodyHeader,
  BodyImg,
  BodyVideo,
  DetailMoodlet,
  DetailLike,
  LikeNum,
  UnLikeNum,
  DetailBtnSection,
  DetailBtn
} from '../../../../styles/detail.js'

const FETCH_BOARD = gql `
 query fetchBoard($boardId: ID!) {
   fetchBoard(boardId: $boardId) {
     _id
     writer
     contents
   }
 }
`

export default function DetailPage() {
  // JavaScript
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardId: router.query.myId}
  })

  return ( 
    // JSX
    // Fragment
    <>     
      <Wrapper>
        <DetailSection>
          <DetailHeader>
            <Title>{data?.fetchBoard.title}</Title>
            <UserInfo>
              <UserProfile>
                <img src="/images/detail/ProfileImg.png" />
                <ProfileText>
                  <UserName>{data?.fetchBoard.writer}</UserName>
                  <UserDate>Date: {data?.fetchBoard.createdAt}</UserDate>
                </ProfileText>
              </UserProfile>
              <UserMore>
                <img src="/images/detail/sns.png" />
                <img src="/images/detail/zipcode.png" />
              </UserMore>
            </UserInfo>
          </DetailHeader>
          <DetailBody>
            <BodyHeader>
              <BodyImg src="/images/detail/contentsImg.jpeg" /> 
              <span>{data?.fetchBoard.contents}</span>
            </BodyHeader>
            <BodyVideo autoplay loop src="videos/detail/contentsVideo.mp4"></BodyVideo>
            <DetailMoodlet>
              <DetailLike>
                <img src="/images/detail/Like.png" />
                <LikeNum>0</LikeNum>
              </DetailLike>
              <DetailLike>
                <img src="/images/detail/UnLike.png" />
                <UnLikeNum>0</UnLikeNum>
              </DetailLike>
            </DetailMoodlet>
          </DetailBody>
          <section class="footer"></section>
        </DetailSection>
        <DetailBtnSection>
          <DetailBtn>목록으로</DetailBtn>
          <DetailBtn>수정하기</DetailBtn>
          <DetailBtn>삭제하기</DetailBtn>
        </DetailBtnSection>
      </Wrapper>
      
    </>
  )
}
