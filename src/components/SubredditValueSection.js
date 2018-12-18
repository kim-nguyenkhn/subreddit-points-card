/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { ReactComponent as Triangle } from "../img/Triangle.svg";

const SubredditValueSection = ({
  headerText,
  amount,
  descriptionText,
  change
}) => {
  return (
    <div
      css={css`
        border-bottom: 1px solid rgb(237, 239, 241);
      `}
    >
      <h2
        css={css`
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 12px;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
        `}
      >
        {headerText}
      </h2>
      <div
        css={css`
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 16px;
        `}
      >
        <div>{amount}</div>
        <PercentChange change={change} />
      </div>

      <p
        css={css`
          font-family: Noto Sans, Helvetica Neue, Segoe UI, Helvetica, Verdana,
            Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          margin-bottom: 20px;
        `}
      >
        {descriptionText}
      </p>
    </div>
  );
};

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
