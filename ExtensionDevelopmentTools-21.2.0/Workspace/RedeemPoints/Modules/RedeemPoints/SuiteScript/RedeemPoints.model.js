define('Acme.RedeemPoints.RedeemPoints.model', [
  'SC.Model',
  'Utils',
  'underscore'
], function (
  SCModel,
  Utils,
  _
) {
  return SCModel.extend({
    // @property {String} name
    name: 'RedeemPointsmodel',
    getPointsList: function () {
      var Pointsobj = {};
      var srch = nlapiSearchRecord('customrecord_reward_points',null, [new nlobjSearchFilter('custrecord_userid',null,'is',nlapiGetUser())],[new nlobjSearchColumn('internalid')]);
    if(srch != null){
      var record = nlapiLoadRecord('customrecord_reward_points',srch[0].getId());
      var billAmount = record.getFieldValue('custrecord_user_billamount');
      var points = record.getFieldValue('custrecord_user_earning_points');
      var Expiredate = record.getFieldValue('custrecord_user_expire_date');

      Pointsobj.billCost = billAmount;
      Pointsobj.points = points;
      Pointsobj.date =  Expiredate ;
    
    }
  
    
      
    return  Pointsobj ;
    }
    ,updateRewardPoints:function(data){
      var UpdateData = data || "" ;
      return UpdateData ;
    }

  })
})

