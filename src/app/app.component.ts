import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'profile-app';

  http = inject(HttpClient);

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.http
      .request('GET', `${''}${'/api/quotes'}`, {
        responseType: 'json',
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
