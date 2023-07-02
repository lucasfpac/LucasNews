import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey: string = 'b4893141e40b4d2085483fde98f82558';

  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  searchNews(keyword: string) {
    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
