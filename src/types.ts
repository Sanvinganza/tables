export type TVacancy = {
  id?: string;
  company: string;
  vacancy: string;
  salary: number;
  status: TStatus;
  note: string;
};
export type TStatus = "Accept" | "Decline" | "Expectation";
