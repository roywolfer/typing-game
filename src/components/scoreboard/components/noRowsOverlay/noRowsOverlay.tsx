import { OverlaySVG } from "./overlaySVG";
import { Box, Typography } from "@mui/material";
import { overlayBoxStyle, overlayTextStyle } from "./style";

export interface NoRowsOverlayProps {
  description: string;
}

export function NoRowsOverlay({ description }: NoRowsOverlayProps) {
  return (
    <Box sx={overlayBoxStyle}>
      <OverlaySVG />
      <Typography sx={overlayTextStyle}>{description}</Typography>
    </Box>
  );
}
