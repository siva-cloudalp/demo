<section class="rewardpoints-info-card">
    {{!-- <span class="rewardpoints-info-card-content">
      {{message}}
      points
    </span> --}}
  {{#if RewardPoints}}
  <p class="rewardpoints-confirmation-module">
    you earned a reward points
    <strong>
      <a>  {{RewardPoints}}</a>
    </strong>
  </p>
{{/if}}
</section>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->