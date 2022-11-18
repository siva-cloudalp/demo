/*
  © 2020 NetSuite Inc.
  User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
  provided, however, if you are an authorized user with a NetSuite account or log-in, you
  may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ViewCertification.Model"/>
/// <reference path="../../../Commons/Utilities/JavaScript/GlobalDeclarations.d.ts"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');




const ViewCertificationModel: any = Backbone.Model.extend({
  // urlRoot: Utils.getAbsoluteUrl('services/ViewCertification.Service.ss'),
  urlRoot:'services/ViewCertification.Service.ss',

  parse: function (response) {
  },


  update: function (options) {
  }



})
export = ViewCertificationModel;