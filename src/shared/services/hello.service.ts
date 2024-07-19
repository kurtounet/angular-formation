import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
// permet de creer une instance de HelloService
  constructor() { }

  saluer():string {
    return 'Bonjour Mostafa, tu vas bien';
  }
  addisionner(a:number, b:number):number {
    return a+b;
  }
  soustraire(a:number, b:number):number {
    return a-b;
  }
  multiplier(a:number, b:number):number {
    return a*b;
  }
}
