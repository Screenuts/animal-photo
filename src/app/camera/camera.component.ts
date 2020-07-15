import { Component, OnInit } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  image: SafeResourceUrl;

  constructor() { }

  ngOnInit() { }


  async takePicture() {

    const { Camera } = Plugins;

    const result = await Camera.getPhoto(
      {
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      }
    );

    this.image = result.webPath;

  }
}