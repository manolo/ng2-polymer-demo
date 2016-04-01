

declare module vaadin {
	/* 
		`<vaadin-upload-file>` element represents a file in the file list of `<vaadin-upload>`.
		
		### Styling
		
		The following custom properties are available for styling the component.
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--vaadin-upload-file`|A mixin that is applied to the host element|`{}`
		`--vaadin-upload-file-row`|A mixin that is applied to the file row|`{}`
		`--vaadin-upload-file-status-icon`|A mixin that is applied to all file status icons. By default, file status icons are hidden until the upload process finishes.|`{}`
		`--vaadin-upload-file-status-icon-complete`|A mixin that is applied to the complete status icon when the upload process succeeds|`{}`
		`--vaadin-upload-file-status-icon-error`|A mixin that is applied to the error status icon when the upload process fails|`{}`
		`--vaadin-upload-file-meta`|A mixin that is applied to the info container|`{}`
		`--vaadin-upload-file-meta-complete`|A mixin that is applied to the info container when file upload is complete|`{}`
		`--vaadin-upload-file-meta-error`|A mixin that is applied to the info container when an error happens|`{}`
		`--vaadin-upload-file-name`|A mixin that is applied to the file name|`{}`
		`--vaadin-upload-file-status`|A mixin that is applied to the file status label|`{}`
		`--vaadin-upload-file-error`|A mixin that is applied to the file error label|`{}`
		`--vaadin-upload-file-commands`|A mixin that is applied to the buttons container|`{}`
		`--vaadin-upload-file-progress`|A mixin that is applied to the included paper-progress|`{}`
		`--vaadin-upload-file-progress-error`|A mixin that is applied to the progress bar when error is set|`{}`
		`--vaadin-upload-file-progress-indeterminate`|A mixin that is applied to the progress bar when indeterminate|`{}`
		`--vaadin-upload-file-progress-uploading-indeterminate`|A mixin that is applied to the progress bar when uploading and indeterminate|`{}`
		`--vaadin-upload-file-progress-complete`|A mixin that is applied to the progress when file is complete|`{}`
		`--vaadin-upload-file-canceled`|A mixin that is applied to the upload cancel animation|`{}`
	*/
	export class VaadinUploadFile 
	{
	/*
	== EVENTS ==

	Event: 'file-abort'
	Params: detail: Object, detail.file: Object
Fired when abort button is pressed. It is listened by `vaadin-upload` which
will abort the upload in progress, but will not remove the file from the list
to allow the animation to hide the element to be run.

 Event: 'file-remove'
	Params: detail: Object, detail.file: Object
Fired after the animation to hide the element has finished. It is listened
by `vaadin-upload` which will actually remove the file from the upload
file list.

 Event: 'file-retry'
	Params: detail: Object, detail.file: Object
Fired when the retry button is pressed. It is listened by `vaadin-upload`
which will start a new upload process of this file.

 
	*/
	
		/*
		File metadata, upload status and progress information.
		*/
		file: Object;
	

	
	}
}
