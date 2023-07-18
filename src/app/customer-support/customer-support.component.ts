import { Component, OnInit } from '@angular/core';
import { ChatWithBot, ResponseModel } from './models';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
chatConversation: ChatWithBot[]=[];
response!: ResponseModel | undefined;
    promptText = '';
    showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkResponse() {
    this.pushChatContent(this.promptText,'You','person');
    // this.invokeGPT();
  }


  pushChatContent(content:string, person:string, cssClass:string) {
    const chatToPush: ChatWithBot = { person:person, response:content, cssClass:cssClass};
    this.chatConversation.push(chatToPush);
  }


  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }
}
