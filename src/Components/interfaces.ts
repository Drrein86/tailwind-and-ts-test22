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