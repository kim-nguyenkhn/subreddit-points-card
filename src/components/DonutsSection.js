/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import SendButton from "./SendButton";
import Donut from "../img/Donuts.png";

const DonutsSection = ({ headerText, amount, descriptionText, change }) => {
  return (
    <div>
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
          margin-bottom: 16px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <img src={Donut} alt="Donut" width={25} height={25} />
          <span
            css={css`
              margin-left: 5px;
            `}
          >
            {amount}
          </span>
        </div>
        <div
          css={css`
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
          `}
        >
          Total
        </div>
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
      <SendButton />
    </div>
  );
};

export default DonutsSection;
