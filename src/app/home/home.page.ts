import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: any[] = [];
  pageSize = 20; // Number of articles per page
  currentPage = 1; // Current page number
  totalResults = 0; // Total number of articles
  keyword: string | null = null; // Search keyword
  filteredNews: any[] = []; // Filtered news articles

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ionViewDidEnter() {
    this.fetchNews();
  }

  fetchNews() {
    this.newsService
      .getTopHeadlines(this.pageSize, this.currentPage)
      .then((response: any) => {
        console.log(response); // Add this line
        this.news = response.articles;
        this.totalResults = response.totalResults;
        this.filteredNews = this.news; // Initialize filteredNews with all news articles
      })
      .catch((error: any) => {
        console.error('Error fetching news:', error);
      });
  }
  
  searchNews(keyword: string) {
    this.keyword = keyword;

    if (this.keyword && this.keyword.trim()) {
      this.newsService
        .searchNews(this.keyword, this.pageSize, this.currentPage)
        .then((response: any) => {
          console.log(response);
          this.filteredNews = response.articles;
          this.totalResults = response.totalResults;
        })
        .catch((error: any) => {
          console.error('Error searching news:', error);
        });
    } else {
      this.filteredNews = this.news;
    }
  }

  handleSearch(event: Event) {
    const keyword = (event.target as HTMLInputElement).value;
    this.searchNews(keyword);
  }
  
    
  showArticleDetails(article: any) {
    this.router.navigate(['/article-details', { article: JSON.stringify(article) }]);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchNews();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchNews();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults / this.pageSize);
  }
}
