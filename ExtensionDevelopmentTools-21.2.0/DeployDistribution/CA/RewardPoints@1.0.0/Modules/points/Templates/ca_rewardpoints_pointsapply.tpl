<section class="redeempoints-info-card">
  {{#if Redeemdata }} 
      <div class="redeem-points-container">
    <span class="redeem-points-code">
      <span class="redeem-promocode-list-item-code-label">Points Redeem : </span>
      <span class="redeem-points-value">{{Redeemdata.points}}</span>
    </span>
    <a href="#" data-action="remove-redeem-points" data-id="">
      <span class="redeem-promocode-list-item-remove-action"><i></i>
      </span>
    </a>
  </div>
   {{/if}}
</section>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->