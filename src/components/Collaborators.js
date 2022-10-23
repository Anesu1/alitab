import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import Paragraph from "../styled/Paragraph";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from 'react-slick'

  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
import Heading from "../styled/Heading";

const Wrapper = styled.section`
padding:10% 5%;
position:relative;

background:${props => props.theme.color.green};
@media(min-width:768px){
  padding:10% 0;
}
.bg{
  @media(min-width:768px){
    position:absolute;
    left:0;
    height:60%;
    width:50%;
    max-height:400px;
    top:55%;
    transform:translateY(-50%);
    background:#fff;
  }
}
  h2{
    color: rgba(255, 255, 255, 0.67);
    text-align:center;
    line-height:1.3;
    margin-bottom:30px;
    @media(min-width:992px){
      margin-bottom:120px;
    }
  }
  img {
    width: 80%;
    max-width:250px;
    margin:0 auto;
  }
  .text{
    margin:20px 0 30px;
    transition:all 0.7s ease;
    
        opacity:0;
      
    color:${props => props.theme.color.green};
    @media(min-width:768px){
      position:absolute;
      transform: translate(102%, 100px);
      text-align:left;
    }
    @media(min-width:992px){
      transform:translate(150%, 100px);
    }
    h3{
      font-family:${props =>props.theme.fam.bold};
      font-size:25px;
      margin-bottom:10px;
    }
    
  }
  .slick-slider{
    background:#fff;
    padding-bottom:100px;
    text-align:center;
    @media(min-width:768px){
      background:transparent;
      padding-bottom:30px;
    }
    img{
      opacity:0;
      display:none;
    }
  }
  
  .slick-active{
    
    
    @media(min-width:768px){
      img{
        transform:translateX(110px);
        opacity:1;
        display:block;
      }
      .text{
        opacity:0;
      }
    }
    @media(min-width:992px){
      img{
        transform:translateX(180%);
      }
      
    }
    @media(min-width:1200px){
      img{
        transform:translateX(170%);
        margin-right:0;
      }
      
    }
    
  }.slick-current{
    .text{
      opacity:1;
    }

    @media(min-width:768px){
      img{
        transform:translateX(90%);
      }
      .text{
        opacity:1;
      }
      .one{
        transform: translate(58%,100px);
      }
      .two{
        transform: translate(67%,100px);
      }
      .three{
        transform: translate(42%,100px);
      }
      .four{
        transform: translate(51%,100px);
      }
      .five{
        transform: translate(37%,100px);
      }
    }
    @media(min-width:992px){
      img{
        transform:translateX(180%);
      }
      .one{
        transform: translate(56%,100px);
      }
      .two{
        transform: translate(64%,100px);
      }
      .three{
        transform: translate(42%,100px);
      }
      .four{
        transform: translate(50%,100px);
      }
      .five{
        transform: translate(39%,100px);
      }
    }
    @media(min-width:1200px){
      img{
        transform:translateX(190%);
        margin-left:0;
      }
      .one{
        transform: translate(77%,100px);
      }
      .two{
        transform: translate(89%,100px);
      }
      .three{
        transform: translate(59%,100px);
      }
      .four{
        transform: translate(69%,100px);
      }
      .five{
        transform: translate(58%,100px);
      }
    }
  }
    .slick-arrow{
      height:30px;
      width:30px;
      color:#000;
      bottom:0;
      top:unset;
      z-index:3;
      position:absolute;
      transition:all 0.7s ease;
      padding:10px ;
      &:hover{
        background:${props => props.theme.color.green};
        color:#fff;
        svg{
          color:#fff;
        }
      }
      svg{
        color:${props => props.theme.color.green};
        height:30px;
        width:30px;
      }
    } 
    .slick-next{
      right:30%;
      &:before{
        content:"";
      }
      @media(min-width:768px){
        left: 17%;
        right:unset;
    top: 7%;
      }
    }
    .slick-prev{
      left:30%;
      &:before{
        content:"";
      }
      @media(min-width:768px){
        left: 10%;
    top: 7%;
    z-index:3;
      }
    }
  
`;

// const list = [
//   {
//     name: "Milward",
//     role: "Our Assistant",
//     imageSrc: "",
//   },
//   {
//     name: "Alwyn Francis", 
//     role: "Our Administrator",
//     imageSrc: "./images/team2.png",
//   },
//   {
//     name: "Tariro Mukunza",
//     role: "Our Director of Dream, HIV support group",
//     imageSrc: "./images/team3.png",
//   },
  
//   {
//     name: "Charle",
//     role: "Our Assistant",
//     imageSrc: "./images/team2.png",
//   },
//   {
//     name: "Panashe",
//     role: "Our Assistant",
//     imageSrc: "./images/team3.png",
//   },
  
// ];
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaLongArrowAltLeft />
  </div>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <FaLongArrowAltRight />
  </div>
);

function Collaborators() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    prevArrow:<SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              
          }
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            
        }
    },
      

      
  ],
  };
  return (
    <Wrapper id="team">
      {/* <div className="arrows">
        <div className="swiper-button" ref={prevRef}>
          
        </div>
        <div className="swiper-button" ref={nextRef}>
         
        </div>
      </div> */}
      <Heading>Our Collaborators</Heading>
      <div className="bg"></div>
      <Slider {...settings}>
    
    
        
          <div className="inner">
            <div className="text one">
              <h3>Milward Blaimu</h3>
              <Paragraph>Logistic Coordinator</Paragraph>
            </div>
            <img src="./images/team1.png" alt="Milward Blaimu" />
          </div>
          <div className="inner">
            <div className="text two">
              <h3>Alwyn Francis</h3>
              <Paragraph>Administrator</Paragraph>
            </div>
            <img src="./images/team2.png" alt="Milward Blaimu" />
          </div>
          <div className="inner">
            <div className="text three">
              <h3>Tariro Mukunza</h3>
              <Paragraph>Our Director of Dream, HIV support group</Paragraph>
            </div>
            <img src="./images/team3.png" alt="Milward Blaimu" />
          </div>
          <div className="inner">
            <div className="text four">
              <h3>Alessandra Nicola</h3>
              <Paragraph></Paragraph>
            </div>
            <img src="./images/team5.png" alt="Milward Blaimu" />
          </div>
          <div className="inner">
            <div className="text five">
              <h3>Hans Wolbert desiner</h3>
              <Paragraph>Logistic Coordinator</Paragraph>
            </div>
            <img src="./images/team4.png" alt="Milward Blaimu" />
          </div>
        
      
  </Slider>
    
    </Wrapper>
  );
}

export default Collaborators;