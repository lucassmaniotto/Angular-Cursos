import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API_URL = 'http://localhost:3001/thoughts';
  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API_URL);
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API_URL, thought);
  }

  deleteThought(id: number): Observable<Thought> {
    return this.http.delete<Thought>(`${this.API_URL}/${id}`);
  }

  searchById(id: number): Observable<Thought> {
    return this.http.get<Thought>(`${this.API_URL}/${id}`);
  }

  updateThought(thought: Thought): Observable<Thought> {
    return this.http.put<Thought>(`${this.API_URL}/${thought.id}`, thought);
  }
}
