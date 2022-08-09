import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PostOne from "./components/PostOne";
import Alert from "./components/Alert";
import "./App.css";

let noOfLikes = 0;
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const toggleSwitch = () => {
    // alert("Switch is toggled")
    if (mode === "light") {
      document.body.style.backgroundColor = "#21163a";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "#c6c6c6";
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [like, setLike] = useState(0);
  const likeClick = () => {
    noOfLikes++;
    setLike(noOfLikes);
  };
  const disLikeClick = () => {
    noOfLikes--;
    if (noOfLikes < 0) {
      noOfLikes = 0;
    }
    setLike(noOfLikes);
  };

  return (
    <>
      <Navbar mode={mode} toggleSwitch={toggleSwitch} />
      <Alert alert={alert} />
      <PostOne
        like={like}
        likeClick={likeClick}
        disLikeClick={disLikeClick}
        mode={mode}
      />
    </>
  );
}

export default App;
