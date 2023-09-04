export const textBoxStyle = {
  display: "flex",
  flexFlow: "column",
  flexWrap: "wrap",
  height: "fit-content",
  margin: "0.5em",
  overflow: "hidden",
  justifyContent: "space-between",
};

export const resultRowStyle = {
  display: "flex",
  gap: "1em",
};

export const titleStyle = {
  ...resultRowStyle,
  justifyContent: "center",
  color: "primary.main",
};

export const resultValueStyle = {
  fontWeight: "bold",
};

export const correctStyle = {
  color: "green",
};

export const incorrectStyle = {
  color: "red",
};

export const inParenthesesStyle = {
  display: "inline",
};
