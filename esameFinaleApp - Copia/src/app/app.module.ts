import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './detail/pokemon-detail/pokemon-detail.component';
import { ShinyPokemonComponent } from './shiny-pokemon/shiny-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: 'shiny-pokemon/:name', component: ShinyPokemonComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailComponent,
    ShinyPokemonComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }