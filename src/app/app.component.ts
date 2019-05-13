import { Component } from '@angular/core';
import {Post} from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  premierPost = new Post('Mon premier post', 'Contenu premier post bla bla bla', 2);
  deuxiemePost = new Post('Mon deuxième post', 'Contenu deuxième post', -1);
  troisiemePost = new Post('Mon 3-ème post', 'Contenu 3-ème post', 0);
  posts = [this.premierPost, this.deuxiemePost, this.troisiemePost];
}
