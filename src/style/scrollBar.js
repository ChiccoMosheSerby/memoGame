import { css } from "styled-components";

export const ScrollBar = css`
    &::-webkit-scrollbar {
      margin-right: 2px;
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #fff;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(215, 215, 215, 0.9);
      border-radius: 10px;
      max-height: 94px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(215, 215, 215, 1);
    }
    overflow-y: auto;
  `;

