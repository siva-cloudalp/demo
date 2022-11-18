<form class="login-register-register-form" method="POST" novalidate>
	<input type="text" name="firstname"  id="register-firstname" class="login-register-register-form-input">
  <input type="text" name="lastname" id="register-lastname" class="login-register-register-form-input">
	<input type="email" name="email" id="register-email" class="login-register-register-form-input" placeholder="{{translate 'your@email.com'}}">
<div class="status-msg"></div>
	<div class="login-register-register-form-controls-group">
		<button type="submit" data-action="senddata"  class="login-register-register-form-submit">
			{{translate 'Create Account'}}
		</button>
	</div>
</form>
	

{{!----

----}}