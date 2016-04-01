

declare module vaadin {
	/* 
		`<vaadin-upload>` is a Polymer element for uploading multiple files with drag and drop support.
		
		Example:
		
		```html
		<vaadin-upload></vaadin-upload>
		```
		
		### Styling
		
		The following custom properties are available for styling the component.
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--vaadin-upload-drag-ripple`|A mixin that is applied to the ripple animation in the drop area|`{}`
		`--vaadin-upload-drop-label`|A mixin that is applied to the drop label|`{}`
		`--vaadin-upload-drop-label-dragover`|A mixin that is applied to the drop label when overing the component with files|`{}`
		`--vaadin-upload-drop-label-icon`|A mixin that is applied to the drop icon|`{}`
		`--vaadin-upload-file-list`|A mixin that is applied to the file list|`{}`
		`--vaadin-upload-buttons`|A mixin that is applied to the buttons container|`{}`
		`--vaadin-upload-buttons-primary`|A mixin that is applied to the primary buttons container (left side)|`{}`
		`--vaadin-upload-buttons-secondary`|A mixin that is applied to the secondary buttons container (right side)|`{}`
		`--vaadin-upload-button-add`|A mixin that is applied to the upload button|`{}`
		`--vaadin-upload-button-add-disabled`|A mixin that is applied to the upload button when `maxFiles` limit is reached|`{}`
	*/
	export class VaadinUpload 
	{
	/*
	== EVENTS ==

	Event: 'file-reject'
	Params: detail: Object, detail.file: Object, detail.error: Object
Fired when a file cannot be added to the queue due to a constrain:
 file-size, file-type or maxFiles

 Event: 'upload-abort'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired when retry abort is requested. If the default is prevented, then the
file upload would not be aborted.

 Event: 'upload-before'
	Params: detail: Object, detail.xhr: Object, detail.file: Object, detail.file.uploadTarget: Object
Fired before the XHR is opened. Could be used for changing the request
URL. If the default is prevented, then XHR would not be opened.

 Event: 'upload-error'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired in case the upload process failed.

 Event: 'upload-progress'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired as many times as the progress is updated.

 Event: 'upload-request'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired when the XHR has been opened but not sent yet.
Useful to change some parameters like headers, etc.
If the event is preventDefault `vaadin-upload` will not send the
request allowing the user to do something on his own.

 Event: 'upload-response'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired when we have the actual server response, and before the component
analises it. It's useful for developers to make the upload fail depending
on the server response. If the event is preventDefault the vaadin-upload
will return allowing the user to do something on his own like retry the
upload, etc. since he has full access to the `xhr` and `file` objects.
Otherwise, if the event is not prevented default `vaadin-upload` continues
with the normal workflow checking the `xhr.status` and `file.error`
which also might be modified by the user to force a customised response.

 Event: 'upload-retry'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired when retry upload is requested. If the default is prevented, then
retry would not be performed.

 Event: 'upload-start'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired when the XHR is sent.

 Event: 'upload-success'
	Params: detail: Object, detail.xhr: Object, detail.file: Object
Fired in case the upload process succeed.

 
	*/
	
		/*
		Specifies the types of files that the server accepts.
		Syntax: file_extension|audio/*|video/*|image/*|media_type
		*/
		accept: string;
	
		/*
		The array of files being processed, or already uploaded.
		
		Each element is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
		object with a number of extra properties  to track the upload process:
		- `uploadTarget`: The target URL used to upload this file.
		- `elapsed`: Elapsed time since the upload started.
		- `elapsedStr`: Human-readable elapsed time.
		- `remaining`: Number of seconds remaining for the upload to finish.
		- `remainingStr`: Human-readable remaining time for the upload to finish.
		- `progress`: Percentage of the file already uploaded.
		- `speed`: Upload speed in kB/s.
		- `size`: File size in bytes.
		- `totalStr`: Human-readable total size of the file.
		- `loaded`: Bytes transferred so far.
		- `loadedStr`: Human-readable uploaded size at the moment.
		- `status`: Status of the upload process.
		- `error`: Error message in case the upload failed.
		- `abort`: True if the file was canceled by the user.
		- `complete`: True when the file was transferred to the server.
		- `uploading`: True while trasferring data to the server.
		*/
		files: Array<any>;
	
		/*
		Key-Value map to send to the server. If you set this property as an
		attribute, use a valid JSON string, for example:
		```
		<vaadin-upload headers='{"X-Foo": "Bar"}'></vaadin-upload>
		```
		*/
		headers: Object;
	
		/*
		The object used to localize this component.
		For changing the default localization, change the entire
		_i18n_ object or just the property you want to modify.
		
		The object has the following JSON structure and default values:
		
		    {
		      dropFiles: {
		       one: 'Drop file here...',
		       many: 'Drop files here...'
		      },
		      addFiles: {
		       one: 'Select File',
		       many: 'Upload Files'
		      },
		      cancel: 'Cancel',
		      error: {
		       tooManyFiles: 'Too Many Files.',
		       fileIsTooBig: 'File is Too Big.',
		       incorrectFileType: 'Incorrect File Type.'
		      },
		      uploading: {
		       status: {
		         connecting: 'Connecting...',
		         stalled: 'Stalled.',
		         processing: 'Processing File...'
		       },
		       remainingTime: {
		         prefix: 'remaining time: ',
		         unknown: 'unknown remaining time'
		       },
		       error: {
		         serverUnavailable: 'Server Unavailable',
		         unexpectedServerError: 'Unexpected Server Error',
		         forbidden: 'Forbidden'
		       }
		      },
		      units: {
		       size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		      },
		      formatSize: function(bytes) {
		       // returns the size followed by the best suitable unit
		      },
		      formatTime: function(seconds, [secs, mins, hours]) {
		       // returns a 'HH:MM:SS' string
		      }
		    }
		*/
		i18n: Object;
	
		/*
		Specifies the maximum file size in bytes allowed to upload.
		Notice that it is a client-side constraint, which will be checked before
		sending the request. Obviously you need to do the same validation in
		the server-side and be sure that they are aligned.
		*/
		maxFileSize: Number;
	
		/*
		Limit of files to upload, by default it is unlimited. If the value is
		set to one, native file browser will prevent selecting multiple files.
		*/
		maxFiles: Number;
	
		/*
		HTTP Method used to send the files. Only POST and PUT are allowed.
		*/
		method: string;
	
		/*
		Define whether the element supports dropping files on it for uploading.
		By default it's enabled in desktop and disabled in touch devices
		because mobile devices do not support drag events in general. Setting
		it false means that drop is enabled even in touch-devices, and true
		disables drop in all devices.
		*/
		nodrop: Boolean;
	
		/*
		The server URL. The default value is an empty string, which means that
		_window.location_ will be used.
		*/
		target: string;
	
		/*
		Max time in milliseconds for the entire upload process, if exceeded the
		request will be aborted. Zero means that there is no timeout.
		*/
		timeout: Number;
	

	
	}
}
