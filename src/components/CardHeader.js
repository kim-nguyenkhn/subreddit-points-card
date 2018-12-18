/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const CardHeader = () => {
  return (
    <h1
      css={css`
        background-color: #5a74cc;
        color: #fff;
      `}
    >
      Subreddit Points
    </h1>
  );
};

export default CardHeader;
