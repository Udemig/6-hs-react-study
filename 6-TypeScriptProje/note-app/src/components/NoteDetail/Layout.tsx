import React from "react";
import { Note } from "../../types";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
type LayoutProps = {
  notes: Note[];
};

const Layout = ({ notes }: LayoutProps) => {
  const { id } = useParams();

  const note = notes.find((n) => n.id == id);

  if (!note) return <Navigate to={"/"} replace />;

  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Note>();
}

export default Layout;
