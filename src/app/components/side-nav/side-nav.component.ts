import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

  isNavVisible: boolean = true;
   @Input() selectedSection!: string ; 

  @Output() sideNavVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
    this.sideNavVisibility.emit(this.isNavVisible);
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
