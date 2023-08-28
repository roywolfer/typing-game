import { Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import RestartIcon from "@mui/icons-material/RestartAlt";

export default function TypingGame() {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12}>
        <TextField
          value="MultiLine with rows: 2 and rowsMax: 4"
          variant="outlined"
          multiline
          fullWidth
          rows={2}
        />
      </Grid>
      <Grid item xs={9} md={9.5}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={2} md={1.5}>
        <Typography
          variant="h4"
          component="div"
          textAlign="center"
          lineHeight="inherit"
        >
          1:00
        </Typography>
      </Grid>
      <Grid item xs={1} display="flex">
        <Tooltip title="Restart">
          <Button variant="outlined" sx={{ minWidth: 0 }}>
            <RestartIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
