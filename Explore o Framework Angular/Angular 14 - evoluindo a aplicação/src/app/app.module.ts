import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thought/create-thought/create-thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/thought/list-thought/list-thought.component';
import { ThoughtComponent } from './components/thought/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteThoughtComponent } from './components/thought/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thought/edit-thought/edit-thought.component';
import { LoadMoreButtonComponent } from './components/thought/list-thought/load-more-button/load-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    DeleteThoughtComponent,
    EditThoughtComponent,
    LoadMoreButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
