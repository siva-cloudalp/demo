<div class="certificates-reset-password">
<h2 class="certificates-forgot-password-title"> Reset Password </h2>
<form class="certificates-reset-password-form" method="POST" name="contact-form" novalidate>		
  <p class="certificates-reset-password-description"> Enter your comments below and we'll send you a link to reset your password. </p>
  <label>Send Email To Sales Manger : 
    <a href="#">  {{emailTo}}</a>
    </label>
  <div class="remove-comments">
  <textarea id="text" class="certificates-reset-password-group-text" name="text">
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