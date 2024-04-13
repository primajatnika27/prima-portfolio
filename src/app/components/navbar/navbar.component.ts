import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  showMenu = false;
  currentSection = 'home';

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateCurrentSection();
  }

  updateCurrentSection() {
    const sections = ['home', 'services', 'work', 'testimonials', 'contact'];
    const scrollPosition = window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
      const section = document.querySelector(`#${sections[i]}`);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.currentSection = sections[i];
          break;
        }
      }
    }
  }

}
