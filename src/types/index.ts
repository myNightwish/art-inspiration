export interface LoginForm {
  username: string;
  password: string;
}
export type MessageType = "success" | "warning" | "info" | "error";

export interface Task {
  title: string;
  description: string;
  price: number;
}

export interface createTask extends Task {
  type: string;
  startLocation: string;
  endLocation: string;
  price: number;
}
