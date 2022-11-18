<section class="print-quote container">
  <h1><img class="header-logo-image" src="https://tci.suitecentric.com/c.1312783_SB1/TCI/SC-Teachers-Aconcagua/img/tci-logo.svg" alt="">
    {{text}} 
    <span class="print-quote-cta">
      <button class="btn btn-primary" data-action="print-quote">Print</button>
      <button class="btn btn-primary" data-action="mail-quote">Email</button>
      {{!-- <button class="btn btn-primary" data-action="email-quote">Email</button> --}}
    </span>
  </h1>
   <div class="collapse" data-collapse-content>  
  <form action="#" class="quoting-new-form" data-quoting-form novalidate>
		<div class="quoting-new-form-controls-group" data-validation="control-group">
			<label class="quoting-new-form-label" for="name">
				{{translate 'Name <small class="quoting-new-form-required">*</small>'}}
			</label>
			<div class="quoting-new-form-controls" data-validation="control">
				<input data-action="text" autofocus type="text" name="name" id="name" class="quoting-new-form-input" value="" maxlength="300"/>
			</div>
		</div>

		<div class="email" data-validation="control-group">
			<label for="email" class="quoting-new-form-label">
				{{translate 'Email <small class="quoting-new-form-required">*</small>'}}
			</label>
			<div class="quoting-new-form-controls" data-validation="control">
				<input type="email" name="email" id="email" placeholder="{{translate 'yourname@company.com'}}" data-quoting-email class="quoting-new-form-input" value="" maxlength="300"/>
			</div>
		</div>
    
		<div class="quoting-new-form-controls-group" data-validation="control-group">
			<label  class="quoting-new-form-label" for="message">
				{{translate 'Message <small class="quoting-new-form-required">*</small>'}}
			</label>
			<div class="quoting-new-form-controls" data-validation="control">
				<textarea name="message" id="message" class="quoting-new-form-textarea"></textarea>
			</div>
		</div>

		<div class="quoting-new-form-controls-group">
			<button type="submit" data-action="send-email" class="btn btn-primary quoting-new-button-submit">{{translate 'Submit'}}</button>
		</div>
	</form>
  </div>
  
  <!-- {{{subtext}}} -->
  <p>Thank you for your interest in TCI products. Quotes generated online through our website are not stored or available for TCI employees to access and/or view. Please read our FAQs at <a href='https://www.teachtci.com/faqs' target='_blank'> https://www.teachtci.com/faqs </a> if you need further assistance.</p>
  
  <table class="item-table">
    <thead>
      <th>Item</th>
      <th>Item Number</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </thead>
    <tbody>
    {{#each lines}}
    <tr>
      <td>
      {{!-- {{#if item.matrix_parent}}
        {{item.matrix_parent.storedisplayname2}}
      {{else}}
        {{item.storedisplayname2}}
      {{/if}}  --}}
      {{item.salesdescription}}
      </td>
      <td>{{item.itemid}}</td>
      <td>{{quantity}}</td>
      <td>{{item.pricelevel1_formatted}}</td>
      <td>{{total_formatted}}</td>
    </tr>  
    {{/each}}
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Subtotal</td>
      <td>{{summary.subtotal_formatted}}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Shipping</td>
      <td>{{summary.shippingcost_formatted}}</td>
    </tr>      
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Total</td>
      <td>{{summary.total_formatted}}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>For AK and HI orders, add 15% shipping</td>
      <td></td>
    </tr>
  </tbody>    
  </table> 
  
  {{{finePrint}}}
  
</section>



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
