import { Field } from "@nestjs/graphql";

export type Field = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
