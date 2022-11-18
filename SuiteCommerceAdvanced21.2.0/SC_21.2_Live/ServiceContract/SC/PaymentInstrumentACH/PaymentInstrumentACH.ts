/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

import { CollectionEventsDefinition } from '../../../Commons/Core/JavaScript/Collection';

export interface PaymentInstrumentACH {
    id?: number;
    type?: string | object;
    internalid?: number | string;
    mask?: string;
    paymentinstrumenttype?: string;
    bankname?: string;
    routingnumber?: string;
    ownername?: string;
    accounttype?: string | object;
    account?: string;
    default?: string;
    achaccounttype?: string;
    customerconsent?: string;
    limit?: string;
    paymentmethod?:
        | any
        | {
              id?: number;
              internalid?: number;
              imagesrc?: string[];
              name?: string;
              ACH?: any;
          };
    paymentmethods?;
    ACH?: any;
    consent?: boolean;
}

export interface CollectionEventsDefinitionACH<TCollection>
    extends CollectionEventsDefinition<TCollection, {}> {
    add: (collection: TCollection) => void;
    remove: (collection: TCollection) => void;
    change: (collection: TCollection) => void;
    destroy: (collection: TCollection) => void;
    noconsent: (collection: TCollection) => void;
}
