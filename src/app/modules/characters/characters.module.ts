import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SharedModule } from '@shared/shared.module';
import { SearchModule } from '@shared/components/search/search.module';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    InfiniteScrollModule,
    SearchModule,
    SharedModule
  ]
})
export class CharactersModule { }
