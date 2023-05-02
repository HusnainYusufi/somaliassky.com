import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import GeneralModal from "./GeneralModal";
function OfferModal({
  // setChatText,
  offer,
  setOffer,
  makeOffer,
  setOpen,
  ...params
}) {
  const onChangePrice = (e) => {
    setOffer(e.target.value);
    // setChatText("");
  };

  return (
    <GeneralModal setOpen={setOpen} {...params}>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography variant="subtitle1">Enter Your Offer</Typography>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Your Offer"
            fullWidth
            type="number"
            value={offer}
            onChange={onChangePrice}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              setOpen(false);

              makeOffer();
            }}
            fullWidth
            color="secondary"
          >
            Send Offer
          </Button>
        </Grid>
      </Grid>
    </GeneralModal>
  );
}
export default OfferModal;
