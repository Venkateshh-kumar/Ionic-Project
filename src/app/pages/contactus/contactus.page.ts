import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class ContactusPage {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  
  showSuccessMessage = false;

  constructor(private toastController: ToastController) {}

  async onSubmit() {
    // Here you can handle form submission, e.g., send data to a server.
    // For now, we just show a success message.

    this.showSuccessMessage = true;

    // Show toast message
    const toast = await this.toastController.create({
      message: 'Thank you! Your message has been sent successfully.',
      duration: 2000,
      color: 'success'
    });
    toast.present();

    // Reset form
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
