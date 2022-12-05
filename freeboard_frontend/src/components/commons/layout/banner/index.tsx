import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useEffect, useState } from "react";

const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: black;
`;

const BannerContent = styled.div`
  display: flex;
  width: 1200px;
  height: 350px;
`;

const BannerArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 350px;
  padding: 40px 100px 100px 0px;
  color: white;
`;

const BannerText = styled.span`
  font-size: 32px;
  font-weight: 600;
  word-break: keep-all;
`;

const HashtagText = styled.span`
  margin: 5px;
  padding: 10px;
  background-color: rgba(999, 999, 999, 0.2);
  border-radius: 20px;
  font-size: 14px;
`;

const BannerWrapper = styled.div`
  width: 600px;
  height: 350px;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  width: 600px;
  height: 350px;
`;

const SlideImg = styled.img`
  display: inline-block;
  width: 600px;
  height: 350px;
  object-fit: cover;
`;

const backgroundImg = ["carousel_1.jpg", "carousel_2.jpg", "carousel_3.jpg"];

const Banner = () => {
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
        <BannerArticle>
          <BannerText>
            수료율 98%
            <br />
            끝까지 책임지는
            <br />
            프리미엄 관리형 부트캠프
          </BannerText>
          <div>
            <HashtagText>#프론트엔드</HashtagText>
            <HashtagText>#백엔드</HashtagText>
            <HashtagText>#풀스택</HashtagText>
          </div>
        </BannerArticle>
        <BannerWrapper>
          <Slider {...settings}>
            {backgroundImg.map((el, idx) => (
              <ImgWrapper key={idx}>
                <SlideImg src={`/images/${el}`} />
              </ImgWrapper>
            ))}
          </Slider>
        </BannerWrapper>
      </BannerContent>
    </BannerSection>
  );
};

export default Banner;
