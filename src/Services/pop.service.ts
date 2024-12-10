import {Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {PopModel} from "../model/pop-model";
import {BigCertificateComponent} from "../app/components/certificateService/big-certificate/big-certificate.component";
import {DisplaySettingComponent} from "../app/components/display-setting/display-setting.component";
import {GuideComponent} from "../app/components/guide/guide/guide.component";


@Injectable({
  providedIn: 'root'
})
export class PopService {
  currentSelection :WritableSignal<number> = signal(1)
  vis = false;
  popWindowHolder :PopModel[] = [
    new PopModel("Test" , BigCertificateComponent , 0),
    new PopModel( "Setting" , DisplaySettingComponent , 1),
    new PopModel( "Guide" , GuideComponent , 2),
  ]
  constructor() {

  }

  changeSelection(index:number){
    this.currentSelection.set(index)
  }
}
