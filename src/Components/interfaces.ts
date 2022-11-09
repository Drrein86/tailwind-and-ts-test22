export interface personProps {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: Country;
}

export enum Country {
  israel = "israel",
  maroco = "maroco",
  island = "island",
}

export interface Question {
  stage: number;
  question: string;
  resType: "boolean" | "full" | "checkBox";
}

export const Questions: Question[] = [
  { stage: 1, question: "כאן שאלה ראשונה", resType: "boolean" },
  {
    stage: 2,
    question: "כאן שאלה שנייה",
    resType: "full",
  },
  {
    stage: 3,
    question: "כאן שאלה שלישית",
    resType: "checkBox",
  },
];
