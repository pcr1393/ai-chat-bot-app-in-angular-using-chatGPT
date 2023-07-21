import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatWithBot, ResponseModel } from './models';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
  chatConversation: ChatWithBot[] = [{
    person: 'bot',
    response: 'Hello, I am WINDA. How can I help you today?',
    cssClass: 'bot',
    timestamp: (new Date()).toString()
  }
  ];
  mostAskedQuestions: string[] = [
    ' Give me all the past submitted transactions for the current user?',
    'Give me in flight transactions?',
    'What is VAAS9001?'
  ];
  converstationStarted: boolean = false;
  response!: ResponseModel | undefined;
  promptText = '';
  showSpinner = false;
  @Output() hideChat: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  checkResponse() {
    this.pushChatContent(this.promptText, 'You', 'person');
    this.promptText = '';
    // this.invokeGPT();
  }

  onQuestionClick(question: string): void {
    this.pushChatContent(question, 'You', 'person');
  }


  pushChatContent(content: string, person: string, cssClass: string) {
    this.converstationStarted = true;
    const chatToPush: ChatWithBot = { person: person, response: content, cssClass: cssClass, timestamp: (new Date()).toString() };
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
    }, 5000);
  }

  onHideChat(): void {
    this.hideChat.emit(true);
  }


  getText(data: string) {
    return data.split('\n').filter(f => f.length > 0);
  }
}
