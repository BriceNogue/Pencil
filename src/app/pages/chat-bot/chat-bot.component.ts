import { Component, OnInit, ViewChild } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Chat } from 'src/app/models/chat.model';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  title = 'WebSocketChatRoom';
  messages: String[] = [];
  disabled = true;
  newmessage: Chat;
  private stompClient : any;

  isActionDisabled: boolean = true;
  @ViewChild('mat-card-content') containerElement: { nativeElement: any; };

  constructor(){}

  ngOnInit() {
    this.connect();
    this.newmessage = new Chat();
  }

  ngAfterViewInit(): void {
    this.disableByScroll();
    //this.cdr.detectChanges();
  }

  disableByScroll(): void {
    if (this.containerElement) {
      const element = this.containerElement.nativeElement;
      this.isActionDisabled = !(
        element.scrollTop ===
        element.scrollHeight - element.clientHeight
      );
    } else {
      this.isActionDisabled = true;
    }
  }

  onScrollContainer(): void {
    this.disableByScroll();
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.messages = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/testchat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/start/initial', function(hello: any){
        console.log(JSON.stringify(hello.body));
        _this.showMessage(JSON.stringify(hello.body));
      });
   });
  }

  sendMessage() {
    this.stompClient.send(
      '/current/resume',
      {},
      JSON.stringify(this.newmessage)
    );
    this.newmessage.msg = "";
  }

  showMessage(message: string) {
    this.messages.push(message);
  }

}
