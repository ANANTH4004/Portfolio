import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { Subject } from 'rxjs';


declare var Mailthis: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{


  name !: string;
  email !: string;
  message !: string;
  link !: string;
  constructor(private matIconRegistry: MatIconRegistry , private domSanitizer: DomSanitizer ,
     private http:HttpClient){
    this.matIconRegistry.addSvgIcon(
      "Experience",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Images/linkedin_icon.svg")
    );
    this.matIconRegistry.addSvgIcon("github",this.domSanitizer
    .bypassSecurityTrustResourceUrl("../assets/Images/github_icon.svg"));
  }

  
ngOnInit(): void {
 
}

onSubmit(): void {
  // const apiKey = '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';
  //   const email = {
  //     to: 'anandstu11@gmail.com',
  //     from: this.email,
  //     subject: 'Contact Form Submission',
  //     text: `
  //       Name: ${this.name}
  //       Email: ${this.email}
  //       Message: ${this.message}
  //     `
  //   };

  //   this.http.post('https://api.sendgrid.com/v3/mail/send', email, {
  //     headers: {
  //       'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods',
  //       'Access-Control-Allow-Origin' : '*',
  //       'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //       'Authorization': `Bearer ${apiKey}`,
  //       'Content-Type': 'application/json'
  //     }
  //   }).subscribe(response => {
  //     console.log(response);
  //   }, error => {
  //     console.error(error);
  //   });
  // }
  this.link = `mailto:balamuruganananth@gmail.com?subject=${this.name}&body=${this.message}`;
  window.open(this.link,'_blank')
}
}
