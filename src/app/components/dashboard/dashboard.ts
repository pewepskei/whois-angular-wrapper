import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhoisService } from '../../services/whois';
import { App } from '../../app';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent {
  domainInput = '';
  infoType = 'all';
  result: any;
  error = '';
  showErrorPopup = false;

  constructor(
    private whoisService: WhoisService,
    private appComponent: App
  ) {}

  fetchData() {
    this.error = '';
    this.showErrorPopup = false;

    const domain = this.domainInput.trim();

    if (!domain) {
      this.appComponent.showError('Please enter a domain.');
      return;
    }

    if (!this.isValidDomain(domain)) {
      this.appComponent.showError('Invalid domain format.');
      return;
    }

    this.whoisService.getWhoisData(domain, this.infoType).subscribe({
      next: (data) => {
        if (!data) {
          this.appComponent.showError('Domain is not registered');
          return;
        }
        this.result = data;
      },
      error: (err) => {
        this.appComponent.showError('Failed to fetch WHOIS data.');
        console.error(err);
      },
    });
  }

  isValidDomain(domain: string): boolean {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  }

  showPopupError(message: string) {
    this.error = message;
    this.showErrorPopup = true;
    setTimeout(() => {
      this.showErrorPopup = false;
    }, 3000);
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isArray(val: any): boolean {
    return Array.isArray(val);
  }
}

