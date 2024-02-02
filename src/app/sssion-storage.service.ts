import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SssionStorageService {
userId:string='';
  constructor() { }
  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const storedValue = sessionStorage.getItem(key);
    
    return storedValue ? JSON.parse(storedValue) : null;
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
