import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
    padding:10% 5%;
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;
    text-align:center;
    @media(min-width:768px){
        flex-direction:row;
    }
    @media(min-width:992px){
        padding:10% 15%;
    }
    .text{
        margin-bottom:30px;
        width:100%;
        @media(min-width:768px){
            text-align:left;
           text-align:center;
        }
        h3{
            font-family:${props => props.theme.fam.lato};
            color:${props => props.theme.color.lightgreen};
            font-size:30px;
            margin-bottom:20px;
            @media(min-width:992px){
                margin-bottom:30px;
                font-size:40px;
            }
            br{
                dispay:none;
                @media(min-width:768px){
                    display:block;

                }
            }
        }
    }
    img{
        width:35%;
        max-width:200px;
        margin:0 auto;
        margin-bottom:30px;
        object-fit:contain;
        @media(min-width:768px){
            width:100px;
            &:not(:nth-of-type(1)){
                width:130px;
            }
            &:nth-of-type(5),
            &:nth-of-type(6),
            &:nth-of-type(7){
                display:none;
            }
        }

    }
    .bottom{
        display:none;
        @media(min-width:768px){
            display:block;
            margin:0 auto;
            width:80%;
            display:flex;
            align-items:center;
            img{
                object-fit:contain;
            }
        }
    }

`;

function Clients() {
  return (
    <Wrapper>
        <div className="text">
        <h3>Partners</h3>
        <Paragraph>Hopefully you will be one of them</Paragraph>
      </div>
      <img src="./images/client (1).jpg" alt="dreams logo" />
      <img src="./images/client (2).jpg" alt="NREF logo" />
      <img src="./images/client (3).jpg" alt="probrands logo" />
      <img src="./images/client (4).jpg" alt="royal harare golf logo" />
      <img src="./images/client5.jpg" alt="LFT logo" />
      <img src="./images/client6.png" alt="MSF logo" />
      <img src="./images/client7.png" alt="zimgold logo" />
      <div className="bottom">
      <img src="./images/client5.jpg" alt="LFT logo" />
      <img src="./images/client6.png" alt="MSF logo" />
      <img src="./images/client7.png" alt="zimgold logo" />
      </div>
    </Wrapper>
  );
}

export default Clients;
