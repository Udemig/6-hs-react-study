import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate=useNavigate()
  //Classın yani Modelin örneğini oluştruma
  const model = new AddPostModel();
  //console.log(model)
  //statenin ilk değerini modele eşitledik
  const [form, setForm] = useState(model.state);
  //console.log(form)
  const onInputChange = (key, e) => {
    /**
     * setForm metodunu state güncellemek için çağırdık
     * içerisinde spread operatör yarıdmı ile tüm form  objesini aldık
     * daha sonra köşeli parantez ile bir obje keyi gelecenii belirttik
     * ve keye karışık yine dışardan kelen vallueyi ekledik
     */
    setForm({ ...form, [key]: e.target.value });
  };
  //console.log(form)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text) {
      alert("Tüm Doldurunuz");
      return;
    }
    // console.log(form)
    axios
      .post("http://localhost:3005/posts",form)
      .then((res) => navigate('/'))
      .catch((error) => console.log(error));
  };
  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;
