import React from "react";
import Icon1 from '../../images/svg-deck.svg.svg';
import Icon2 from '../../images/svg-deck.svg.svg';
// import Icon3 from '../../images/svg-deck.svg.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  // PortfolioH2,
  PortfolioP,
  Column2,
  Img,
  ImgWrap,
} from "./ContactElements";

const Contact = () => ({
  img,}) => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <a href='https://infinite-lowlands-76487.herokuapp.com/login'>Pawsperity</a>
            {/* <PortfolioH2>Pawsperity</PortfolioH2> */}
            <PortfolioP>
              Supporting a healthy life for your pet.
            </PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <a href="https://kjwallac.github.io/BusyParentScheduler/calendar.html">Busy Parent Scheduler</a>
            {/* <PortfolioH2>Busy Parent Scheduler</PortfolioH2> */}
            <PortfolioP>
              Need help with your hectic schedule?
            </PortfolioP>
          </PortfolioCard>

          <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          {/* <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2>Project 3</PortfolioH2>
            <PortfolioP>

            </PortfolioP>
          </PortfolioCard> */}
        </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Contact;