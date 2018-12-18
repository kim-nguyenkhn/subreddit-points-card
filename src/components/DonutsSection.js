/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import React from "react";
import SendButton from "./SendButton";
import Donut from "../img/Donuts.png";

const DonutsSection = ({ headerText, amount, descriptionText, change }) => {
  return (
    <div>
      <StyledHeader>{headerText}</StyledHeader>
      <StyledTotalDonutsContainer>
        <StyledDonutsAmountContainer>
          <img src={Donut} alt="Donut" width={25} height={25} />
          <StyledDonutsAmount>{amount}</StyledDonutsAmount>
        </StyledDonutsAmountContainer>
        <StyledTotalText>Total</StyledTotalText>
      </StyledTotalDonutsContainer>

      <StyledDescriptionText>{descriptionText}</StyledDescriptionText>
      <SendButton />
    </div>
  );
};

const StyledHeader = styled.h2`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  margin-bottom: 16px;
  position: relative;
`;

const StyledTotalDonutsContainer = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
`;

const StyledDonutsAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDonutsAmount = styled.span`
  margin-left: 5px;
`;

const StyledTotalText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

const StyledDescriptionText = styled.p`
  font-family: Noto Sans, Helvetica Neue, Segoe UI, Helvetica, Verdana, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 20px;
`;

export default DonutsSection;
