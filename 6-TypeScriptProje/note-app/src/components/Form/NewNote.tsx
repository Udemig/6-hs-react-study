import React from "react";
import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../../types";

export type NewNoteProps ={
  onSubmit: (data: NoteData) => void;
  addTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>

const NewNote = (props: NewNoteProps) => {
  const { onSubmit, addTag, availableTags } = props;
  return (
    <>
      <h1 className="my-4">Yeni Not Ekle</h1>
      <NoteForm
        onSubmit={onSubmit}
        addTag={addTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
