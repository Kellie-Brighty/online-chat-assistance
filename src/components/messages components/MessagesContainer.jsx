import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { GlobalContext } from "../../store/Context";
import Lottie from "lottie-react";
import LoadingAnime from "../../animations/chat_loading.json";
import { generateString } from "../../store/helper";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexBasis: 230,
    padding: 20,
    overflowY: "scroll",
  },
  chat: {},
  own: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  no_own: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  me: {
    background: theme.palette.secondary.main,
    margin: "10px 0px",
    padding: 10,
    borderRadius: 4,
    maxWidth: 300,
    color: "#777",
  },
  friend: {
    background: theme.palette.primary.main,
    margin: "10px 0px",
    padding: 10,
    borderRadius: 4,
    maxWidth: 300,
    color: "#fff",
  },
  loading_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lottie_styles: {
    width: 100,
  },
}));

const MessagesContainer = () => {
  const classes = useStyles();
  const { globalChats, setGlobalChats } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      fetch("http://localhost:3002/introduction", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          const message = {
            text: data.message,
            sender: "bot",
            id: generateString(4),
          };
          setLoading(false);
          setGlobalChats([...globalChats, message]);
        });
    } catch (err) {
      console.log("Error>>>", err.message);
      setLoading(false);
    }
  }, []);

  return (
    <div className={classes.container}>
      {/* // <div className={classes.loading_container} >
        //   <Lottie
        //     animationData={LoadingAnime}
        //     loop={true}
        //     className={classes.lottie_styles}
        //   />
        // </div> */}

      {globalChats.map((chats, i) => (
        <div
          key={chats.id}
          className={chats.sender === "me" ? classes.own : classes.no_own}
        >
          <p className={chats.sender === "me" ? classes.me : classes.friend}>
            {chats.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MessagesContainer;
