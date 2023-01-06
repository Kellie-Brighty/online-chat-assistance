import React from "react";
import { makeStyles } from "@material-ui/styles";
import ChatAnime from "../animations/chat_anime.json";
import Lottie from "lottie-react";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.white,
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.main,
    flex: 1
  },
  inner_felx: {
    borderBottom: '0.5px solid #ccc',
    width: '100%',
    display: "flex",
    justifyContent: "center",
  },
  lottie_styles: {
    width: 250
  }
}));

const ChatContainerHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.inner_felx} >
        <Lottie
          animationData={ChatAnime}
          loop={true}
          className={classes.lottie_styles}
        />
      </div>
    </div>
  );
};

export default ChatContainerHeader;
