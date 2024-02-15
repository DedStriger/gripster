export type GrColor = "red" | "blue" | "green" | undefined;

export type GR = { count: number; color: GrColor };
export type GRKind = "gr" | "grPro";

export type PaymentError =
  | {
      place:
        | "email"
        | "phone"
        | "city"
        | "secondName"
        | "firstName"
        | "fatherName"
        | "house"
        | "street"
        | "apartment"
        | "common";
      text: string;
    }
  | undefined;

export enum PaymentState {
  Form,
  Success,
  Error,
}
