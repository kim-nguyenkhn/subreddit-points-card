import React, { Component } from "react";
import PropTypes from "prop-types";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import CardHeader from "./CardHeader";
import CardSection from "./CardSection";
import SendButton from "./SendButton";

const Card = ({ change, value, totalAvailable }) => (
  <>
    <CardContainer>
      <CardHeader headerText="Subreddit Points" />
      <CardSection
        headerText="Subreddit Value"
        amount={12309}
        change={2.5}
        content="Lorem Ipsum baby"
      />
      <CardSection
        headerText="Donuts"
        amount={134098890}
        content="Lorem Ipsum baby"
      />
      <SendButton />
    </CardContainer>
  </>
);

const CardContainer = styled.div`
  width: 312px;
  margin: 0 auto;
`;

//Header
//Subreddit Value - {value}, ^{change}
//Donuts - {totalAvailable}

Card.defaultProps = {
  change: "0",
  value: "0",
  totalAvailable: "0"
};

Card.propTypes = {
  change: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalAvailable: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Card;
