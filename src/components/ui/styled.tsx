import styled from "@emotion/styled";

import { Property } from "csstype";

type BoxProps = {
  column?: boolean;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  textAlign?: Property.TextAlign;
  minHeight?: Property.MinHeight;
  padding?: Property.Padding;
};

export const Box = styled.div((props: BoxProps) => ({
  display: "flex",
  flexDirection: props.column ? "column" : "row",
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  margin: props.margin,
  textAlign: props.textAlign,
  minHeight: props.minHeight,
  padding: props.padding,
}));

type TextProp = {
  fontSize?: string;
  color?: string;
};

export const Text = styled.span<TextProp>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  color: ${(props) => (props.color ? props.color : "black")};
`;
