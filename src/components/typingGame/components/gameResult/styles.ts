import { SystemStyleObject } from "@mui/system";

export const textBoxStyle: SystemStyleObject = {
  display: "flex",
  flexFlow: "column",
  flexWrap: "wrap",
  height: "fit-content",
  margin: "0.5em",
  overflow: "hidden",
  justifyContent: "space-between",
};

export const resultRowStyle: SystemStyleObject = {
  display: "flex",
  gap: "1em",
};

export const titleStyle: SystemStyleObject = {
  ...resultRowStyle,
  justifyContent: "center",
  color: "primary.main",
};

export const resultValueStyle: SystemStyleObject = {
  fontWeight: "bold",
};

export const correctStyle: SystemStyleObject = {
  color: "green",
};

export const incorrectStyle: SystemStyleObject = {
  color: "red",
};

export const inParenthesesStyle: SystemStyleObject = {
  display: "inline",
};
