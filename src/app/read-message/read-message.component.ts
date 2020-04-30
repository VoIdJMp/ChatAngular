import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.component.html',
  styleUrls: ['./read-message.component.css']
})
export class ReadMessageComponent implements OnInit {

  @Input() messages: string[];
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add_message(message: any) {
    this.onClick.emit(message.value);
    message.value = '';
  }

}
