/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Loggers.Appender.Sensors.Cart"/>
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');

export function cart(): string {
    const cartLines = LiveOrderModel.getInstance().get('lines');
    return cartLines ? `${cartLines.length}` : '';
}
