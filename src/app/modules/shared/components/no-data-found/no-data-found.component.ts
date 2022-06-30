import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss']
})
export class NoDataFoundComponent {
  @Input() title: string = 'Any data was found';
  @Input() message: string = 'Sorry, we can\'t find what you are looking for.';
  img = {
    height: 300,
    width: 500,
    src: 'assets/imgs/empty.svg'
  };
}
