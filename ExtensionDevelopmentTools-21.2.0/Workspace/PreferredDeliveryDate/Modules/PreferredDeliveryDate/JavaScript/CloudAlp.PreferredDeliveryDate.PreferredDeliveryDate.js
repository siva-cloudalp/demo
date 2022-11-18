define('CloudAlp.PreferredDeliveryDate.PreferredDeliveryDate'
, [
    'PreferredDelivery.PreferredDelivery.View'
  ]
, function
  (
    PreferredDeliveryDateView
  )
{
  'use strict';

  return  {
    mountToApp: function mountToApp (container)
    {
      var checkout = container.getComponent('Checkout');

      checkout.addModuleToStep(
      {
        step_url: 'opc' // the place you want to add it to, think of this like an ID. You can log the step or group info to the console to find the one you're looking for
      , module: {
          id: 'PreferredDeliveryView' // the ID you want to give it
        , index:7 // its place in the order of modules (if it matches an existing one, it is pushed down)
        , classname: 'PreferredDelivery.PreferredDelivery.View' // the name of the thing you want to render (ie the value in the view's define statement)

        }
      });

      checkout.addModuleToStep(
      {
        step_url: 'review'
      , module: {
          id: 'PreferredDeliveryView'
        , index:5
        , classname: 'PreferredDelivery.PreferredDelivery.View'
        }
      });
    }
  };
});