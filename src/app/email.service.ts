import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private sendGridUrl = 'https://api.sendgrid.com/v3/mail/send';
  private sendGridApiKey = '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';
  constructor(private http: HttpClient) { }
  sendEmail(to: string, subject: string, content: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.sendGridApiKey}`,
        'Content-Type': 'application/json'
      })
    };
    const body = {
      personalizations: [{ to: [{ email: to }] }],
      from: { email: to },
      subject: subject,
      content: [{ type: 'text/plain', value: content }]
    };
    return this.http.post(this.sendGridUrl, body, httpOptions);
  }
}
