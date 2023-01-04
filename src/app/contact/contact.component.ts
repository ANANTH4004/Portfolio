import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

 
  name !: string;
  email !: string;
  message !: string;
  constructor(private matIconRegistry: MatIconRegistry , private domSanitizer: DomSanitizer ,
     private http:HttpClient ,private emailService: EmailService){
    this.matIconRegistry.addSvgIcon(
      "Experience",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Images/linkedin_icon.svg")
    );
    this.matIconRegistry.addSvgIcon("github",this.domSanitizer
    .bypassSecurityTrustResourceUrl("../assets/Images/github_icon.svg"));
  }

ngOnInit(): void {
  
}
sendEmail(to: string, subject: string, content: string) {
  this.emailService.sendEmail(to, subject, content).subscribe(
    res => console.log(res),
    err => console.error(err)
  );
}
onSubmit(): void {
 
  const headers = new HttpHeaders().set('Authorization', 'Bearer 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');

  const body = {
    personalizations: [
      {
        to: [
          {
            email: 'anandstu11@gmail.com'
          }
        ],
        subject: 'Hello from SendGrid'
      }
    ],
    from: {
      email: this.email
    },
    content: [
      {
        type: 'text/plain',
        value: this.message
      }
    ]
  };

  this.http.post('https://api.sendgrid.com/v3/mail/send', body, { headers }).subscribe(response => {
    console.log(response);
  });
    // const email = {
    //   to: 'anandstu11@gmail.com',
    //   from: this.email,
    //   subject: 'Contact Form Submission',
    //   text: `
    //     Name: ${this.name}
    //     Email: ${this.email}
    //     Message: ${this.message}
    //   `
    // };

    // this.http.post('https://api.sendgrid.com/v3/mail/send', email, {
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json'
    //   }
    // }).subscribe(response => {
    //   console.log(response);
    // }, error => {
    //   console.error(error);
    // });
  }
}
