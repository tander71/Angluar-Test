import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Salat',
      'auch sehr lecker',
      'https://images.eatsmarter.de/sites/default/files/styles/max_size/public/gruener-salat-mit-getrockneten-tomaten-und-radieschen-42953.jpg',
      []
    ),
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'https://fthmb.tqn.com/eaoMPeDM_YqZnfBlLCOXlTnKzos=/960x0/filters:no_upscale()/Wiener-Schnitzel-58ade15d5f9b58a3c9d4caee.jpg',
      [
        new Ingredient('Pommes', 10),
        new Ingredient('Schnitzel', 1),
  ]) ];

  getRecipes() {
    return this.recipes;
  }
}
