

   <section class="vertical-center-4 slider">
   
   {{#each   slideData}}
      <div>
        <a href="{{this.redirectUrl}}"> <img src="{{this.imageURL}}" alt="{{this.altText}}"></a>
        {{#if this.button}}
        <div class="slick-btn-section">
          <small class="slick-button center">
            <a href="{{this.redirectUrl}}">
              {{this.button}}
            </a>
          </small>
        </div>
        {{/if}}
      </div>
    {{/each}}
   
    </section>


<!--


  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->