import { lieux } from "./lieux";

 
export interface ICourse {
  image:string; 
  nom:string;  
  stackTechnique:string;  
  dates:string; 
  titre:string;  
  nombrePlaces: number; 
  tarif:string;
  lieux: lieux[]; 
}