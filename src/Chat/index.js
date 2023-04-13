import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import GeneralModal from "./GeneralModal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  IconButton,
  Divider,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { url } from "../environment";
import HeaderTwo from "../components/common/HeaderTwo";

import Footer from "../components/common/footer/Footer";

import { makeStyles } from "@mui/styles";
import { faker } from "@faker-js/faker";
import profileIcon from "../assets/Icons/profileIcon.png";
import ChatBox from "./ChatComponents/ChatBox";
import SearchIcon from "@mui/icons-material/Search";

const USER_CHAT_LIST = new Array(15).fill(null).map((e) => ({
  name: faker.name.findName(),
  productName: faker.commerce.productName(),
  // lastMessage: faker.lorem.sentence(5, 10),
  date: faker.date.recent(4),
  avatar: faker.image.avatar(),
}));

const USER_CHAT = {
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  senderName: faker.name.findName(),
  senderAvatar: faker.image.avatar(),
  productName: faker.commerce.productName(),

  messages: new Array(5).fill(null).map((e) => ({
    message: faker.lorem.sentence(5, 10),
    sender: faker.datatype.boolean(),
  })),
};
const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  flex1: {
    flex: 1,
  },
  flex0: {
    flex: 0,
  },
  chatContainer: {
    paddingY: "15px",
    paddingX: "0px !important",
    backgroundColor: "#F9FAFC",
    border: "1px solid #f1f1f1",
    borderRadius: "25px !important",
  },
  chat: {
    height: "85%",
    // width: '95%',
    paddingY: "15px",
  },
  chatHeading: {
    height: "15%",
    overflow: "hidden !important",
    paddingX: "0px !important",
    backgroundColor: "#F4F5F8  !important",
    border: "1px solid #f1f1f1  !important",
  },

  chatTextField: {
    paddingY: "15px !important",
  },
  chatInput: {
    fontSize: "12px !important",
    backgroundColor: "#fff",
    borderRadius: "25px !important",
    paddingY: "15px !important",
  },
  chatTextIconsDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chatTextIcons: {
    padding: "5px !important",
  },
  senderIcon: {
    backgroundColor: "rgb(96, 130, 182) !important",
    paddingLeft: "2px !important",
    paddingRight: "7px !important",
  },
}));

