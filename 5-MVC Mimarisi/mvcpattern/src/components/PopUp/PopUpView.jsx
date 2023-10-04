import React from "react";
import Loading from "./../../components/Loading";
const PopUpView = ({ setShowPopUp, data, userName }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrapper">
          <h4>
            <span>{userName}</span> kullanıcısının gönderileri
          </h4>
          <button onClick={() => setShowPopUp(false)}>Kapat</button>
        </div>

        {data ? (
          data?.map((userPost) => (
            <div className="post">
              <h2>{userPost.title}</h2>
              <p>{userPost.text}</p>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default PopUpView;
