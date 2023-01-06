import React from "react";
import { makeStyles } from "@material-ui/styles";
import { FiSend } from "react-icons/fi";
import { useContext, useState } from "react";
import { GlobalContext } from "../store/Context";
import { generateString } from "../store/helper";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
  },
  input_box: {
    outline: "none",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    width: "85%",
    height: 35,
    borderRadius: 5,
    padding: "0px 10px",
    fontSize: 20,
  },
  send_container: {
    background: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    padding: 5,
  },
  send_icon: {
    fontSize: 25,
    color: "#777",
    cursor: "pointer",
  },
  form: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
  },
}));

const FooterContainer = () => {
  const classes = useStyles();
  const { globalChats, setGlobalChats } = useContext(GlobalContext);
  const [value, setValue] = useState("");

  const sendChat = async (e) => {
    e.preventDefault();

    const my_message = {
      text: value,
      sender: "me",
      id: generateString(4),
    };
    setGlobalChats([...globalChats, my_message]);

    try {
      fetch("http://localhost:3002", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          const message = {
            text: data.message,
            sender: "bot",
            id: generateString(4),
          };
          setGlobalChats([...globalChats, message]);
          console.log(globalChats);
        });
    } catch (err) {
      console.log(err.message);
    }
    setValue("");
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={sendChat}>
        <input
          type="text"
          className={classes.input_box}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={classes.send_container}>
          <button
            style={{ border: "none", background: "transparent" }}
            type="submit"
          >
            <FiSend className={classes.send_icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterContainer;
