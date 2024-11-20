import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-alphabet-filter',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './alphabet-filter.component.html',
  styleUrl: './alphabet-filter.component.scss'
})
export class AlphabetFilterComponent {
selectedLetter : string | undefined = '';
alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  filterByLetter(alphabet:string){
   console.log(this.selectedLetter);
  }
}
