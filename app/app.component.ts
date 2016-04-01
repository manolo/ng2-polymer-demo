
import { Component, OnInit, ElementRef }  from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
  files: Array<UploadFile> = [];

  file: UploadFile;

  upload: vaadin.VaadinUpload;

  ajax: iron.IronAjax;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.upload = this.elRef.nativeElement.querySelector('vaadin-upload');
    this.ajax = this.elRef.nativeElement.querySelector('iron-ajax');
    this.ajax.generateRequest();
    (<HTMLElement><any>this.ajax).addEventListener("response", e => {
      (<any>this.ajax.lastResponse).forEach(o => {
        (<any>this.upload).push('files', o);
      });
    });
  }

}
