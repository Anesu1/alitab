/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";
import {FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import moment from 'moment'


const Wrapper = styled.section`
padding:300px 5% 5%;
    background: linear-gradient( to bottom, rgb(255 255 255), rgb(255 255 255 / 63%) 19%, rgb(0 0 0 / 10%) 80% ), url(./images/footer.png);
    background-size: cover;
    margin-top: -15%;
    background-position:center bottom;
    display:flex;
    flex-direction:column;
    position:relative;

    color:#fff;
    justify-content:flex-end;
    @media(min-width:1200px){
      padding:300px 15% 5%;
    }
    .bg{
      background: linear-gradient(to bottom, #ffffff, rgb(255, 255, 255) 19%, rgb(255 255 255 / 0%) 80%);
      position:absolute;
      top:-50px;
      left:0;
      height:200px;
      width:100%;
    }
    h2{
      font-family:${props => props.theme.fam.lato};
      font-size:24px;
      line-height:1.3;
      color:#fff;
      margin-bottom:30px;
      @media(min-width:992px){
        font-size:40px;
        margin-bottom:60px;
      }
    } 
    .inner{
      margin-bottom:30px;
      @media(min-width:768px){
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        justify-content:space-between;
      }
      @media(min-width:992px){
        justify-content:unset;
        margin-bottom:50px;
      }
      .footer-inner{
        display:flex;
        margin-bottom:20px;
        align-items:center;
        
        &:first-child, &:nth-child(2){
          width:45%;
        }
        @media(min-width:992px){
          &:first-child, &:nth-child(2), &:last-child{
          width:max-content;
          margin-right:40px;
        }
        }
        p{
          margin-left:15px;
          font-size:16px;
          
        }
        svg{
          height:20px;
          width:20px;
        }
      }
    }
    p{
      font-size:15px;
    }
    .bottom{
      @media(min-width:768px){
        display:flex;
        justify-content:space-between;
      }
      p{
        margin-bottom:20px;
        font-size:15px;
        @media(min-width:768px){
            margin:0;
          }
      }
      .bottom-link{
        @media(min-width:768px){
        display:flex;
        align-items:center;
        p{
          margin:0 20px 0;
        }
      }
      }
      .bottom-inner{
        display:flex;

        align-items:center;
        
        a{
          color:#fff;
          font-size:15px;
          transition:all 0.7s ease;
          &:hover{
            color:${props => props.theme.color.lightgreen};
          }
        }
        img{
          margin:0 20px;
          height:5px;
          width:5px;
        }
      }
    }
`;

function Footer() {
  const year = moment().year()
  return (
    <Wrapper>
      <div className="bg"></div>
      <h2>Contact Us <br /> For More Information</h2>
      <div className="inner">
        <div className="footer-inner">
          <FaEnvelope />
          <Paragraph>alitabinfo@gmail.com</Paragraph>
        </div>
        <div className="footer-inner">
          <BsFillTelephoneFill />
          <Paragraph>0033611039132</Paragraph>
        </div>
        <div className="footer-inner">
          <FaMapMarkerAlt />
          <Paragraph>Zimbabwe, France, Italy, United Kingdom</Paragraph>
        </div>
      </div>
      <div className="bottom">
        <Paragraph>© Alitab Consultancy {year}</Paragraph>
        <div className="bottom-link">
          <Paragraph>Follow us on:</Paragraph>
          <div className="bottom-inner">
            <a href="https://www.facebook.com/Alitab-104128535650814">Facebook</a>
            <img src="./images/dot.png" alt="" />
            <a href="https://www.linkedin.com/company/81842264/admin/">LinkedIn</a>
            <img src="./images/dot.png" alt="" />
            <a href="https://www.instagram.com/alitabwastemanagement/">Instagram</a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
