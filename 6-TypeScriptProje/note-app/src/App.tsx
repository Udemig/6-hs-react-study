import React, { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNote from "./components/Form/NewNote";
import { Container } from "react-bootstrap";
import { NoteData, RawNote, Tag } from "./types";
import { useLocalStorage } from "./useLocalStorage";
import { v4 } from "uuid";
import MainPage from "./MainPage";
import Layout from "./components/NoteDetail/Layout";
import NoteDetail from "./components/NoteDetail/NoteDetail";
import EditNote from "./components/Form/EditNote";
const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);
  //console.log("asd", notes);

  //noteların etiketlendrindeki id değerleri ile
  //eşleşen etiketleri alyıoruz
  //

  const noteWithTags = useMemo(() => {
    return notes.map((note) => ({
      ...note,
      tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
    }));
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prev) => {
      return [
        ...prev,
        { ...data, id: v4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };


  function onUpdateNote(id:string,{tags,...data}:NoteData){
    setNotes((prev)=>{


      return prev.map((note)=>{
        if(note.id === id){
          return{
            ...note,
            ...data,
            tagIds:tags.map((tag)=>tag.id)
          }
        }else{
          return note
        }
      })
    })
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={<MainPage notes={noteWithTags} availableTags={tags} />}
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              addTag={addTag}
              availableTags={tags}
            />
          }
        />

        <Route path="/:id" element={<Layout notes={noteWithTags} />}>
          <Route index element={<NoteDetail onDelete={onDeleteNote} />} />
          <Route path="edit" element={<EditNote 
          
          onAddTag={addTag}
          availableTags={tags}
          onUpdate={onUpdateNote}/>} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Container>
  );
};

export default App;
