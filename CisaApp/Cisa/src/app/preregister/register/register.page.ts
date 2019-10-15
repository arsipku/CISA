import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    constructor(private router: Router,
        private loadingController: LoadingController,
        private alertController: AlertController) { }

    ngOnInit() {
    }

    onRegister() {
        this.router.navigateByUrl("home");
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
