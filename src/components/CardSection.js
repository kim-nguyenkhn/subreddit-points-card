/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const CardSection = ({ headerText, amount, content, change }) => {
  return (
    <>
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
      <div>
        <span>{amount}</span>

        {change && (
          <sup
            css={css`
              letter-spacing: 0.5px;
              line-height: 12px;
              text-transform: uppercase;
              margin-bottom: 10px;
            `}
          >
            {change}%
          </sup>
        )}
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
        {content}
      </p>
    </>
  );
};

export default CardSection;
