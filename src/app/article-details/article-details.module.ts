import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleDetailsPageRoutingModule } from './article-details-routing.module';

import { ArticleDetailsPage } from './article-details.page';
import { NewsService } from '../services/news.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailsPageRoutingModule,
    HttpClientModule // Add HttpClientModule here
  ],
  declarations: [ArticleDetailsPage],
  providers: [NewsService], // Make sure NewsService is provided here
})
export class ArticleDetailsPageModule {}
