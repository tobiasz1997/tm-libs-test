import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@tm/button';

@Component({
  selector: 'tm-counter',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public counter = signal(0);

  public count() {
    this.counter.update(v => v + 1);
  }
}
