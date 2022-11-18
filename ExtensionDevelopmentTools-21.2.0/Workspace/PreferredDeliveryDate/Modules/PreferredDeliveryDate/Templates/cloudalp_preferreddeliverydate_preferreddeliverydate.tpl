
<h2 class="preferreddelivery-title">{{translate 'Preferred Delivery Date'}}</h2>
<div id="preferreddelivery-container" class="preferreddelivery-container">
    {{#if isReview}}
        {{#if model.options.custbody_preferred_date}}
            <p>{{model.options.custbody_preferred_date}}</p>
        {{else}}
            <p>{{translate 'No date selected'}}</p>
        {{/if}}
    {{else}}
        <input class="preferreddelivery-input" id="date"   type="date" name="custbody_preferred_date"  data-todayhighlight="true"  value="{{model.options.custbody_preferred_date}}" placeholder="Pick up delivery date">
    {{/if}}
</div>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->