function ChatScreen() {
  const classes = useStyles();
  const [userChatList, setUserChatList] = useState([]);
  const [userChat, setUserChat] = useState([]);
  const [EmptyScreen, setEmptyScreen] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [ChatBoxID, setChatBoxID] = useState("");
  const [SingleChat, setSingleChat] = useState({});
  const location = useLocation();

  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  const textlimit = (text, count) => {
    if (text && text?.length > 0) {
      return (
        text && text?.slice(0, count) + (text?.length > count ? "..." : "")
      );
    }
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery("(max-width:960px)");

  const [messagesModalBool, setMessagesModalBool] = useState(false);
  const [ChatBoxDetails, setChatBoxDetails] = useState({});
  const [selectedChat, setSelectedChat] = useState(0);
  const [Details, setDetails] = useState({});

  const [userChatName, setUserChatName] = useState(userChatList[0]?.name);
  const openMessagesForThisChat = (i, e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    setChatBoxDetails(userChatList[i]);
    // setEmptyScreen(false);
    // console.log(false);
    // setSelectedChat(i);
    // console.log(userChatList[i]);
    // setSingleChat(userChatList[i]);
    // console.log(userChatList[i].messages);
    // console.log(userChatList);

    // if (user.doc._id === userChatList[i]?.id) {
    //   setDetails(userChatList[i]?.buyer);
    // } else {
    //   setDetails(userChatList[i]?.seller);
    // }
    if (fullScreen) {
      setMessagesModalBool(true);
    }
    getChatNew(e);
    setUserChatName(userChatList[i]?.name);
  };

  useEffect(() => {
    getChat(location.state);
    getAllMyChats();
  }, [location.state]);

  const getTimeStamp = (timestamp) => {
    const timeDifference = Date.parse(new Date()) - Date.parse(timestamp);
    let timeAgo;
    console.log(timeDifference, timestamp);
    if (timeDifference < 1000) {
      timeAgo = "Just now";
    } else if (timeDifference < 60000) {
      timeAgo = `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 3600000) {
      timeAgo = `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
      timeAgo = `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else {
      timeAgo = `${Math.floor(timeDifference / 86400000)} days ago`;
    }

    return <span>{timeAgo}</span>;
  };
  const getChat = (Item) => {
    console.log(Item);
    setEmptyScreen(true);
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${url}/chat/getChat`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        seller: Item?.sellerId,
        buyer: user?.doc._id,
        listing: Item?.id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Get Chat", response);
        if (response.message === "Success") {
          console.log(response?.doc?._id);
          setChatBoxID(response?.doc?._id);
          localStorage.setItem("NewId", response?.doc?._id);
          setChatBoxDetails(response?.doc);
          // setEmptyScreen(false)

          if (user.doc?._id === Item?.sellerId) {
            setSingleChat(response.doc);
            setDetails(response.doc?.buyer);
            let newarr2 = [];
            response.doc.messages?.forEach((item) => {
              newarr2.push({
                message: item.text,
                messageType: item.messageType,
                listingImg: response.doc?.listing?.images[0],
                title: response.doc?.listing?.title,
                offerStatus: item.offerStatus,
                chatId: response.doc?._id,
                messageId: item?._id,
                offerAmount: item.purchaseOffer?.offerAmount,
                avator:
                  user.doc?._id !== item?.sender
                    ? response.doc?.seller?.profileImage
                    : response.doc?.buyer?.profileImage,
                sender: user.doc?._id !== item.sender ? true : false,
              });
            });
            console.log(newarr2.reverse());
            setUserChat({
              messages: newarr2,
            });
          } else {
            setSingleChat(response.doc);
            setChatBoxID(response?.doc?._id);

            setDetails(response.doc?.seller);
            let newarr2 = [];
            response.doc.messages?.forEach((item) => {
              newarr2.push({
                message: item.text,
                messageType: item.messageType,
                listingImg: response.doc?.listing?.images[0],
                offerStatus: item.offerStatus,
                offerAmount: item.purchaseOffer?.offerAmount,
                chatId: response.doc?._id,
                messageId: item?._id,
                title: response.doc?.listing?.title,
                avator:
                  user.doc?._id !== item?.sender
                    ? response.doc?.seller?.profileImage
                    : response.doc?.buyer?.profileImage,
                sender: user.doc?._id !== item?.sender ? true : false,
              });
            });

            console.log(newarr2);

            setUserChat({
              messages: newarr2.reverse(),
            });
          }
          setEmptyScreen(false);
        } else {
          setEmptyScreen(true);
          console.log(SingleChat);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getChatNew = (Item) => {
    console.log(Item);
    setEmptyScreen(true);

    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${url}/chat/getChat`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        seller: Item?.seller?._id,
        buyer: Item?.buyer._id,
        listing: Item?.listing._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Get Chat", response);
        if (response.message === "Success") {
          console.log(response?.doc?._id);
          localStorage.setItem("NewId", response?.doc?._id);
          setChatBoxDetails(response?.doc);

          setChatBoxID(response.doc._id);
          if (user.doc?._id === Item?.sellerId) {
            setSingleChat(response.doc);
            setDetails(response.doc?.buyer);
            let newarr2 = [];
            response.doc.messages?.forEach((item) => {
              newarr2.push({
                message: item.text,
                messageType: item.messageType,
                listingImg: response.doc?.listing?.images[0],
                title: response.doc?.listing?.title,
                offerStatus: item.offerStatus,
                chatId: response.doc?._id,
                messageId: item?._id,
                offerAmount: item.purchaseOffer?.offerAmount,
                avator:
                  user.doc?._id !== item?.sender
                    ? response.doc?.seller?.profileImage
                    : response.doc?.buyer?.profileImage,
                sender: user.doc?._id !== item.sender ? true : false,
              });
            });
            console.log(newarr2.reverse());
            setUserChat({
              messages: newarr2,
            });
            setEmptyScreen(false);
          } else {
            setSingleChat(response.doc);
            setChatBoxID(response?.doc?._id);

            setDetails(response.doc?.seller);
            let newarr2 = [];
            response.doc.messages?.forEach((item) => {
              newarr2.push({
                message: item.text,
                messageType: item.messageType,
                listingImg: response.doc?.listing?.images[0],
                offerStatus: item.offerStatus,
                offerAmount: item.purchaseOffer?.offerAmount,
                chatId: response.doc?._id,
                messageId: item?._id,
                title: response.doc?.listing?.title,
                avator:
                  user.doc?._id !== item?.sender
                    ? response.doc?.seller?.profileImage
                    : response.doc?.buyer?.profileImage,
                sender: user.doc?._id !== item?.sender ? true : false,
              });
            });

            console.log(newarr2);

            setUserChat({
              messages: newarr2.reverse(),
            });
          }
          setEmptyScreen(false);
        } else {
          setEmptyScreen(true);
          console.log(SingleChat);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllMyChatsBuyer = () => {
    // setLoading(true)
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${url}/chat/buyerChats`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        buyer: user.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Get All Buyer Chat list", response);
        if (response.message === "Success") {
          console.log(response);
          // setSingleChat(response.doc);
          let Array = [];
          // if (user.doc._id === response.doc.seller._id) {
          response.doc?.map((item, index) => {
            Array.push({
              name:
                // user.doc?._id === item?.seller._id
                item.buyer?.username,
              // : item.seller?.username,
              productName: item.listing?.title,
              _id: item?._id,
              lastMessage: item?.messages[item?.messages?.length - 1]?.text,
              date: getTimeStamp(item?.createdDate),
              seller: item?.seller,
              messages: item?.messages,
              buyer: item?.buyer,
              avatar: item.buyer?.profileImage,
              // : item.seller?.profileImage,
            });
            // console.log();
            // if (item.listing._id === location.state.id) {
            //   setSelectedChat(index);
            //   console.log(index);
            // }
          });
          console.log(Array);
          setUserChatList(Array);

          // }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllMyChats = () => {
    // setLoading(true)
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${url}/chat/getAllMyChats`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user: user.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Get All Chat list", response);
        if (response.message === "Success") {
          console.log(response);
          // setSingleChat(response.doc);
          let Array = [];
          // if (user.doc._id === response.doc.seller._id) {
          response.doc?.map((item, index) => {
            Array.push({
              name:
                user.doc?._id === item?.seller._id
                  ? item.buyer?.username
                  : item.seller?.username,
              productName: item.listing?.title,
              listing: item.listing,
              _id: item?._id,
              lastMessage: item?.messages[item?.messages?.length - 1].text,
              date: getTimeStamp(item?.createdDate),
              seller: item?.seller,
              messages: item?.messages,
              buyer: item?.buyer,
              avatar: item.buyer?.profileImage,
              // : item.seller?.profileImage,
            });
            // console.log();
            // if (item?.listing?._id === location?.state.id) {
            //   setSelectedChat(index);
            //   console.log(index);
            // }
          });
          setUserChatList(Array);

          console.log(Array);
          // }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllMyChatsSeller = () => {
    // setLoading(true)
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${url}/chat/sellerChats`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        seller: user.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Get All Seller Chat list", response);
        if (response.message === "Success") {
          console.log(response);
          // setSingleChat(response.doc);
          let Array = [];
          // if (user.doc._id === response.doc.seller._id) {
          response.doc?.map((item, index) => {
            Array.push({
              name:
                user.doc?._id === item?.seller._id
                  ? item.buyer?.username
                  : item.seller?.username,
              productName: item.listing?.title,
              _id: item?._id,
              lastMessage: item?.messages[item?.messages?.length - 1].text,
              date: getTimeStamp(item?.createdDate),
              seller: item?.seller,
              messages: item?.messages,
              buyer: item?.buyer,
              avatar:
                // user.doc?._id === item?.seller?._id
                item.buyer?.profileImage,
              // : item.seller?.profileImage,
            });
            // console.log();
            // if (item?.listing?._id === location?.state?.id) {
            //   setSelectedChat(index);
            //   console.log(index);
            // }
          });
          setUserChatList(Array);
          console.log(Array);
          // }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <TopNav /> */}
      {/* <main className="home-1"> */}
      <HeaderTwo />

      <Grid container paddingTop={5} marginTop={7}>
        <Grid item md={4} xs={12} height={"80vh"} overflow={"hidden auto"}>
          <Grid container direction={"column"} p={3} spacing={3}>
            <Grid item paddingY={1} xs={12}>
              <Typography variant="h6">Messages List</Typography>
            </Grid>
            <Box sx={{ width: "100%" }}>
              <Tabs>
                <div className="tab-sharedN ">
                  <TabList
                    className="nav nav-tabs row"
                    id="myTab"
                    style={{ justifyContent: "center" }}
                  >
                    <Tab md={4} onClick={getAllMyChats}>
                      <div className="nav-link theme-btn radius-rounded">
                        <span>
                          <BiUser />
                        </span>{" "}
                        All Chats{" "}
                      </div>
                    </Tab>
                    <Tab md={4} onClick={getAllMyChatsBuyer}>
                      <div className="nav-link theme-btn radius-rounded">
                        <span>
                          <BiUser />
                        </span>{" "}
                        Buyer
                      </div>
                    </Tab>
                    <Tab md={4} onClick={getAllMyChatsSeller}>
                      <div
                        className="nav-link theme-btn radius-rounded"
                        style={{ backgroundColor: "none" }}
                      >
                        <span>
                          <BiUser />
                        </span>{" "}
                        Seller
                      </div>
                    </Tab>
                    ,
                  </TabList>
                </div>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </Tabs>
            </Box>

            <Grid item>
              <Divider />
            </Grid>
            <Grid item paddingY={3} xs={12}>
              <TextField
                value={searchText}
                onChange={handleSearchTextChange}
                fullWidth
                placeholder="Search"
                size="small"
                // color="secondary"
                InputProps={{
                  endAdornment: (
                    // <IconButton>
                    <SearchIcon color={"disabled"} />
                    // </IconButton>
                  ),
                }}
              />
            </Grid>

            {userChatList
              ?.filter((e) =>
                e.productName?.toLowerCase().includes(searchText?.toLowerCase())
              )
              ?.map((e, i) => (
                <Grid item xs={12}>
                  <Button
                    key={i}
                    // variant={selectedChat==i ? 'contained' : 'text'}
                    onClick={() => openMessagesForThisChat(i, e)}
                    // color={"secondary"}
                    fullWidth
                    style={
                      selectedChat == i
                        ? {
                            backgroundColor: "#F9FAFC",
                            border: "1px solid #f1f1f1",
                            borderRadius: "5px",
                            // padding: '10px',
                          }
                        : {}
                    }
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <div className={`${classes.flex}`}>
                          <div className={classes.flex0}>
                            <Avatar alt={e.productName} src={e.avatar} />
                          </div>
                          <div className={classes.flex1}>
                            <Grid container>
                              <Grid item xs={8} align={"left"} color={"black"}>
                                <Typography variant="body1">
                                  {textlimit(
                                    e?.productName ? e?.productName : "",
                                    15
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={4} align={"right"}>
                                <Typography
                                  variant="caption"
                                  color={"GrayText"}
                                >
                                  {/* {e.date.getDate() +
                                    "." +
                                    (e.date.getMonth() + 1) +
                                    "." +
                                    e.date.getFullYear()} */}
                                  {/* {e.date} */}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} align={"left"}>
                                <Typography
                                  variant="caption"
                                  color={"GrayText"}
                                >
                                  {textlimit(
                                    e?.lastMessage ? e?.lastMessage : "",
                                    20
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} align={"left"}>
                                <Typography
                                  variant="caption"
                                  color={"GrayText"}
                                >
                                  {textlimit(
                                    e?.name ? e?.name : "" + "asas",
                                    20
                                  )}
                                </Typography>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              ))}
          </Grid>
        </Grid>
        {!fullScreen && (
          <ChatBox
            {...{
              setSingleChat,
              setEmptyScreen,
              EmptyScreen,
              setDetails,
              ChatBoxDetails,
              Details,
              ChatBoxID,
              SingleChat,
              classes,
              userChat,
              setUserChat,
              userChatName,
            }}
          />
        )}
      </Grid>
      <GeneralModal
        open={messagesModalBool}
        setOpen={setMessagesModalBool}
        hasHeader={true}
        isResponsive={true}
      >
        <ChatBox
          {...{
            setSingleChat,
            setEmptyScreen,
            EmptyScreen,
            setDetails,
            Details,
            ChatBoxDetails,
            SingleChat,
            classes,
            userChat,
            ChatBoxID,
            setUserChat,
            userChatName,
          }}
        />
      </GeneralModal>
      {/* <Footer /> */}
      {/* </main> */}
    </>
  );
}

export default ChatScreen;
