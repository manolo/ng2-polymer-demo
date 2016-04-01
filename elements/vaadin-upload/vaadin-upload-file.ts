
class UploadFile
{
  name: string;
  progress: number;
  status: string;
}

@component("vaadin-upload-file")
class VaadinUploadFile extends polymer.Base
{
   @property({ type: Object})
   file: UploadFile;

   @observe("file.*")
   fileChanged(newValue, oldValue)
   {
     this.updateStyles();
   }

   @observe("file.abort")
   fileAbort(newValue, oldValue)
   {
     if (newValue) {
       this.toggleClass("fade-out", true);
       var animationName = window.getComputedStyle(this).animationName;
       if (!animationName || animationName === 'none') {
         this.fire('file-remove', {file: this.file});
       } else {
         this.addEventListener('animationend', function() {
           this.fire('file-remove', {file: this.file});
         }.bind(this));
       }
     }
     this.updateStyles();
   }

   private _fireFileEvent(e)
   {
     e.preventDefault();
     var button: HTMLElement  = (<any>Polymer.dom(e)).localTarget;
     this.fire(button.getAttribute("file-event"), {file: this.file});
   }
}

VaadinUploadFile.register();
