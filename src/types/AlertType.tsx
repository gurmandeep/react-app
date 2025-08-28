export type AlertType = {
  type: string;
  message: string;
  close: () => void;
};
