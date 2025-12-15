export const STRUCTURE_ENTITY = {
  SECTION: "section",
  ROW: "row",
  COLUMN: "column",
  COLUMN_ROW: "column_row",
  CANVAS: "canvas",
} as const;

export type StructureType =
  (typeof STRUCTURE_ENTITY)[keyof typeof STRUCTURE_ENTITY];

export type BaseEntity<T extends StructureType> = {
  id: string;
  type: T;
  settings?: Record<string, any>;
  children?: BaseEntity<StructureType>[];
};

export interface ColumnRowEntity
  extends BaseEntity<typeof STRUCTURE_ENTITY.COLUMN_ROW> {
  component: string;
  props: Record<string, any>;
}

export interface ColumnEntity
  extends BaseEntity<typeof STRUCTURE_ENTITY.COLUMN> {
  children: ColumnRowEntity[];
}

export interface RowEntity extends BaseEntity<typeof STRUCTURE_ENTITY.ROW> {
  settings: {
    gap: number;
    layout: any[];
    numOfColumns: number;
  };
  children: ColumnEntity[];
}

export interface SectionEntity
  extends BaseEntity<typeof STRUCTURE_ENTITY.SECTION> {
  children: RowEntity[];
}

export interface CanvasEntity
  extends BaseEntity<typeof STRUCTURE_ENTITY.CANVAS> {
  children: SectionEntity[];
}