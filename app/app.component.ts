
import { Component, Input, OnInit, ChangeDetectorRef, ElementRef }  from 'angular2/core';

class UploadFile
{
  name: string;
  progress: number;
  status: string;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  files: Array<UploadFile> = [{
    progress: 20,
    status: 'uploading',
    name: 'foo'
  }];

  file: UploadFile;

}
