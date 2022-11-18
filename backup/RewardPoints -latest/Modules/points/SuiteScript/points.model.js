define('points.model', [
  'SC.Model',
  'Profile.Model',
  'SC.Models.Init',
  'Utils',
  'underscore',
  'Configuration'
], function (
  SCModel,
  Profile,
  ModelsInit,
  Utils,
  _,
  Configuration
) {
  return SCModel.extend({
    // @property {String} name
    name: 'points',
    CreateRewardPointsList: function (data) {
      var res ={};
      const months_to_expire = Configuration.get('RewardPoints.config');
      var Expiredate = nlapiDateToString(nlapiAddMonths(new Date(), months_to_expire));
      console.warn("data-date", JSON.stringify(Expiredate));
      var srch = nlapiSearchRecord('customrecord_reward_points',null, [new nlobjSearchFilter('custrecord_userid',null,'is',data.userId)],[new nlobjSearchColumn('internalid')]);
      if(srch != null){
        var record = nlapiLoadRecord('customrecord_reward_points',srch[0].getId());
        var billAmount = parseInt(record.getFieldValue('custrecord_user_billamount')) + data.Total;
        var points =  parseInt(record.getFieldValue('custrecord_user_earning_points') ) + data.Points;
        record.setFieldValue('custrecord_user_billamount',billAmount);
        record.setFieldValue('custrecord_user_earning_points', points );
        if (months_to_expire != 0){
          record.setFieldValue('custrecord_user_expire_date',Expiredate );
        }
        res.id = nlapiSubmitRecord(record);
      }
      else{
        var record = nlapiCreateRecord('customrecord_reward_points');
        record.setFieldValue('custrecord_userid',data.userId);
        record.setFieldValue('custrecord_user_email',data.userEmail);
        record.setFieldValue('custrecord_user_billamount',data.Total);
        record.setFieldValue('custrecord_user_earning_points',data.Points);
        if (months_to_expire != 0){
          record.setFieldValue('custrecord_user_expire_date',Expiredate );
        }
        res.id = nlapiSubmitRecord(record);
      }
      data.Expiredate = Expiredate;
      res.Data = data;
      return res ;
    }
    ,getRewardPointsList: function () {
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


// var srch = nlapiSearchRecord('customrecord_reward_points',null, [new nlobjSearchFilter('custrecord_userid',null,'is','628')],[new nlobjSearchColumn('internalid')]);
// var record = nlapiLoadRecord('customrecord_reward_points',srch[0].getId());
//         record.setFieldValue('custrecord_user_billamount',500);
//         record.setFieldValue('custrecord_user_earning_points',50);

//        var  id = nlapiSubmitRecord(record);
// console.log(id)
