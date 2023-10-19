import { Field as TField } from "../api/field/Field";

export const FIELD_TITLE_FIELD = "id";

export const FieldTitle = (record: TField): string => {
  return record.id?.toString() || String(record.id);
};
