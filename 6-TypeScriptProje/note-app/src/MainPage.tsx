import React, { useMemo, useState } from "react";
import {
  Button,
  Col,
  Row,
  Form,
  Card,
  CardBody,
  Stack,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "./types";

type NoteType = {
  id: string;
  title: string;
  tags: Tag[];
};

type MainProps = {
  availableTags: Tag[];
  notes: NoteType[];
};

const MainPage = ({ notes, availableTags }: MainProps) => {
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      //notun başlığı arama metni içeriyorsa ilgili başlıkları döndür
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLocaleLowerCase())) &&
        //eğer hiçbir etiket seçilmediyse veya notun etiketlerinden herbiri
        //seçilen etiketlerden biriyle eşleşiyorsa every seçilen her etiket için
        //some() metoud çalıştırır notun etiketlreinden en az biri eşleşiyormu kontrol eder
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <>
      <Row>
        <Col>
          <h1>Notlar</h1>
        </Col>

        <Col className="d-flex justify-content-end">
          <Link to={"/new"}>
            <Button>Oluştur</Button>
          </Link>
        </Col>
      </Row>

      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(tags) =>
                  setSelectedTags(
                    tags.map((tag) => ({
                      id: tag.value,
                      label: tag.label,
                    }))
                  )
                }
                options={availableTags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/*Liste*/}
      <Row className="mt-4 g-3" xs={1} sm={2} lg={3} xl={4}>
        {filteredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MainPage;

function NoteCard({ id, title, tags }: NoteType) {
  return (
    <Card as={Link} to={`/${id}`} className="h-100 text-decoration-none">
      <CardBody>
        <Stack
          gap={2}
          className="align-items-center justify-content-between h-100"
        >
          <span>{title}</span>
          {tags.length > 0 && (
            <Stack gap={2}>
              {tags.map((tag, i) => (
                <Badge key={i} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
