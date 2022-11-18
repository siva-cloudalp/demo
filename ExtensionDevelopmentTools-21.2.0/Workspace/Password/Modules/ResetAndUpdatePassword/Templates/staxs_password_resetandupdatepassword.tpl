<div class="resetandupdatepassword-reset-password">
<h2 class="resetandupdatepassword-forgot-password-title"> Reset Password </h2>
{{#if islogin }}
<form class="resetandupdatepassword-reset-password-form" method="POST" name="contact-form">		
  	<div class="resetandupdatepassword-reset-password-row" data-input="firstname" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-firstname-label" for="firstname">
							{{translate 'First Name'}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="text" data-action="firstname"  class="resetandupdatepassword-reset-password-input-large" id="firstname" name="firstname" data-type="firstname" value="{{firstname}}">
						<p class="error-msg-fname"></p>
		</div>
  	<div class="resetandupdatepassword-reset-password-row" data-input="lastname" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-lastname-label" for="lastname">
						{{translate 'Last Name'}}
						<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="text" data-action="lastname" class="resetandupdatepassword-reset-password-input-large" id="lastname" name="lastname" data-type="lastname" value="{{lastname}}">
						<p class="error-msg-lname"></p>
		</div>
  	<div class="resetandupdatepassword-reset-password-row" data-input="email" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-email-label" for="email">
							{{translate 'Email'}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="email" data-action="enteremail" class="resetandupdatepassword-reset-password-input-large" id="email" placehloder="your@email.com" name="email" data-type="email" value="{{email}}" >
							<p class="error-msg-email"></p>
		</div>
  	<div class="resetandupdatepassword-reset-password-row" data-input="phone" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-phone-label" for="phone">
							{{translate 'Phone Number' phoneFormat}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="tel" data-action="phone" class="resetandupdatepassword-reset-password-input-large" id="phone" name="phone" data-type="phone" value="{{phone}}">
						<p class="error-msg-ph"></p>
		</div>
  <div class="remove-comments">
		<label class="resetandupdatepassword-reset-password-comments-label" for="comments">
				{{translate 'Comments'}}
		</label>
  <textarea id="comments" class="resetandupdatepassword-reset-password-group-text" name="comments">
  </textarea>
  </div>
  <div class="status-email-msg"></div>
  	<div class="resetandupdatepassword-reset-password-form-actions">
			<button type="submit" data-action="submit-reset-password" class="resetandupdatepassword-actions-button-submit">{{translate ' Send Email '}}</button>
		</div>
</form>
<a href="/login-register" class="login-register-forgot-password-sign-in" data-target=".register" data-action="sign-in-now"> Log in now </a>
{{else}}
<form class="resetandupdatepassword-reset-password-form" method="POST" name="contact-form">	
  {{#if profile.isLoggedIn}}	
  	<div class="resetandupdatepassword-reset-password-row" data-input="firstname" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-firstname-label" for="firstname">
							{{translate 'Fisrt Name'}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="text" data-action="name"  class="resetandupdatepassword-reset-password-input-large" id="fname" name="Fname"  value="{{profile.firstname}}" readonly>
		</div>
  	<div class="resetandupdatepassword-reset-password-row" data-input="firstname" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-firstname-label" for="firstname">
							{{translate 'Last Name'}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="text" data-action="lname"  class="resetandupdatepassword-reset-password-input-large" id="lname" name="Lname"   value="{{profile.lastname}}" readonly>
		</div>

  	<div class="resetandupdatepassword-reset-password-row" data-input="email" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-email-label" for="email">
							{{translate 'Email'}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="email" data-action="enteremail" class="resetandupdatepassword-reset-password-input-large" id="email" name="Email" placehloder="your@email.com"  data-type="email" value="{{profile.email}}" readonly>
		</div>
  	<div class="resetandupdatepassword-reset-password-row" data-input="phone" data-validation="control-group">
					<label class="resetandupdatepassword-reset-password-phone-label" for="phone">
							{{translate 'Phone Number' phoneFormat}}
							<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<input type="tel" data-action="phone" class="resetandupdatepassword-reset-password-input-large" id="phone" name="Phone"  data-type="phone" value="{{profile.phone}}" readonly>
		</div>
  <div class="remove-comments">
		<label class="resetandupdatepassword-reset-password-comments-label" for="comments">
				{{translate 'Comments'}}
		</label>
  <textarea id="comments" class="resetandupdatepassword-reset-password-group-text" name="comments">
  </textarea>
  </div>
  <div class="status-email-msg"></div>
  	<div class="resetandupdatepassword-reset-password-form-actions">
			<button type="submit" data-action="submit-reset-password-myaccount" class="resetandupdatepassword-actions-button-submit">{{translate ' Send Email '}}</button>
		</div>
    {{/if}}
</form>
{{/if}}
</div>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->