import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  globalError: string | null = null;

  showError(message: string) {
    this.globalError = message;
    setTimeout(() => {
      this.globalError = null;
    }, 3000);
  }
}
