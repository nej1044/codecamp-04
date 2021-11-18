import styled from "@emotion/styled";

const BannerDiv = styled.section`
  width: 100%;
  height: 200px;
  background-color: black;
  color: white;
`;

const Banner = () => {
  return <BannerDiv>여기는 배너영역입니다.</BannerDiv>;
};

export default Banner;
