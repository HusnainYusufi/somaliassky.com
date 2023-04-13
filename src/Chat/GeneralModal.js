import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function GeneralModal({
  open,
  setOpen,
  children,
  isResponsive = false,
  hasHeader = false,
  hasHeaderOnDesktop = true,
  hasHeading = false,
  heading,
  style,
  DialogueProps,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("(max-width:960px)"));
  // console.log(style, "STYLE");
  // console.log(
  //   hasHeader,
  //   hasHeaderOnDesktop,
  //   fullScreen,
  //   hasHeader || (hasHeaderOnDesktop && fullScreen),
  //   "res"
  // );
  // alert(hasHeader)
  return (
    <Dialog
      fullScreen={isResponsive && fullScreen}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="responsive-dialog-title"
      style={style}
      {...DialogueProps}
    >
      <DialogContent>
        {(hasHeader || (hasHeaderOnDesktop && fullScreen)) && (
          <Grid
            container
            direction="row-reverse"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item xs={1}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Grid>
            {heading && (
              <Grid item p={2} align="center" xs={11}>
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  {heading}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
