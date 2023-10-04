import React, { useEffect, useState } from "react";
import ListPostsView from "./ListPostsView";
import axios from "axios";

const ListPostsController = () => {
  //Post verilerinin tutulduğu state
  const [data, setData] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [userName, setUserName] = useState("");
  //API ye get isteği atılarak post verilerinin çekilmesi
  useEffect(() => {
    axios
      .get("http://localhost:3005/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    //verileri data şeklinde view tarafına aktarilir
    <ListPostsView
      userName={userName}
      setUserName={setUserName}
      data={data}
      showPopUp={showPopUp}
      setShowPopUp={setShowPopUp}
    />
  );
};
export default ListPostsController;
