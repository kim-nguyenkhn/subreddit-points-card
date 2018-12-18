/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const CardHeader = ({ headerText }) => {
  return (
    <div
      css={css`
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
      `}
    >
      <div
        css={css`
          padding: 12px 0;
        `}
      >
        {headerText}
      </div>
    </div>
  );
};

export default CardHeader;
