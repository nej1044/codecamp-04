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
  Address,
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
} from './Board.Detail.styles'

const BoardDetailUI = (props) => {
  return(
    <>     
      <Wrapper>
        <DetailSection>
          <DetailHeader>
            <Title>{props.topic}{props.data?.fetchBoard.title}</Title>
            <UserInfo>
              <UserProfile>
                <img src="/images/detail/ProfileImg.png" />
                <ProfileText>
                  <UserName>{props.data?.fetchBoard.writer}</UserName>
                  <UserDate>Date: {props.date}</UserDate>
                </ProfileText>
              </UserProfile>
              
              <UserMore>
                <img src="/images/detail/sns.png" />
                <Address> 서울특별시 영등포구 양산로 200<br />(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2 층 </Address>
                <img onClick={props.addressShow} src="/images/detail/zipcode.png" />
              </UserMore>
            </UserInfo>
          </DetailHeader>
          <DetailBody>
            <BodyHeader>
              <BodyImg src="/images/detail/contentsImg.jpeg" /> 
              <span>{props.data?.fetchBoard.contents}</span>
            </BodyHeader>
            <BodyVideo src="videos/detail/contentsVideo.mp4"></BodyVideo>
            <DetailMoodlet>
              <DetailLike>
                <img src="/images/detail/Like.png" />
                <LikeNum>{props.data?.fetchBoard.likeCount}</LikeNum>
              </DetailLike>
              <DetailLike>
                <img src="/images/detail/UnLike.png" />
                <UnLikeNum>{props.data?.fetchBoard.dislikeCount}</UnLikeNum>
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

export default BoardDetailUI