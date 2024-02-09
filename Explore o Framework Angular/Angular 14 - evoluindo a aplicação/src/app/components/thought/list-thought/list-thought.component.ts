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
  favorites: boolean = false;
  title = 'Meu Mural';
  favoritesList: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.getThoughts(this.currentPage, this.filter, this.favorites).subscribe((data) => {
      this.thoughtsList = data;
    });
  }

  loadMoreThoughts() {
    this.service.getThoughts(++this.currentPage, this.filter, this.favorites).subscribe((thoughtsList) => {
      this.thoughtsList.push(...thoughtsList);
      if (!thoughtsList.length) {
        this.hasMore = false;
      }
    })
  }

  filterThoughts() {
    this.currentPage = 1;
    this.hasMore = true;
    this.service.getThoughts(this.currentPage, this.filter, this.favorites).subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList;
    });
  }

  listFavorites() {
    this.currentPage = 1;
    this.hasMore = true;
    this.favorites = true;
    this.service.getThoughts(this.currentPage, this.filter, this.favorites).subscribe((favoritesThoughtsList) => {
      this.thoughtsList = favoritesThoughtsList;
      this.favoritesList = favoritesThoughtsList;
    });
    this.title = 'Meus Favoritos';
  }

  listAll() {
    this.currentPage = 1;
    this.hasMore = true;
    this.favorites = false;
    this.service.getThoughts(this.currentPage, this.filter, this.favorites).subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList;
    });
    this.title = 'Meu Mural';
  }
}
