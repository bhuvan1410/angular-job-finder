import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: any[] = [];

  constructor() {}


  addArticle(article: any) {
    this.articles.push(article);
  }


  getArticles() {
    return this.articles;
  }


  updateArticle(index: number, updatedArticle: any) {
    if (index >= 0 && index < this.articles.length) {
      this.articles[index] = updatedArticle;
    }
  }


  deleteArticle(index: number) {
    if (index >= 0 && index < this.articles.length) {
      this.articles.splice(index, 1);
    }
  }
}
