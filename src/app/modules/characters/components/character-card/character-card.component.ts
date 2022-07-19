import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CharacterModel } from '@models/character.models';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  @Input() character!: CharacterModel;
}
