define('crypto-vault/components/file-upload', ['exports', 'ember-uploader', '@ember'], function (exports, _emberUploader, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberUploader.default.FileField.extend({
    filesDidChange: function filesDidChange(files) {
      var uploader = _emberUploader.default.Uploader.create({
        url: this.get('url')
      });

      if (!_ember.default.isEmpty(files)) {
        // this second argument is optional and can to be sent as extra data with the upload
        uploader.upload(files[0]);
      }
    }
  });
});