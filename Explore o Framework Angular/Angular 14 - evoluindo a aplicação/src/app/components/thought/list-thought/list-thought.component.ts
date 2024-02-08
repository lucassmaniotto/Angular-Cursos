import { Component, OnInit } from '@angular/core';
import { Thought } from '../../interfaces/thought';
import { ThoughtService } from '../service/thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  thoughtsList: Thought[] = [];
  currentPage: number = 1;
  hasMore: boolean = true;

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.getThoughts(this.currentPage).subscribe((data) => {
      this.thoughtsList = data;
    });
  }

  loadMoreThoughts() {
    this.service.getThoughts(++this.currentPage).subscribe((thoughtsList) => {
      this.thoughtsList.push(...thoughtsList);
      if (!thoughtsList.length) {
        this.hasMore = false;
      }
    })
  }
}
