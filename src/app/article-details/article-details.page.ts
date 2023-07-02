import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {
  selectedArticle: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.fetchArticleDetails();
  }

  fetchArticleDetails() {
    const params = this.route.snapshot.paramMap;
    if (params && params.get('article')) {
      this.selectedArticle = JSON.parse(params.get('article')!);
    }
  }

  openOriginalArticle() {
    if (this.selectedArticle && this.selectedArticle.url) {
      window.open(this.selectedArticle.url, '_blank');
    }
  }

  goBack() {
    this.navCtrl.navigateBack('/home');
  }
}
