import React, { useEffect, useState } from "react";
import PopUpView from "./PopUpView";
import axios from "axios";

const PopUpController = ({ setShowPopUp, userName }) => {
  //console.log(userName)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3005/posts?user=${userName}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <PopUpView setShowPopUp={setShowPopUp} userName={userName} data={data} />
  );
};

export default PopUpController;
