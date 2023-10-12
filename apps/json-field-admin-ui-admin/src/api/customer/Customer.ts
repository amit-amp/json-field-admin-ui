import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  settings: JsonValue;
  updatedAt: Date;
};
