import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../../interfaces/thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtLenght(): string {
    if (this.thought.content.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
