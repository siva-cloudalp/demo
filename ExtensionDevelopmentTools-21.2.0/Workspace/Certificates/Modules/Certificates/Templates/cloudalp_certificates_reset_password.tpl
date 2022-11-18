<div class="certificates-reset-password">
<h2 class="certificates-forgot-password-title"> Reset Password </h2>
<form class="certificates-reset-password-form" method="POST" name="contact-form" novalidate>		
  <p class="certificates-reset-password-description"> Enter your comments below and we'll send you a link to reset your password. </p>
  <label>Send Email To Sales Manger : 
    <a href="#">  {{emailTo}}</a>
    </label>
  	<div class="certificates-reset-password-row" data-input="firstname" data-validation="control-group">
					<label class="certificates-reset-password-firstname-label" for="firstname">
							{{translate 'First Name'}}
							<small class="certificates-reset-password-form-required">*</small>
					</label>
					<input type="text" data-action="firstname"  class="certificates-reset-password-input-large" id="firstname" name="firstname" data-type="firstname" value="{{firstname}}">
						<p class="error-msg-fname"></p>
		</div>
  	<div class="certificates-reset-password-row" data-input="lastname" data-validation="control-group">
					<label class="certificates-reset-password-lastname-label" for="lastname">
						{{translate 'Last Name'}}
						<small class="certificates-reset-password-form-required">*</small>
					</label>
					<input type="text" data-action="lastname" class="certificates-reset-password-input-large" id="lastname" name="lastname" data-type="lastname" value="{{lastname}}">
						<p class="error-msg-lname"></p>
		</div>
  	<div class="certificates-reset-password-row" data-input="email" data-validation="control-group">
					<label class="certificates-reset-password-email-label" for="email">
							{{translate 'Email'}}
							<small class="certificates-reset-password-form-required">*</small>
					</label>
					<input type="email" data-action="enteremail" class="certificates-reset-password-input-large" id="email" placehloder="your@email.com" name="email" data-type="email" value="{{email}}" >
							<p class="error-msg-email"></p>
		</div>
  	<div class="certificates-reset-password-row" data-input="phone" data-validation="control-group">
					<label class="certificates-reset-password-phone-label" for="phone">
							{{translate 'Phone Number' phoneFormat}}
							<small class="certificates-reset-password-form-required">*</small>
					</label>
					<input type="tel" data-action="phone" class="certificates-reset-password-input-large" id="phone" name="phone" data-type="phone" value="{{phone}}">
						<p class="error-msg-ph"></p>
		</div>
  <div class="remove-comments">
		<label class="certificates-reset-password-comments-label" for="comments">
				{{translate 'Comments'}}
		</label>
  <textarea id="comments" class="certificates-reset-password-group-text" name="comments">
  </textarea>
  </div>
  
  <div class="status-email-msg"></div>
  	<div class="certificates-reset-password-form-actions">
			<button type="submit" data-action="submit-reset-password" class="product-reviews-form-actions-button-submit">{{translate ' Send Email '}}</button>
		</div>
</form>
{{#if islogin }}
<a href="/login-register" class="login-register-forgot-password-sign-in" data-target=".register" data-action="sign-in-now"> Log in now </a>
{{/if}}
</div>