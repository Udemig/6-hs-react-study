import React, { FormEvent, useRef } from "react";
import { Form, Row, Stack, Col, Button } from "react-bootstrap";
import ReactSelect from "react-select";
import { NewNoteProps } from "./NewNote";

const NoteForm = ({ onSubmit }: NewNoteProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags:[]
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={3}>
        {/* Form Üst Kısım*/}
        <Row>
          {/*Form Başlık*/}
          <Col>
            <Form.Group>
              <Form.Label>Başlık</Form.Label>
              <Form.Control ref={titleRef} className="shadow" />
            </Form.Group>
          </Col>
          {/*Form Başlık*/}
          {/*Form Etiket*/}
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect className="shadow"></ReactSelect>
            </Form.Group>
          </Col>
          {/*Form Etiket*/}
        </Row>

        {/*Text İçeriği */}

        <Form.Group>
          <Form.Label>İçerik</Form.Label>

          <Form.Control
            ref={markdownRef}
            required
            as={"textarea"}
            className="shadow"
          />
        </Form.Group>

        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="submit">Kaydet</Button>
          <Button variant="secondary">İptal</Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
