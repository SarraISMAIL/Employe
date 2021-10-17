import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-with-user',
  templateUrl: './chat-with-user.component.html',
  styleUrls: ['./chat-with-user.component.css']
})
export class ChatWithUserComponent implements OnInit {
  // injection service !!!
  id;
  route: any;
  constructor() { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

}
