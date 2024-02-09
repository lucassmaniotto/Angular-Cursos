import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from '../../interfaces/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_URL = 'http://localhost:3001/thoughts';
  constructor(private http: HttpClient) {}

  getThoughts(page: number, filter: string): Observable<Thought[]> {
    const itensByPage = 6;
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', itensByPage.toString())

      filter.trim().length > 2 ? params = params.set('q', filter) : params;

    return this.http.get<Thought[]>(this.API_URL, { params });
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

  changeFavoriteValue(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    return this.updateThought(thought);
  }
}
