import {AfterViewInit, Injectable, OnInit, signal, WritableSignal} from '@angular/core';
import axios from "axios";
import {Observable} from "rxjs";
import {FeedBackMessage} from "../model/feedback-model";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiUrl = 'https://api.jsonbin.io/v3/b/66f34f52e41b4d34e43680fb/';
  allFeedback: WritableSignal <FeedBackMessage[]> = signal([]);
  constructor() {
    //this.getAllFeedback()
  }



  getAllFeedback(){
    axios.get(this.apiUrl+'latest/', {
      headers: {}
    }).then(
      (response) => {
        this.allFeedback.set( response.data.record);
        console.log(this.allFeedback());
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  postFeedback(){
    let fakeData :FeedBackMessage = {
      Message:"test",
      Name:"Name",
      Contact:"Test"
    }
    let newData:FeedBackMessage[] = this.allFeedback();
    newData.push(fakeData)
    this.allFeedback.set(newData);
    axios.put(this.apiUrl, this.allFeedback())
      .then(function (response) {

      })
      .catch(function (error) {

      });
  }





}
