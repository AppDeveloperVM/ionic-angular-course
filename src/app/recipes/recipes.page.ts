import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('ngOnInit - recipes');
    console.log(this.recipes);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter - recipes');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter - recipes');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave - recipes');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave - recipes');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - recipes');
  }

}
