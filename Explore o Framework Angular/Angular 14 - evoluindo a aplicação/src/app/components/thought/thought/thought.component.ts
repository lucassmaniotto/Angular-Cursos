import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../../interfaces/thought';
import { ThoughtService } from '../service/thought.service';

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
    model: '',
    favorite: false
  }

  @Input() favoritesList: Thought[] = [];

  constructor(
    private thoughtService: ThoughtService
  ) { }

  ngOnInit(): void {
  }

  thoughtLenght(): string {
    if (this.thought.content.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavoriteIcon(): string {
    return this.thought.favorite ? 'ativo' : 'inativo';
  }

  updateFavorite(): void {
    this.thoughtService.changeFavoriteValue(this.thought).subscribe(() => {
      this.favoritesList.splice(this.favoritesList.indexOf(this.thought), 1);
    });
  }
}
