/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const SendButton = () => (
  <button
    css={css`
      border: 1px solid rgb(90, 116, 204);
      border-radius: 3px;
      color: rgb(90, 116, 204);
      background-color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 6px 12px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 200ms ease;
      &:hover {
        background-color: rgb(90, 116, 204);
        color: #fff;
      }
    `}
  >
    Send
  </button>
);

export default SendButton;
