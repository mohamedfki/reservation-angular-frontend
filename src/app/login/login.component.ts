import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { CommonModule } from '@angular/common'; // Required for standalone components
import axios from 'axios'; // Import axios for HTTP requests

@Component({
  selector: 'app-login',
  standalone: true, // Enables the component to be used standalone
  imports: [FormsModule, CommonModule], // Include necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''; // Bound to the email input field
  password: string = ''; // Bound to the password input field
  isSubmitting: boolean = false; // Tracks the submission state
  validationErrors: Array<string> = []; // Holds validation errors for display
  successMessage: string = ''; // Holds success message
  errorMessage: string = ''; // Holds error message

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check for existing token or session
  }

  loginAction(): void {
    // Clear previous error/success messages
    this.successMessage = '';
    this.errorMessage = '';

    // Prepare the login data to send to the backend
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.isSubmitting = true;

    // Make the API call to log the user in
    axios.post('http://localhost:8080/api/auth/login', loginData)
      .then((response) => {
        this.isSubmitting = false;
        // Handle success response
        this.successMessage = 'Login successful!';
        localStorage.setItem('token', response.data.token); // Store the JWT token
        console.log('Login Success:', response.data);
        // Redirect to dashboard or another page after successful login
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.isSubmitting = false;
        // Handle error response
        if (error.response) {
          // Backend returned an error
          this.errorMessage = error.response.data.error || 'An error occurred during login.';
        } else {
          // Network error or other issues
          this.errorMessage = 'Unable to connect to the server.';
        }
        console.error('Login Error:', error);
      });
  }
}
