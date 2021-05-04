import React from "react";
import Icon1 from '../../images/svg-deck.svg.svg';
import Icon2 from '../../images/svg-deck.svg.svg';
import Icon3 from '../../images/svg-deck.svg.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <PortfolioH2>Pawsperity</PortfolioH2>
            <PortfolioP>
              Supporting a healthy life for your pet.
            </PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2>Busy Parent Scheduler</PortfolioH2>
            <PortfolioP>
              Need help with your hectic schedule?
            </PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2>Project 3</PortfolioH2>
            <PortfolioP>
              Testing
            </PortfolioP>
          </PortfolioCard>
        </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
