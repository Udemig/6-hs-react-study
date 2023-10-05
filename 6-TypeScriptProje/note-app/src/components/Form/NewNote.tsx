import React from "react";
import NoteForm from "./NoteForm";
import { NoteData } from "../../types";

export interface NewNoteProps{
  onSubmit:(data:NoteData)=>void;
}

const NewNote = (props:NewNoteProps) => {
  const {onSubmit}=props
  return (
    <>
      <h1 className="my-4">Yeni Not Ekle</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
};

export default NewNote;
