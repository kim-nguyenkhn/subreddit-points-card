/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Triangle } from "../img/Triangle.svg";

const SubredditValueSection = ({
  headerText,
  amount,
  descriptionText,
  change
}) => {
  return (
    <StyledSectionContainer css={css``}>
      <StyledHeader>{headerText}</StyledHeader>
      <StyledAmountContainer>
        <div>{amount}</div>
        <PercentChange change={change} />
      </StyledAmountContainer>

      <StyledDescriptionText>{descriptionText}</StyledDescriptionText>
    </StyledSectionContainer>
  );
};

const StyledSectionContainer = styled.div`
  border-bottom: 1px solid rgb(237, 239, 241);
`;

const StyledHeader = styled.h2`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  margin-bottom: 16px;
  position: relative;
`;

const StyledAmountContainer = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledDescriptionText = styled.p`
  font-family: Noto Sans, Helvetica Neue, Segoe UI, Helvetica, Verdana, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 20px;
`;

const PercentChange = ({ change }) => {
  const color = change > 0 ? "green" : "red";
  return (
    <sup
      css={css`
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 12px;
        text-transform: uppercase;
        margin-bottom: 10px;
        color: ${color};
      `}
    >
      <Triangle
        css={css`
          height: 10px;
          width: 10px;
          fill: ${color};
          margin-left: 5px;
        `}
      />
      <span>{change}%</span>
    </sup>
  );
};

export default SubredditValueSection;
