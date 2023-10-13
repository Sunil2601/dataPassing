import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  plans = [{
    plan: 'Free',
    price: 0,
    period: '/month',
    items: ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
    ticks: [1, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    plan: 'Plus',
    price: 9,
    period: '/month',
    items: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
    , ticks: [1, 1, 1, 1, 1, 1, 1, 0]
  },
  {
    plan: 'Pro',
    price: 49,
    period: '/month',
    items: ['Unlimited Users', '150GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
    , ticks: [1, 1, 1, 1, 1, 1, 1, 1]
  }
  ];
}
