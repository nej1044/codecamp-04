import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BannerSection = styled.section`
  width: 100%;
  height: 400px;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    height: 150px;
  }
  @media only screen and (min-width: 600px) {
    height: 200px;
  }
  @media only screen and (min-width: 768px) {
    height: 250px;
  }
  @media only screen and (min-width: 992px) {
    height: 300px;
  }
  @media only screen and (min-width: 1200px) {
    height: 350px;
  }
`;

const ImgWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const SlideImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
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
      <Slider {...settings}>
        <ImgWrapper>
          <SlideImg src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg" />
        </ImgWrapper>
        <ImgWrapper>
          <SlideImg src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </ImgWrapper>
        <ImgWrapper>
          <SlideImg src="https://www.sscsrl.com/wp-content/uploads/2020/09/Senior-Front-End-Developer-1080x675-1.jpg" />
        </ImgWrapper>
        <ImgWrapper>
          <SlideImg src="https://cdn.seeklearning.com.au/media/images/career-guide/module/web-developer-module.jpg " />
        </ImgWrapper>
      </Slider>
    </BannerSection>
  );
};

export default Banner;
