import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@tm/page/footer';
import { HeaderComponent } from '@tm/page/header';

@Component({
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  selector: 'tm-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
