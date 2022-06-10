import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { SetStateAction, useRef, useState } from "react";

const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  /* background-color: ${(props)=> props.background}; */
`;

const BannerContent = styled.div`
  display: flex;
  width: 70vw;
  height: 40vh;
`;

const BannerText = styled.article`
  width: 70vw;
  height: 40vh;
`;

const BannerWrapper = styled.div`
  width: 35vw;
  height: 40vh;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  width: 35vw;
  height: 40vh;
`;

const SlideImg = styled.img`
  display: inline-block;
  width: 35vw;
  height: 40vh;
`;

// const backgroundArr = ['red', 'black', 'blue', 'yellow']

const Banner = () => {
  // const [background, setBackground] = useState<string>('')

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
  };
  return (
    <BannerSection>
      <BannerContent>
        <BannerText>프리랜서 개발자들의 No.1 커뮤니티<br />
        디벨로펌에서 원하는 전문가를 찾아보세요!
        </BannerText>
        <BannerWrapper>
          <Slider {...settings}>
            <ImgWrapper>
              <SlideImg src="/images/carousel_1.jpeg" />
            </ImgWrapper>
            <ImgWrapper>
              <SlideImg src="" />
            </ImgWrapper>
            <ImgWrapper>
              <SlideImg src="" />
            </ImgWrapper>
            <ImgWrapper>
              <SlideImg src="" />
            </ImgWrapper>
          </Slider>
        </BannerWrapper>
      </BannerContent>
    </BannerSection>
  );
};

export default Banner;
