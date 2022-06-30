import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '@services/data.service';
import { Subject, map, debounceTime, distinctUntilChanged, filter, tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  search: FormControl = new FormControl('');
  private destroy$ = new Subject<unknown>();

  constructor() {
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next([])
    this.destroy$.complete();
  }

  private onSearch(): void {
    this.search.valueChanges.pipe(
      map(search => search?.toLowerCase().trim()),
      debounceTime(300),
      distinctUntilChanged(),
      filter(search => search !== '' && search?.length > 2),
      tap(search => console.warn('TODO: Implement filter data onSearch()')),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  onClear() {
    this.search.reset();
    console.warn('TODO: Reset filtered data on store');
    // TODO: Reset filtered data on store
  }
}
