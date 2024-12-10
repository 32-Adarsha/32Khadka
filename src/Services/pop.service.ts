import { Injectable } from '@angular/core';
import {PopModel} from "../model/pop-model";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  popWindowHolder :PopModel[] = [

  ]
  constructor() {

  }
}
