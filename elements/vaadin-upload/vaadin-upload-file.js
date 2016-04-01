var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UploadFile = (function () {
    function UploadFile() {
    }
    return UploadFile;
}());
var VaadinUploadFile = (function (_super) {
    __extends(VaadinUploadFile, _super);
    function VaadinUploadFile() {
        _super.apply(this, arguments);
    }
    VaadinUploadFile.prototype.fileChanged = function (newValue, oldValue) {
        this.updateStyles();
    };
    VaadinUploadFile.prototype.fileAbort = function (newValue, oldValue) {
        if (newValue) {
            this.toggleClass("fade-out", true);
            var animationName = window.getComputedStyle(this).animationName;
            if (!animationName || animationName === 'none') {
                this.fire('file-remove', { file: this.file });
            }
            else {
                this.addEventListener('animationend', function () {
                    this.fire('file-remove', { file: this.file });
                }.bind(this));
            }
        }
        this.updateStyles();
    };
    VaadinUploadFile.prototype._fireFileEvent = function (e) {
        e.preventDefault();
        var button = Polymer.dom(e).localTarget;
        this.fire(button.getAttribute("file-event"), { file: this.file });
    };
    __decorate([
        property({ type: Object }), 
        __metadata('design:type', UploadFile)
    ], VaadinUploadFile.prototype, "file", void 0);
    __decorate([
        observe("file.*"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], VaadinUploadFile.prototype, "fileChanged", null);
    __decorate([
        observe("file.abort"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], VaadinUploadFile.prototype, "fileAbort", null);
    VaadinUploadFile = __decorate([
        component("vaadin-upload-file"), 
        __metadata('design:paramtypes', [])
    ], VaadinUploadFile);
    return VaadinUploadFile;
}(polymer.Base));
VaadinUploadFile.register();
//# sourceMappingURL=vaadin-upload-file.js.map