import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

   @Input() isSideNavVisible! : boolean;
   @Input() selectedSection!: string ; 
   @Output() sideNavVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleNav() {
    this.isSideNavVisible = !this.isSideNavVisible;
    this.sideNavVisibility.emit(this.isSideNavVisible);
  }

  @Output() sectionSelected: EventEmitter<string> = new EventEmitter();

  onSelectOption(section: string) {
    this.selectedSection = section;
    this.sectionSelected.emit(section);
  }

  isSelected(option: string): boolean {
    return this.selectedSection === option;
  }
  

}
