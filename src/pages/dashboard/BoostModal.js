import React, { useState } from "react";

import { Typography, Grid, Button } from "@mui/material";
import GeneralModal from "../../Chat/GeneralModal";
import Rocket from "./../../assets/images/rocket.png";
import Modal from "@mui/material/Modal";

import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@mui/styles";
import { url } from "../../environment";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => {
  return {
    bulbContainer: {
      height: 60,
      width: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      backgroundColor: theme?.palette?.secondary?.main,
    },
    dayContainer: {
      width: "100%",
      // backgroundColor: "#E9E9E9",
      padding: "10px",
      textAlign: "center",
    },
  };
});

const TIME_ARRAY = new Array(12).fill(null).map((e, v) => {
  const hour = (v + 1).toString();

  const finalHour = hour.length <= 1 ? 0 + hour : hour;
  return {
    title: finalHour,
    value: v + 1,
  };
});

const BumpModal = ({
  CoinsError,
  Coins,
  BoostPost,
  setCoins,
  ListingOtion,
  open,
  setSelectedListingId,
  setBoastModalOpen,
  noOfDays,
  setNoOfDays,
}) => {
  const classes = useStyles();
  const [bumpType, setBumpType] = useState(1);
  const [bumpDay, setBumpDay] = useState(1);

  const [ListingId, setListingId] = useState("");
  const [timePeriod, setTimePeriod] = useState("am");
  const UserID = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // getUserRockects();
  }, []);
  const getUserRockects = () => {
    fetch(`${url}/user/getUserRockets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: UserID?.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
          setCoins(response?.doc?.coins);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GeneralModal
      open={open}
      setOpen={setBoastModalOpen}
      hasHeader={true}
      isResponsive={true}
    >
      <Grid
        container
        spacing={2}
        // alignItems="center"
        justifyContent="center"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Grid item xs={12} align="center">
          <div className={classes.bulbContainer}>
            <img src={Rocket} alt="icon" width="50px" />
          </div>
          <Typography variant="h5">
            <b>{Coins}</b>
          </Typography>
          <Typography variant="caption">Available Coins</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" className={classes.dayContainer}>
            Somalia sky rockets feature provides you to boost your 1 listing in
            exchange for 1 rocket for whole 1 day..!!
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={bumpType === 3 ? 6 : 12}>
              <Grid container alignItems="flex-end" spacing={1}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      type="number"
                      label="Number of Days"
                      value={noOfDays}
                      onChange={(e) => setNoOfDays(e.target.value)}
                      error={Boolean(CoinsError)}
                      helperText={CoinsError}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={3}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            size="large"
            onClick={() => BoostPost()}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </GeneralModal>
  );
};

export default BumpModal;
