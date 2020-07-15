import { Component, OnInit } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  img: any;

  constructor() { }

  ngOnInit() { }


  async takePicture() {

    const captureImage = await Plugins.Camera.getPhoto(
      {
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      }
    );

    this.img = captureImage.webPath;

  }
}