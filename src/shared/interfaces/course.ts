import { lieux } from "./lieux";

 
export interface ICourse {
  image:string | null;
  nom:string | null;  
  stackTechnique:string | null;  
  dates:string | null; 
  titre: string | null; 
  nombrePlaces: number; 
  tarif: string | null;
  lieux: lieux[]; 
}