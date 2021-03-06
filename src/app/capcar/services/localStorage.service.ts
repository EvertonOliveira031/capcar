import {
  Injectable,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  loadLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  saveLocalStorage(key: string, value: any, type?: string): void {
    let storageSave: any;
    storageSave = JSON.parse(this.loadLocalStorage(key)) || [];
    if (key == "history") {
      storageSave.forEach(function (element, index) {
        if (value.placa === element.placa) {
          storageSave.splice(index, 1);
        };
      });
      storageSave.unshift(value);
      storageSave[0].tipo = type;
    } else {
      storageSave = value;
    }
    localStorage.setItem(key, JSON.stringify(storageSave));
  }
}
