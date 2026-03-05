import { styled } from "styled-components";
import * as React from "react";

export type FlexProps = {
  $alignVertical?:
    | "top"
    | "center"
    | "bottom"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $alignHorizontal?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    ;
  children?: React.ReactNode;
  $fullWidth?: boolean;
  $fullHeight?: boolean;
  $gapX?: string;
  $gapY?: string;
  $grow?: number;
  $wrap?: boolean;
};
const FlexRowStyled = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$alignHorizontal};
  align-items: ${(props) => props.$alignVertical};
  ${(props) => props.$fullWidth && "width: 100%;"}
  ${(props) => props.$fullHeight && "height: 100%;"}
  gap: ${(props) => props.$gapY ? props.$gapY : "0px"} ${(props) => props.$gapX ? props.$gapX : "0px"};
  flex-grow: ${(props) => props.$grow};
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
`;

export function FlexRow(props: FlexProps) {
  return <FlexRowStyled {...props}></FlexRowStyled>;
}

const FlexColumnStyled = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$alignVertical};
  align-items: ${(props) => props.$alignHorizontal};
  ${(props) => props.$fullWidth && "width: 100%;"}
  ${(props) => props.$fullHeight && "height: 100%;"}
  gap: ${(props) => props.$gapY ? props.$gapY : "0px"} ${(props) => props.$gapX ? props.$gapX : "0px"};
  flex-grow: ${(props) => props.$grow};
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
`;

export function FlexColumn(props: FlexProps) {
  return <FlexColumnStyled {...props}></FlexColumnStyled>;
}
