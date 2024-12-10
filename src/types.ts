export type TVacancy = {
  _id: string;
  company: string;
  vacancy: string;
  salary: number;
  status: TStatus;
  note: string;
};
export type TStatus = "Accept" | "Decline" | "Expectation";
export type TEmptyVacancy = Omit<TVacancy, "_id">;
