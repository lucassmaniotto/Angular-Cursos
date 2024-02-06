import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought = {
    id: 1,
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    model: 'model1',
  };

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  createThought() {
    alert('Pensamento criado com sucesso!');
  }

  cancel() {
    this.router.navigate(['/listThought'])
  }
}
