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
  filter: string = '';

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.getThoughts(this.currentPage, this.filter).subscribe((data) => {
      this.thoughtsList = data;
    });
  }

  loadMoreThoughts() {
    this.service.getThoughts(++this.currentPage, this.filter).subscribe((thoughtsList) => {
      this.thoughtsList.push(...thoughtsList);
      if (!thoughtsList.length) {
        this.hasMore = false;
      }
    })
  }

  filterThoughts() {
    this.currentPage = 1;
    this.hasMore = true;
    this.service.getThoughts(this.currentPage, this.filter).subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList;
    });
  }
}
