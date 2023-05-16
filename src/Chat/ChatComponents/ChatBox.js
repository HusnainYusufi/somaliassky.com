import {
  Grid,
  TextField,
  Typography,
  Avatar,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import profileIcon from "../../assets/Icons/profileIcon.png";
// import { setChatBoxId } from "../../Redux/Action";
import { useLocation } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector, useDispatch } from "react-redux";

import ReactStars from "react-rating-stars-component";
import SENDER_ICON from "../../assets/Icons/icon.send.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { io } from "socket.io-client";
import EMOJI_ICON from "../../assets/Icons/smile.png";
import PAPER_CLIP_ICON from "../../assets/Icons/paperclip.png";
import { useState } from "react";
import { url, ImageUrl } from "../../environment";
import OfferModal from "../OfferModal";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";
const socket = io.connect("https://api.somaliasky.com", {
  transports: ["websocket"],
  timeout: 20000,
  reconnectionAttempts: 3,
  path: "/custom",
  forceNew: true,
});
socket.on("connect", () => {
  console.log("Connected");
});
const useCardStyles = makeStyles((theme) => {
  return {
    root: {
      padding: 10,
      backgroundColor: "#F1F1F1",
      cursor: "pointer",
    },
    image: {
      borderRadius: 10,
      marginBottom: 10,
      height: 300,
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",

      justifyContent: "flex-end",
    },
    title: {
      maxWidth: 120,
    },
    spotlight: {
      height: 65,
      width: 65,
      backgroundColor: theme?.palette?.primary?.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 80,
      margin: 7,
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
    flex1: {
      flex: 1,
    },
    flex0: {
      flex: 0,
    },
  };
});
function ChatBox({
  classes,
  userChat,
  setDetails,
  Details,
  ChatBoxDetails,
  ChatBoxID,
  setUserChat,
  setSingleChat,
  setEmptyScreen,
  EmptyScreen,
  SingleChat,
  userChatName,
}) {
  const cardStyles = useCardStyles();

  const [LoginUser, SetLoginUser] = useState();
  const [MessagesSenderID, setMessagesSenderID] = useState("");
  const [MessagesSender, setMessagesSender] = useState("");
  const [ChatBoxOfferID, setChatBoxOfferID] = useState("");
  const [Offer, setOffer] = useState(0);
  const [ProfilePic, setProfilePic] = useState(localStorage.getItem("user"));
  const [fNameItuIni, setFNameItuIni] = useState(localStorage.getItem("user"));
  const [chatText, setChatText] = useState("");
  const [offerModalBool, setOfferModalBool] = useState(false);
  const location = useLocation();
  const data = location?.state?.data;

  useEffect(() => {
    // getChat(location.state);
    const User = JSON.parse(localStorage.getItem("user"));
    SetLoginUser(User);
    setFNameItuIni(User.doc?.username);
    setProfilePic(User.doc?.profileImage);
    acceptedOffer();
  }, []);

  React.useEffect(() => {
    socketNew("");
  }, []);
  const dispatch = useDispatch();
  const ChatMain = useSelector((state) => state);

  const acceptedOffer = () => {
    socket.on("offerRequestAccepted", (msg) => {
      console.log("Message  recieve data ", msg);
      console.log(ChatMain);

      const user = JSON.parse(localStorage.getItem("user"));
      console.log(ChatBoxDetails._id);
      if (localStorage.getItem("NewId") === msg.data._id) {
        let newarr2 = [];
        msg.data.messages?.forEach((item) => {
          newarr2.push({
            message: item?.text ? item?.text : item?.offer,
            messageType: item?.messageType,
            sender: user.doc?._id !== item?.sender ? true : false,
            listingImg: msg?.data?.listing?.images[0],
            chatId: msg.data?._id,
            messageId: item?._id,
            title: msg?.data?.listing?.title,
            offerStatus: item.offerStatus,
            offerAmount: item.purchaseOffer?.offerAmount,
            avator:
              user.doc?._id === item?.sender
                ? msg.data?.seller?.profileImage
                : msg.data?.buyer?.profileImage,
            ID: item?._id,
          });
        });
        console.log(newarr2);
        setUserChat({
          messages: newarr2.reverse(),
        });
      }
    });
  };

  const SendOffer = (Item) => {
    console.log(Item);
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${url}/offer/createPurchaseOffer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        seller: ChatBoxDetails?.seller?._id,
        buyer: user?.doc._id,
        item: ChatBoxDetails?._id,
        offerAmount: Offer,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Send Offer", response);
        if (response.message === "Success") {
          console.log(response);
          socket.emit("newMessage", {
            id: SingleChat?._id,
            messageSender:
              SingleChat?.seller?._id === user?.doc?._id ? "seller" : "buyer",
            sender: user?.doc?._id,
            purchaseOffer: response.doc?._id,

            messageType: 2,
          });
          setUserChat({
            ...userChat,
            messages: [
              {
                messageType: 2,
                sender: false,
                listingImg: ChatBoxDetails?.listing?.images[0],
                chatId: ChatBoxDetails?._id,
                messageId: ChatBoxDetails?._id,
                title: ChatBoxDetails?.listing?.title,
                offerStatus: response?.doc?.status,
                offerAmount: Offer,
              },
              ...userChat?.messages,
            ],
          });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openOfferModal = () => {
    setOfferModalBool(true);
  };

  const handleChange = (e) => {
    setChatText(e.target.value);
  };

  const sendUserChat = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (chatText) {
      socket.emit("newMessage", {
        id: SingleChat?._id,
        messageSender:
          SingleChat?.seller?._id === user?.doc?._id ? "seller" : "buyer",
        messageType: 0,
        text: chatText,
        sender: user?.doc?._id,
      });
    }

    setUserChat({
      ...userChat,
      messages: [
        {
          message: chatText,
          messageType: 0,
          sender: false,
          listingImg: ChatBoxDetails?.listing?.images[0],
          chatId: ChatBoxDetails?._id,
          messageId: ChatBoxDetails?._id,
          title: ChatBoxDetails?.listing?.title,
          // offerStatus: item.offerStatus,
          // offerAmount: item.purchaseOffer?.offerAmount,
        },
        ...userChat?.messages,
      ],
    });
    setChatText("");
  };

  const makeOffer = (e) => {
    const offer = "$" + e + " is my Offer for " + userChat?.productName;
    SendOffer(location.state);
    console.log(offer);
  };

  const socketNew = () => {
    console.log("IDMain");

    socket.on("messageSent", (msg) => {
      console.log("Message  recieve data ", msg);
      // console.log("ChatBoxID ", ChatBoxID);
      // console.log("msg?.data?._id", msg?.data?._id);
      console.log(SingleChat._id);
      const user = JSON.parse(localStorage.getItem("user"));
      if (localStorage.getItem("NewId") === msg?.data?._id) {
        let newarr2 = [];
        msg?.data?.messages?.forEach((item) => {
          newarr2.push({
            message: item?.text ? item?.text : item?.offer,
            messageType: item?.messageType,
            sender: user.doc?._id !== item?.sender ? true : false,
            listingImg: msg?.data?.listing?.images[0],
            chatId: msg.data?._id,
            messageId: item?._id,
            title: msg?.data?.listing?.title,
            offerStatus: item.offerStatus,
            offerAmount: item.purchaseOffer?.offerAmount,
            avator:
              user.doc?._id === item?.sender
                ? msg.data?.seller?.profileImage
                : msg.data?.buyer?.profileImage,
            ID: item?._id,
          });
        });
        // console.log(newarr2);
        setUserChat({
          messages: newarr2.reverse(),
        });
      }
    });
  };

  const cardAcceptResponse = (chat, messageId) => {
    // console.log("Resssssss", chat, messageId);

    socket.emit("acceptOfferRequest", {
      id: chat,
      messageId: messageId,
    });
  };

  return (
    <Grid
      item
      md={8}
      xs={12}
      height={"80vh"}
      className={classes.chatContainer}
      overflow={"hidden"}
    >
      {EmptyScreen && (
        <>
          <Grid
            container
            xs={12}
            height={"80vh"}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <Grid
                justifyContent="center"
                alignItems="center"
                xs={12}
                display="flex"
              >
                <Avatar
                  src={ProfilePic}
                  sx={{ width: 70, height: 70, alignItems: "center" }}
                />
              </Grid>
              <Grid
                justifyContent="center"
                alignItems="center"
                xs={12}
                display="flex"
              >
                <h3>Welcome, {fNameItuIni}</h3>
              </Grid>
              <Grid
                justifyContent="center"
                alignItems="center"
                xs={12}
                display="flex"
              >
                <p>Please select a chat to start messaging.</p>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
      {!EmptyScreen && (
        <>
          <Grid
            container
            className={classes.chatHeading}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item paddingX={3}>
              <Grid container>
                <Grid item>
                  <div className={`margin-top-5 ${cardStyles.flex}`}>
                    <div className={cardStyles.flex0}>
                      <Avatar
                        alt={Details?.username}
                        src={Details?.profileImage}
                      />
                    </div>
                    <div className={cardStyles.flex1}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography
                            variant="caption"
                            className={` bold no-wrap`}
                          >
                            {Details?.username}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ReactStars
                            count={5}
                            value={5}
                            size={15}
                            isHalf={true}
                            activeColor="#ffd700"
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography>{SingleChat?.listing?.title}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption">
                            ad posted: 22/11/2020 4:45
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            {SingleChat?.seller?._id !== LoginUser?.doc?._id ? (
              <Grid item paddingX={3}>
                <Button
                  disableElevation
                  variant="contained"
                  onClick={openOfferModal}
                >
                  Make offer
                </Button>
              </Grid>
            ) : null}
          </Grid>
          <Grid
            container
            className={classes.chat}
            direction={"column-reverse"}
            justifyContent="flex-start"
            flexWrap={"nowrap"}
            paddingX={3}
            overflow={"hidden auto"}
          >
            <Grid item marginY={2}>
              <TextField
                value={chatText}
                onChange={handleChange}
                fullWidth
                size="medium"
                placeholder="Enter your message here"
                padding="10px"
                InputProps={{
                  className: classes.chatInput,
                  inputProps: { className: classes.chatTextField },
                  endAdornment: (
                    <div className={classes.chatTextIconsDiv}>
                      <IconButton className={`${classes.chatTextIcons}`}>
                        <img src={EMOJI_ICON} />
                      </IconButton>
                      <IconButton className={`${classes.chatTextIcons}`}>
                        <img src={PAPER_CLIP_ICON} />
                      </IconButton>
                      <IconButton
                        className={`${classes.chatTextIcons} ${classes.senderIcon}`}
                        onClick={sendUserChat}
                      >
                        <img src={SENDER_ICON} />
                      </IconButton>
                    </div>
                  ),
                }}
              />
            </Grid>
            {userChat?.messages?.map((e, i) => (
              <Grid
                item
                key={i}
                align={e.sender ? "left" : "right"}
                marginY={2}
              >
                <Grid
                  container
                  direction={e.sender ? "row" : "row-reverse"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <Grid
                      container
                      alignItems={"center"}
                      flexWrap={"nowrap"}
                      direction={e.sender ? "row" : "row-reverse"}
                      spacing={2}
                      maxWidth={"80%"}
                    >
                      <Grid item>
                        <Avatar
                          alt={e.sender ? Details?.username : Details?.username}
                          src={profileIcon}
                        />
                      </Grid>
                      <Grid item>
                        <Grid item>
                          {e?.messageType === 0 && (
                            <Paper
                              className="padding-10"
                              style={{
                                backgroundColor: e.sender ? "#fff" : "#6082B6",
                                width: "100%",
                                padding: "10px",
                              }}
                            >
                              <Typography
                                variant="caption"
                                color={e.sender ? "black" : "white"}
                              >
                                {e?.message}
                              </Typography>
                            </Paper>
                          )}
                          {e?.messageType === 2 && (
                            <Paper
                              className="padding-10"
                              style={{
                                backgroundColor: e.sender ? "#fff" : "#6082B6",
                              }}
                            >
                              <Card sx={{ minWidth: "100%", maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={ImageUrl + e?.listingImg}
                                  alt="green iguana"
                                />

                                <CardActions>
                                  <Typography
                                    textAlign={"left"}
                                    variant="h5"
                                    component="div"
                                  >
                                    {e?.title}
                                  </Typography>
                                </CardActions>
                                <CardActions>
                                  <Typography
                                    variant="h6"
                                    color="text.secondary"
                                  >
                                    Price : {e?.offerAmount}$
                                  </Typography>
                                </CardActions>
                                {!e.sender && e.offerStatus === "pending" && (
                                  <CardActions>
                                    <Typography textAlign={"left"}>
                                      You have send a new offer :{" "}
                                      {e?.offerAmount}${" "}
                                    </Typography>
                                  </CardActions>
                                )}
                                {!e.sender && e?.offerStatus === "accepted" && (
                                  <CardActions>
                                    <Typography textAlign={"left"}>
                                      Your offer Accepted <CheckIcon />
                                    </Typography>
                                  </CardActions>
                                )}
                                {e.sender && (
                                  <CardActions>
                                    {e?.offerStatus === "pending" && (
                                      <>
                                        <Button
                                          variant="contained"
                                          size="small"
                                          onClick={() => {
                                            cardAcceptResponse(
                                              e?.chatId,
                                              e?.messageId
                                            );
                                            // dispatch(setChatBoxId(e?.chatId));
                                          }}
                                        >
                                          Accept
                                        </Button>
                                        <Button size="small">Decline</Button>
                                      </>
                                    )}

                                    {e?.offerStatus === "accepted" && (
                                      <CardActions>
                                        <Typography textAlign={"left"}>
                                          you have accepted offer :{" "}
                                          {e?.offerAmount}${" "}
                                        </Typography>
                                      </CardActions>
                                    )}
                                  </CardActions>
                                )}
                              </Card>
                            </Paper>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <OfferModal
        open={offerModalBool}
        setOpen={setOfferModalBool}
        makeOffer={makeOffer}
        setOffer={setOffer}
        offer={Offer}
      />
    </Grid>
  );
}

export default ChatBox;
