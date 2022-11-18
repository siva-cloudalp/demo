	{{#if availablePoints}}
		{{#if isPoints}}
	<div class="points-form">
		<div class="points-form-expander-head">
			<a class="points-form-expander-head-toggle collapsed" data-toggle="collapse" data-target="#points-form" aria-expanded="false" aria-controls="order-wizard-promocode">
				{{translate 'Available Redeem points'}} {{this.availablePoints}}
				{{!-- <i class="points-form-tooltip" data-toggle="tooltip" title="{{translate '<b>Redeem Points</b><br>To redeem a reward points, simply enter your information and we will apply the offer to your purchase during checkout.'}}"></i> --}}
				<i class="points-form-expander-toggle-icon"></i>
			</a>
		</div>
		<div class="points-form-expander-body collapse" id="points-form"  data-type="points-form-container" data-action="show-points-form-container" aria-expanded="false" data-target="#points-form" >
			<div class="points-form-expander-container">
				{{!-- <span class="points-available">Available Redeem points : {{this.availablePoints}}  </span> --}}
				<form class="points-code-form" data-action="apply-points">
          <div class="points-form-summary-grid">
            <div class="points-form-summary-container-input">
              <div class="">
              <input type="text" name="pointsform" id="pointsform" class="points-form-summary-input" value="">
              </div>
              </div>
              <div class="points-form-summary-promocode-container-button">
    <button type="" data-action="applyForm-points" class="points-form-summary-button-apply-promocode">
				Apply
			</button>
      </div>
      </div>
      <div data-type="pointsform-error-placeholder">
      </div>
      </form>
			</div>
		</div>
	</div>
{{/if}}
{{/if}}

