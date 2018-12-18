import React, { Component } from "react";
import PropTypes from "prop-types";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import CardHeader from "./CardHeader";
import SubredditValueSection from "./SubredditValueSection";
import DonutsSection from "./DonutsSection";
import SendButton from "./SendButton";

const Card = ({ change, value, totalAvailable }) => (
  <>
    <CardContainer>
      <CardHeader headerText="Subreddit Points" />
      <CardBody>
        <SubredditValueSection
          headerText="Subreddit Value"
          amount={value}
          change={change}
          descriptionText="Estimate based on number of users and user engagement."
        />
        <DonutsSection
          headerText="Donuts"
          amount={totalAvailable}
          descriptionText="Subreddit Points reward posters, commenters, and moderators for their contributions. Used to weight vote on polls, tip content and buy badges. They are distributed weekly."
        />
      </CardBody>
    </CardContainer>
  </>
);

const CardContainer = styled.div`
  width: 312px;
  margin: 0 auto;
  border-radius: 5px 5px 4px 4px;
  background-color: #fff;
`;

const CardBody = styled.div`
  padding: 12px;
`;

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
