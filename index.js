import React from "react";
import Icon1 from '../../images/svg-deck.svg.svg';
import Icon2 from '../../images/svg-deck.svg.svg';
import Icon3 from '../../images/svg-deck.svg.svg';

// import Icon3 from '../../images/svg-deck.svg.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  // PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

// TODO: commented out portfolio 3 section is PROJECT 3 info
const Portfolio = () => {
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
            <a href='https://github.com/jrdrenth/pawsperity'>Github Link</a>          
            </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <a href="https://kjwallac.github.io/BusyParentScheduler/calendar.html">Busy Parent Scheduler Link</a>
            {/* <PortfolioH2>Busy Parent Scheduler</PortfolioH2> */}
            <PortfolioP>
              Need help with your hectic schedule?
            </PortfolioP>
            <a href="https://github.com/erictn3/BusyParentScheduler">Github Link</a>          
            </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <a href="http://solarstein.io">Solar Stein</a>

            {/* <PortfolioH2>Project 3</PortfolioH2> */}
            <PortfolioP>
              Organizing and tracking your job search journey.
            </PortfolioP>
            <a href="https://github.com/erictn3/Solar_Stein">Github Link</a>          
            </PortfolioCard>
        </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
