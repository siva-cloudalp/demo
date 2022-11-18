<div class="order-wizard-module-search-for-address">

     <div class="site-search" data-type="site-search">
        <div class="site-search-content col-sm-12">
            <div class="site-search-content-input">
                <span class="twitter-typeahead" style="position: relative; display: inline-block;">
                    <input data-action="searchAddresss" class="itemssearcher-input typeahead tt-hint" type="search"  style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1;" />
                    <input data-action="searchAddress" class="itemssearcher-input typeahead tt-input" placeholder="Enter your Address Zipcode" type="search" style="position: relative; vertical-align: top; background-color: transparent;"/>
                    <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre;"></pre>
                    <div class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
                        <div class="tt-dataset tt-dataset-0"></div>
                    </div>
                </span>
            </div>
                <p class = "error" id = "add_here" name="csv_status"></p> 
            <a class="site-search-input-reset" data-type="search-reset">
                <i class="site-search-input-reset-icon"></i>
            </a>
        </div>
        <button class="site-search-button-submit" type="submit" data-action="onSubmit">
            <i class="site-search-input-icon"></i>
        </button>
    </div>

   <div class="table-format-data-search-for-address ">
        {{!-- {{#each addressDetails}}
           <div class="table-format-content">
               <input type="radio" name="address-options-billaddress" data-action="saved-result-radio-button" class="address-details-selector-option" data-id="{{internalid}}" value="{{internalid}}">
         <address>
             <div class="address-details-info">
                <p class="address-details-container-multiselect-address-title" data-name="company">
                    <b>{{fullname}}</b>
                </p>
                <p class="address-details-container-multiselect-address-details-{{#if addr1}}addr1{{/if}}{{#if addr2}}addr2{{/if}}{{#if addr3}}addr3{{/if}}" data-name="{{#if addr1}}addr1{{/if}}{{#if addr2}}addr2{{/if}}{{#if addr3}}addr3{{/if}}">
                   {{#if addr1}}{{addr1}}{{/if}}{{#if addr2}}{{addr2}}{{/if}}{{#if addr3}}{{addr3}}{{/if}}
                </p>
                <p class="address-details-container-multiselect-address-line">
                    <span class="address-details-container-multiselect-address-details-city" data-name="city">{{city}}&nbsp;</span>
                    <span class="address-details-container-multiselect-address-details-state" data-name="state">{{state}}&nbsp;</span>
                    <span class="address-details-container-multiselect-address-zip" data-name="zip">{{zip}}</span>
                </p>
                <p class="address-details-country" data-name="country">{{country}}</p>
                <p class="address-details-phone" data-name="phone">
                    <a href="tel:{{phone}}">{{phone}}</a>
                </p>
            </div>
          </address>
       </div>
       {{/each}}
        
        <a href="/addressbook/new" data-toggle="show-in-modal" class="cust">
            <div class="content-add-address">
               <i class="plus-font"></i>
               <p>Add Address</p>       
            </div>
        </a> --}}
      
   </div>

</div>