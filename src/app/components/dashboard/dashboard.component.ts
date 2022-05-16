import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
  getMessage(){
    this.messageService.getMessage().subscribe((message: any)=>{
      console.log(message);
    },error=>{
      console.log(error);
    })
  }
}
