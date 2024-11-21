import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  
  searchQuery : string | null = null;
  @Output() searchQueryChanged : EventEmitter<string  | null>= new EventEmitter<string | null>();
  
  filterByQuery(query:string | null){
    this.searchQuery = query;
    this.searchQueryChanged.emit(query);
   
  }
}
