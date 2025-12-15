import { nanoid } from "nanoid";
import {
  STRUCTURE_ENTITY,
  type ColumnRowEntity,
  type ColumnEntity,
  type RowEntity,
  type SectionEntity,
  type CanvasEntity,
} from "@/types/CanvasType";

const generateColumnRow = (): ColumnRowEntity => {
  return {
    id: nanoid(),
    type: STRUCTURE_ENTITY.COLUMN_ROW,
    component: "text",
    props: { text: "Sample Text" },
  };
};

const generateColumn = (): ColumnEntity => {
  const colRowCount = 1; //randomIntFromInterval(1, 5);
  return {
    id: nanoid(),
    type: STRUCTURE_ENTITY.COLUMN,
    settings: {
      width: 100 / 6,
    },
    children: Array.from({ length: colRowCount }, () => generateColumnRow()),
  };
};

const generateRow = (): RowEntity => {
  const columns = Array.from({ length: 6 }, () => generateColumn());

  return {
    id: nanoid(),
    type: STRUCTURE_ENTITY.ROW,
    settings: {
      gap: 5,
      layout: [],
      numOfColumns: 2,
    },
    children: columns,
  };
};

function generateSection(): SectionEntity {
  const rows = Array.from({ length: 1 }, () => generateRow());

  return {
    id: nanoid(),
    type: STRUCTURE_ENTITY.SECTION,
    settings: { data: "1" },
    children: rows,
  };
}

export function generateAppData(): CanvasEntity {
  return {
    id: nanoid(),
    type: STRUCTURE_ENTITY.CANVAS,
    children: [generateSection()],
  };
}
