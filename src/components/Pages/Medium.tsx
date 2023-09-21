import react, { useState, useEffect } from "react";
import styled from "styled-components";
import pix from "../../assets/Membership_Coco.png";
import pix1 from "../../assets/Membership_Lowry.png";
import pix2 from "../../assets/Membership_Molina-1.png";
import pix3 from "../../assets/download-removebg-preview (9).png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/medium-removebg-preview.png";

interface iData {
  img?: string;
  name: any;
  text: string;
}
const Medium = () => {
  const [number, setNumber] = useState(0);
  const [slide, setSlide] = useState<Array<iData>>([
    {
      text: "I love Medium’s membership — it gives me access to the stories I love by the writers I love, and .",
      name: "JESSICA",
      img: pix2,
    },
    {
      text: "For me, the access to a variety of ideas and perspectives is invaluable. Medium brings people from all .",
      name: "AHMED",
      img: pix1,
    },
    {
      text: "My favorite thing about a Medium membership is endlessly reading up-and-coming and well-known .",
      name: "ISAAC",
      img: pix,
    },
  ]);
  const incr = () => {
    setNumber((el: number) => {
      return el + 1;
    });
  };
  const dcr = () => {
    setNumber((el: number) => {
      return el - 1;
    });
  };

  useEffect(() => {
    setInterval(() => {
      setNumber((el: number) => {
        return el + 1;
      });
    }, 5000);
  }, []);
  return (
    <div>
      <Container>
        <Hold>
          <span>Why I'm A Medium Member</span>
        </Hold>
        <Wrapper>
          <Left>
            <Circle1 src={slide[number % slide.length].img} />
            {/* <Circle2 />
            <Circle3 /> */}
          </Left>
          <Right>
            {slide[number % slide.length].text}
            <Name>
              <b>{slide[number % slide.length].name}</b>
            </Name>
          </Right>
        </Wrapper>
        <Dbtm>
          <L onClick={dcr}>
            <HiOutlineArrowNarrowLeft />
          </L>
          <R onClick={incr}>
            <HiOutlineArrowNarrowRight />
          </R>
        </Dbtm>
      </Container>
      <Container1>
        <Wrapper1>
          <Logo1>
            <Img1 src={logo} />
          </Logo1>

          <Link to="top" smooth={true}>
            <Back1>
              Back to top <Up1 />{" "}
            </Back1>
          </Link>
          <Links1>
            <Linkk1>About</Linkk1>
            <Linkk1>Terms</Linkk1>
            <Linkk1>Privacy</Linkk1>
            <Linkk1>Help</Linkk1>
            <Linkk1>Team</Linkk1>
            <Linkk1>Press</Linkk1>
          </Links1>
        </Wrapper1>
      </Container1>
    </div>
  );
};
export default Medium;
const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    font-size: 25px;
    width: 95%;
  }
`;

const Rside = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
`;
const Lside = styled.div`
  height: 30px;
  width: 170px;
  img {
    height: 100%;
    width: 100%;
  }
  margin-left: 12px;
  margin-top: 18px;
`;
const Footer = styled.div`
  width: 100%;
  height: 65px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;
const R = styled.div`
  width: 30%;
  height: 100%;
  font-size: 27px;
`;

const L = styled.div`
  width: 30%;
  height: 100%;
  font-size: 27px;
`;
const Dbtm = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;
const Circle3 = styled.div`
  height: 135px;
  width: 30px;
  border-radius: 50%;
  background-color: green;
`;
const Circle2 = styled.div`
  height: 145px;
  width: 70px;
  border-radius: 50%;
  background-color: orange;
`;
const Circle1 = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: orange;
`;
const Name = styled.div`
  height: 20px;
  width: 70px;
  position: absolute;
  top: 200px;
  left: 30px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Right = styled.div`
  height: 100%;
  width: 66%;
  position: relative;
  font-size: 25px;
  transition: all ease-in-out 350ms;
  // margin-left: 30px;
  @media (max-width: 1000px) {
    width: 100%;

    font-size: 30px;
    text-align: left;
  }
  @media (max-width: 500px) {
    width: 90%;

    font-size: 10px;
    text-align: center;
  }
`;
const Left = styled.div`
  height: 100%;
  width: 34%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  width: 62%;
  height: 230px;
  display: flex;
  @media (max-width: 1000px) {
    width: 90%;
    justify-content: center;

    gap: 30px;
  }
  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  height: 400px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  span {
    font-size: 38px;
    font-weight: bold;
    @media (max-width: 500px) {
      font-size: 30px;
      text-align: center;
    }
  }
`;

const Up1 = styled(FaAngleUp)`
  margin-top: 5px;
`;

const Back1 = styled.div`
  display: flex;
  align-items: center;
  transition: all 500ms;
  cursor: pointer;
  gap: 3px;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Linkk1 = styled.div`
  text-decoration: underline;

  @media (max-width: 500px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Links1 = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Img1 = styled.img`
  width: 100%;
`;

const Logo1 = styled.div`
  width: 13%;
  height: 100%;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

const Wrapper1 = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 0;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Container1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
