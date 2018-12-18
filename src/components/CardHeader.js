import styled from "@emotion/styled";
import React from "react";

const CardHeader = ({ headerText }) => {
  return (
    <StyledCardHeaderContainer>
      <StyledHeaderText>{headerText}</StyledHeaderText>
    </StyledCardHeaderContainer>
  );
};

const StyledCardHeaderContainer = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  background-color: rgb(90, 116, 204);
  color: rgb(255, 255, 255);
  fill: rgb(255, 255, 255);
  border-radius: 4px 4px 0 0;
  padding: 0 12px;
`;

const StyledHeaderText = styled.div`
  padding: 12px 0;
`;

export default CardHeader;
