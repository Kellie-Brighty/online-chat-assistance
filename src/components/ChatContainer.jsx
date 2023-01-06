import React from "react";
import { makeStyles } from "@material-ui/core";
import ChatContainerHeader from "./ChatContainerHeader";
import MessagesContainer from "./messages components/MessagesContainer";
import FooterContainer from "./FooterContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    boxShadow: "0px 8px 24px 2px rgba(0, 0, 0, 0.08)",
    width: 500,
    height: 500,
    borderRadius: 10,
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex'
  },
  chat_header: {
    background: "blue",
  },
  chat_footer: {},
}));

const ChatContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ChatContainerHeader />
      <MessagesContainer />
      <FooterContainer />
    </div>
  );
};

export default ChatContainer;
