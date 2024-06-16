import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../description/description.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'tm-card',
  standalone: true,
  imports: [CommonModule, DescriptionComponent, TitleComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
