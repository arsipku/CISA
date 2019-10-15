import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { APIService } from 'src/app/api.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    userData: Object;
    emp_length: number;
    home_ownership: number;
    annual_inc: number;
    total_acc: number;
    term: number;

    constructor(private router: Router,
        private loadingController: LoadingController,
        private alertController: AlertController,
        private apiService: APIService) { }

    ngOnInit() {
    }

    onRegister() {
       this.userData = {
        "emp_length" : emp_length,
        "home_ownership" : home_ownership,
        "annual_inc": annual_inc,
        "total_acc": total_acc,
        "term": term
      };
        this.apiService.creditRating();
        this.router.navigateByUrl("home");;
        this.presentLoading();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
          message: 'Wait the score will be appear in seconds...',
          duration: 1500
        });
        await loading.present();
    
        const { role, data } = await loading.onDidDismiss();
    
        console.log('Loading dismissed!');
        this.presentAlert();
      }

      async presentAlert() {
        const alert = await this.alertController.create({
          header: 'The score is available now',
          subHeader: 'You have score now',
          message: 'Your score is A',
          buttons: ['OK']
        });
        await alert.present();
    }
}
