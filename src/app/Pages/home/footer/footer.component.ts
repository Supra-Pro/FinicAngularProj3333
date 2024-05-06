import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Email } from '../../../Interfaces/email';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  @ViewChild('emailInput') emailInput: any; 

  constructor(private http: AuthService, private matSnackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {}

  email(): void {
    const emailValue = this.emailInput.nativeElement.value; 
    console.log('subscribed');

    if(!emailValue) {
      this.matSnackBar.open('Please enter your email!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center'
      });
      return; 
    }

    this.http.sendEmail(emailValue).subscribe({
      next: (data: Email) => {
        console.log('submitted');
        this.matSnackBar.open('You have been subscribed to our newsletter!', 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      },
      error: (err) => {
        console.log(err);

        this.matSnackBar.open(err.error.message, 'Close', {
          duration: 3000,
          horizontalPosition: 'center'
        });
      }
    });
  }
}