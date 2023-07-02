
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '';
  private apiUrl = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) {}

  getTopHeadlines(pageSize: number, page: number) {
    const url = `${this.apiUrl}/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${this.apiKey}`;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  searchNews(keyword: string, pageSize: number, page: number) {
    const url = `${this.apiUrl}/everything?q=${keyword}&pageSize=${pageSize}&page=${page}&apiKey=${this.apiKey}`;
    console.log(url);
    return this.http.get(url).toPromise()
      .then(response => {
        console.log(response); // Add this line to log the response
        return response;
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        throw error;
      });
  }
  
}
