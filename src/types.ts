export type TVacancy = {
  company: string;
  vacancy: string;
  salary: number;
  status: TStatus;
  note: string;
};
export type TStatus = "Accept" | "Decline" | "Expectation";
