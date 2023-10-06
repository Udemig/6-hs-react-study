import React from "react";
import { NoteData, Tag } from "../../types";
import { useNote } from "../NoteDetail/Layout";
import NoteForm from "./NoteForm";

type EditProps = {
  onUpdate: (id: string, data: NoteData) => void;

  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({ onAddTag, onUpdate, availableTags }: EditProps) => {
  const note = useNote();
  return (
    <div>
      <h1>Notu Düzenle</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onUpdate(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default EditNote;
