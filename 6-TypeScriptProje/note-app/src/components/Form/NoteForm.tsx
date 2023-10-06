import React, { FormEvent, useRef, useState } from "react";
import { Form, Row, Stack, Col, Button } from "react-bootstrap";
import ReactSelect from "react-select/creatable";
import { NewNoteProps } from "./NewNote";
import { Tag } from "../../types";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NoteForm = ({
  onSubmit,
  addTag,
  title='',
  markdown='',
  availableTags,
  tags = [],
}: NewNoteProps) => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate(-1);
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
              <Form.Control
              defaultValue={title}
              ref={titleRef} className="shadow" />
            </Form.Group>
          </Col>
          {/*Form Başlık*/}
          {/*Form Etiket*/}
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                //selectin sahip olacağı değerler
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                //yenetiketoluştuğunda gerçeşecek islem
                onChange={(tags) =>
                  setSelectedTags(
                    tags.map((tag) => ({
                      id: tag.value,
                      label: tag.label,
                    }))
                  )
                }
                onCreateOption={(label) => {
                  const newTag: Tag = { id: v4(), label: label };
                  addTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                isMulti

                className="shadow"
              ></ReactSelect>
            </Form.Group>
          </Col>
          {/*Form Etiket*/}
        </Row>

        {/*Text İçeriği */}

        <Form.Group>
          <Form.Label>İçerik</Form.Label>

          <Form.Control
          defaultValue={markdown}
            ref={markdownRef}
            required
            as={"textarea"}
            className="shadow"
          />
        </Form.Group>

        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="submit">Kaydet</Button>
          <Button onClick={()=>navigate(-1)} variant="secondary">İptal</Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
