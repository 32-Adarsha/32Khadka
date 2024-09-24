import {Injectable, signal, WritableSignal} from '@angular/core';
import axios from "axios";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {resolve} from "@angular/compiler-cli";
import {single} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  randomQuote:WritableSignal<string> = signal('')
  author:WritableSignal<string> = signal('')
  url = 'https://api.quotable.io/quotes/random'
  isLoaded:WritableSignal<boolean> = signal(false)
  constructor() {
    this.getRandomQuote()
  }

  getRandomQuote(){
    axios.get(this.url, {
      params:{
        limit:1,
        maxLength:60,
        minLength:40,
        tags:"Famous Quotes",
        author:"",
        authorId:"",
      },
    }).then(
      (response) => {
        console.log(response)
        console.log(response.data[0].content);
        console.log(response.data[0].author);
        this.randomQuote.set(response.data[0].content)
        this.author.set(response.data[0].author)
      }
    ).catch((error) => {
      console.log(error)
    });
  }
}
