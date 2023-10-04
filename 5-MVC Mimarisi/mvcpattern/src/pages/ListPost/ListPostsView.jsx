import React from 'react'
import PopUpController from '../../components/PopUp/PopUpController'
import Loading from '../../components/Loading';
const ListPostsView = ({ data,showPopUp,setShowPopUp,setUserName,userName }) => {
  return (
    <div className='container'>
      {!data && <Loading/>}
      {data.map((post) => (
        <div key={post.id}>
          <div className='post'>
            <div className='info'>
              <h3>{post.title}</h3>
              <p onClick={()=>{setShowPopUp(true);
                 setUserName(post.user)}}>{post.user}</p>
            </div>
            <p className='text'>{post.text}</p>
          </div>
        </div>
      ))}

     {showPopUp&& <PopUpController setShowPopUp={setShowPopUp} userName={userName}/>}

    </div>
  )
}

export default ListPostsView