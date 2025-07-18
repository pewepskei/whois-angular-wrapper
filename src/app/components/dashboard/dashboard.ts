import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhoisService } from '../../services/whois';

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

  constructor(private whoisService: WhoisService) {}

  fetchData() {
    this.error = '';
    const domain = this.domainInput.trim();

    if (!domain) {
      this.error = 'Please enter a domain.';
      return;
    }

    this.whoisService.getWhoisData(domain, this.infoType).subscribe({
      next: (data) => {
        this.result = data;
      },
      error: (err) => {
        this.error = 'Failed to fetch WHOIS data.';
        console.error(err);
      },
    });
  }
}
