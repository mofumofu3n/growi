'use strict';

var form = require('express-form')
  , field = form.field
  ;

module.exports = form(
  field('settingForm[security:passport-twitter:isEnabled]').trim().toBooleanStrict().required(),
  field('settingForm[security:passport-twitter:consumerKey]').trim(),
  field('settingForm[security:passport-twitter:consumerSecret]').trim(),
  field('settingForm[security:passport-twitter:callbackUrl]').trim(),
  field('settingForm[security:passport-twitter:isSameUsernameTreatedAsIdenticalUser]').trim().toBooleanStrict(),
);
