<div class="order-wizard-module-payingwith-step">
    <div class="order-wizard-module-payingwith-options-container">
        <div>
            <input type="radio" class="order-wizard-module-payingwith-option" id="order-wizard-module-payingwith-option-schoolcc" name="order-wizard-module-payingwith-option" value="1" {{#if payingWithSchoolCreditCard}}checked {{/if}} />
            <label for="order-wizard-module-payingwith-option-schoolcc">A School Credit Card</label>
        </div>
        <div>
            <input type="radio" class="order-wizard-module-payingwith-option" id="order-wizard-module-payingwith-option-purchaseorder" name="order-wizard-module-payingwith-option" value="purchaseOrder" {{#if payingWithPurchaseOrder}}checked {{/if}} />
            <label for="order-wizard-module-payingwith-option-purchaseorder">A Purchase Order (Not Available for International Orders)</label>
        </div>
        {{#unless hidePersonalCreditCardOption}}
        <div>
            <input type="radio" class="order-wizard-module-payingwith-option" id="order-wizard-module-payingwith-option-personalcc" name="order-wizard-module-payingwith-option" value="2" {{#if payingWithPersonalCreditCard}}checked {{/if}} />
            <label for="order-wizard-module-payingwith-option-personalcc">A Personal Credit Card</label>
        </div>
        {{/unless}}
    </div>
</div>
