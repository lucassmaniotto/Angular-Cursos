import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThoughtService } from '../service/thought.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstCharUppercaseValidator } from '../validator/firstCharUppercaseValidator';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      authorship: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        firstCharUppercaseValidator
      ])],
      model: ['modelo1', Validators.required],
    });
  }

  createThought() {
    if(this.form.valid) {
      this.service.createThought(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought']);
      })
    }
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }

  enableButton(): string {
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }
}
