define('PreferredDelivery.PreferredDelivery.View'
, [
    'Wizard.Module'

  , 'cloudalp_preferreddeliverydate_preferreddeliverydate.tpl'
  ]
, function (
    WizardModule

  ,cloudalp_preferreddeliverydate_preferreddeliverydate_tpl
  )
{
  'use strict';

  // We have to use the Wizard.Module class because it is special for the checkout
  return WizardModule.extend({

    template:cloudalp_preferreddeliverydate_preferreddeliverydate_tpl
	 
  , getContext: function getContext()
    {	

$(document).ready(function() {
  var dateInput = $('input[name="date"]'); // Our date input has the name "date"
  var container = $('.preferreddelivery-container').length > 0 ? $('.preferreddelivery-container').parent() : 'body';
  dateInput.datepicker({
    container:container,
    autoclose:true,
    startDate:truncateDate(new Date())
  });

  $('#date').datepicker('setStartDate', truncateDate(new Date()));
	function truncateDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
});
 
      return {
        // We're going to use this to determine whether the shopper is either inputting details or reviewing them. This means we can reuse the template, showing an input for the main checkout step, and a paragraph tag for when they're reviewing before placing an order.
        isReview: this.step.step_url == 'review'
      };
    }
  });
});