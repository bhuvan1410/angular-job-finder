import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css'],
})
export class ViewArticlesComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  toggleEditMode(article: any) {
    article.editMode = !article.editMode;
  }

  deleteArticle(index: number) {
    this.articles.splice(index, 1);
  }
}
