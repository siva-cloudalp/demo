// @module CloudAlp.Certificates.Certificates
define('CloudAlp.Certificates.Certificates.View'
	, [
		'cloudalp_certificates_certificates.tpl'
		, 'underscore'
		, 'jQuery'
		, 'Profile.Model'
		, 'CloudAlp.Certificates.Certificates.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_certificates_certificates_tpl
		, _
		, $
		, ProfileModel
		, CertificatesModel
		, Backbone
	) {
		'use strict';

		// @class CloudAlp.Certificates.Certificates.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_certificates_certificates_tpl

			, initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
			// 	var self = this;
			// 	self.model = new CertificatesModel();
			// 	self.model.fetch().done(function (result) {
			// 		// self.message = result.message;
			// 		self.model.set('record',result.record)
			// 		self.render();
			// 	});
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}
			// , beforeShowContent: function () {
			// 	var promise = $.Deferred();
			// 	var self = this;
			// 	self.model = new CertificatesModel();
			// 	self.model.fetch().then(function (res) {
			// 		self.model.set('record', res.record)
			// 		promise.resolve();

			// 	})
			// 	return promise;
			// }
			//@method getContext @return CloudAlp.Certificates.Certificates.View.Context
			, getContext: function getContext() {
				var container = this.options.container;	
				// var Model = this.model.get('record');
				var Model =  container.Rec;
				var profileModel = ProfileModel.getInstance();
				var NoDataFound = false;
				var CustViewCertificates = [];
				var Record;
				var getRoleBasedPdf;
				if (_.isNull(Model)) {
					NoDataFound = true;
				} else {
					getRoleBasedPdf = Model.map(rec => {
						let email1 = rec.columns.email;
						let email2 = profileModel.get('email');
						if (email1 === email2) {
							return rec;
						}
					});
				}
				let MatchRolesPdf = _.compact(getRoleBasedPdf);
				if (_.isEmpty(MatchRolesPdf)) {
					Record = Model;
				} else {
					Record = MatchRolesPdf;
				}	
				_.each(Record, (doc) => {
					if (doc.columns.custrecord_pdf_doc_1){
						let File = 	doc.columns.custrecord_pdf_doc_1.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_1.name,
							id: doc.columns.custrecord_pdf_doc_1.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_2){
						let File = 	doc.columns.custrecord_pdf_doc_2.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_2.name,
							id: doc.columns.custrecord_pdf_doc_2.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_3){
						let File = 	doc.columns.custrecord_pdf_doc_3.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_3.name,
							id: doc.columns.custrecord_pdf_doc_3.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_4){
						let File = 	doc.columns.custrecord_pdf_doc_4.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_4.name,
							id: doc.columns.custrecord_pdf_doc_4.internalid,
							file:removePdfext
						});
					}
					
				});
				//@class CloudAlp.Certificates.Certificates.View.Context
				return {
					//@property {Array}
					records: CustViewCertificates,
					NoDataFound: NoDataFound
				}
			}
		});
	});
