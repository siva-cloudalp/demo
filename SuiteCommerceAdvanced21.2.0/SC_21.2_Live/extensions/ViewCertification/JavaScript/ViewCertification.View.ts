///<amd-module name="ViewCertification.View"/>
import * as _ from 'underscore';
import * as view_certification_tpl from 'View_Certification.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { ListHeaderView } from '../../../Commons/ListHeader/JavaScript/ListHeader.View';
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
import ViewCertificationModel = require('./ViewCertification.Model');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

const ViewCertificationView:any = BackboneView.extend({
   // @property {Function} template
   template: view_certification_tpl,
   // @property {String} title
   title: Utils.translate('View Certification'),
   // @property {String} className
   className: 'ViewCertification',
   // @property {String} page_header
   page_header: Utils.translate('Certification'),
   // @property {Object} attributes
   attributes: {
       id: 'viewcertification',
       class: 'viewcertification'
   },
   // @method getBreadcrumbPages
   getBreadcrumbPages: function () {
       return {
           text: this.title,
           href: 'viewcertification'
       };
   },
    // @propery {Object} events
    events: {
      
  },
   initialize: function (options) {
      // this.model = new ViewCertificationModel();
        // var promise = this.model.fetch().then(function(res){
        //       console.log(res,'res');
              
        // })
   },
   
   childViews: {},
   beforeShowContent: function () {
    var promise = jQuery.Deferred();
     var self = this;
     self.model = new ViewCertificationModel();
    self.model.fetch().then(function(res){
        self.model.set('record',res.record)
        self.model.set('roles',res.roles)
      promise.resolve();
      
    })
    return promise;
  },
  getContext: function (){
    var Model = this.model.get('record');
    var profileModel = ProfileModel.getInstance();
    var NoDataFound = false;
    var CustViewCertificates = [];
    var Record ;
    var getRoleBasedPdf ;
    if(_.isNull(Model)){
      NoDataFound = true;
    }else{
      getRoleBasedPdf =  Model.map(rec =>{
        let email1 =  rec.columns.email;
        let email2 =   profileModel.get('email');
        if(email1 === email2){
          return rec;
        }
      });
    }
    let MatchRolesPdf = _.compact(getRoleBasedPdf);
    if(_.isEmpty(MatchRolesPdf)){
      Record = Model;
    }else{
      Record = MatchRolesPdf ;
    }
    _.each(Record,(doc:any) =>{
      if(doc.columns.custrecord_pdf_doc_1)
      CustViewCertificates .push({pdf: doc.columns.custrecord_pdf_doc_1.name,
        id:doc.columns.custrecord_pdf_doc_1.internalid
      });
      if(doc.columns.custrecord_pdf_doc_2)
      CustViewCertificates .push({pdf: doc.columns.custrecord_pdf_doc_2.name,
        id:doc.columns.custrecord_pdf_doc_2.internalid
      });
      if(doc.columns.custrecord_pdf_doc_3)
      CustViewCertificates .push({pdf: doc.columns.custrecord_pdf_doc_3.name,
        id:doc.columns.custrecord_pdf_doc_3.internalid
      });
      if(doc.columns.custrecord_pdf_doc_4)
      CustViewCertificates .push({pdf: doc.columns.custrecord_pdf_doc_4.name,
        id:doc.columns.custrecord_pdf_doc_4.internalid
      });  
    });
    return {
      //@property {Array}
      records:CustViewCertificates,
      NoDataFound:NoDataFound
    }
  }

})
export = ViewCertificationView;