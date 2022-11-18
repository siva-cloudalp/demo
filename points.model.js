define('points.model', [
  'SC.Model',
  'Profile.Model',
  'SC.Models.Init',
  'Utils',
  'underscore'
], function (
  SCModel,
  Profile,
  ModelsInit,
  Utils,
  _
) {
  return SCModel.extend({
    // @property {String} name
    name: 'points',
    CreateRewardPointsList: function (data) {
      var res ={};
    
      console.log("users-data", JSON.stringify(data));
      console.log("data-points", JSON.stringify(data.userId));
      var Expiredate = nlapiDateToString(nlapiAddMonths(new Date(),3));
      var srch = nlapiSearchRecord('customrecord_reward_points',null, [new nlobjSearchFilter('custrecord_userid',null,'is',data.userId)],[new nlobjSearchColumn('internalid')]);
      if(srch != null){
        var record = nlapiLoadRecord('customrecord_reward_points',srch[0].getId());
        var billAmount = parseInt(record.getFieldValue('custrecord_user_billamount')) + data.Total;
        var points =  parseInt(record.getFieldValue('custrecord_user_earning_points') ) + data.Points;
        record.setFieldValue('custrecord_user_billamount',billAmount);
        record.setFieldValue('custrecord_user_earning_points', points );
        record.setFieldValue('custrecord_user_expire_date',Expiredate );
        res.id = nlapiSubmitRecord(record);
      }
      else{
        var record = nlapiCreateRecord('customrecord_reward_points');
        record.setFieldValue('custrecord_userid',data.userId);
        record.setFieldValue('custrecord_user_email',data.userEmail);
        record.setFieldValue('custrecord_user_billamount',data.Total);
        record.setFieldValue('custrecord_user_earning_points',data.Points);
        record.setFieldValue('custrecord_user_expire_date',Expiredate );
        res.id = nlapiSubmitRecord(record);
      }
    
      res.data = data;
      return res
    }




  });
})


// var srch = nlapiSearchRecord('customrecord_reward_points',null, [new nlobjSearchFilter('custrecord_userid',null,'is','628')],[new nlobjSearchColumn('internalid')]);
// var record = nlapiLoadRecord('customrecord_reward_points',srch[0].getId());
//         record.setFieldValue('custrecord_user_billamount',500);
//         record.setFieldValue('custrecord_user_earning_points',50);

//        var  id = nlapiSubmitRecord(record);
// console.log(id)