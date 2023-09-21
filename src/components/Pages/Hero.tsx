import react from "react";
import styled from "styled-components";
import pix from "../../assets/mRight.svg";
import pix1 from "../../assets/mleft.svg";

const Hero = () => {
  return (
    <div>
      <Container0>
        <Whithin>
          <span>Fuel Great Thinking.</span>
          <p>
            Become a Medium member to enjoy unlimited access and
            <br />
            directly support the writers you read most.
          </p>
          <Gt>Get Unlimited Access</Gt>
        </Whithin>
      </Container0>
      <Container>
        <Left>
          <span>Get unlimited access to every story.</span>
          <img src={pix1} />
          <p>
            Read any article in our entire library across all your devices —
            with no paywalls, story limits or ads.
          </p>
        </Left>
        <Line />
        <Right>
          <span>Support the voices you want to hear more from.</span>
          <img src={pix} />
          <p>
            A portion of your membership will directly support the writers and
            thinkers you read the most.
          </p>
        </Right>
      </Container>
    </div>
  );
};

export default Hero;
const Right = styled.div`
  min-height: 370px;
  color: white;
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 17px;
  img {
    height: 50%;
    width: 50%;
  }
  span {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    flex-wrap: wrap;
  }
`;
const Line = styled.div`
  height: 430px;
  width: 1px;
  background-color: white;
`;
const Left = styled.div`
  min-height: 370px;
  width: 40%;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 18px;
  img {
    height: 50%;
    width: 50%;
  }
  span {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    flexw-wrap: wrap;
  }
`;
const Container = styled.div`
  min-height: 480px;
  width: 100%;
  background-color: #1a73e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Gt = styled.div`
  padding: 10px 15px;
  width: 19%;
  color: white;
  background-color: black;
  border-radius: 15px;
  &:hover {
    color: aliceblue;
  }
  @media (max-width: 1000px) {
    width: 150px;
  }
`;
const Whithin = styled.div`
  height: 300px;
  width: 60%;
  padding: 10px 15px;
  // background-color:green;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 85px;
    font-weight: bold;
  }
  p {
    font-weight: bold;
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    width: 90%;
    span {
      font-size: 55px;
      text-align: center;
    }
  }
`;
const Container0 = styled.div`
  height: 420px;
  width: 100%;
  background-color: #1a73e8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
`;
