import React from "react";
import { useNote } from "./Layout";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
type NoteDetailProps={
    onDelete:(id:string)=>void;
}
const NoteDetail = ({onDelete}:NoteDetailProps) => {
  const note = useNote();
  console.log("asdasd", note);

  return (
    <>
      <Row>
        <Col>
          <h1>{note.title}</h1>

          {note.tags.length > 0 && (
            <Stack direction="horizontal" gap={1} className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge>{tag.label}</Badge>
              ))}
            </Stack>
          )}
        </Col>

<Col>
<Stack  direction="horizontal" gap={2}>
    <Link to={`/${note.id}/edit`}>
    <Button>Düzenle</Button>
    </Link>

<Button variant="outline-danger" onClick={()=>onDelete(note.id)}>Sil</Button>
<Link to={'/'}>
<Button>İptal</Button>
</Link>
</Stack>
</Col>

      </Row>
    </>
  );
};

export default NoteDetail;
