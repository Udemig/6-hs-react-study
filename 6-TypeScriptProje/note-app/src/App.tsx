import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNote from "./components/Form/NewNote";
import { Container } from "react-bootstrap";
import { NoteData } from "./types";

const App = () => {

const onCreateNote=(data:NoteData)=>{
  console.log(data)
}

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Ana Sayfa</h1>} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} />} />

        <Route path="/:id">
          <Route index element={<h1>Detay Sayfası</h1>} />
          <Route path="edit" element={<h1>Düzenleme</h1>} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Container>
  );
};

export default App;
