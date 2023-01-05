import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    try {
      fetch("http://localhost:3002/introduction", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data.message));
    } catch (err) {
      console.log("Error>>>", err.message);
    }
  }, []);

  return (
    <div>
      <div>App</div>
    </div>
  );
};

export default App;
