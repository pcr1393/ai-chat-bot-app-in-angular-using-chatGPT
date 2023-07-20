import { Component, OnInit } from '@angular/core';
import { ChatWithBot, ResponseModel } from './models';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
chatConversation: ChatWithBot[]=[{
  person: 'bot',
  response: 'Hello, I am WINDA. How can I help you today?',
  cssClass: 'bot',
  timestamp: (new Date()).toString()
}
];
response!: ResponseModel | undefined;
    promptText = '';
    showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkResponse() {
    this.pushChatContent(this.promptText,'You','person');
    this.promptText = '';
    // this.invokeGPT();
  }


  pushChatContent(content:string, person:string, cssClass:string) {
    const chatToPush: ChatWithBot = { person:person, response:content, cssClass:cssClass, timestamp: (new Date()).toString()};
    this.chatConversation.push(chatToPush);
    this.showSpinner = true;
    setTimeout(() => {
      this.chatConversation.push({
        person: 'bot',
        response: 'Here is a list of transactions that you asked G21345, G43433, G766673',
        cssClass: 'bot',
        timestamp: (new Date()).toString()
      });
      this.showSpinner = false;
    }, 1000);
  }


  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }
}
