<div class="certificates-container">
  {{#if NoDataFound}}
    <div class="certificates-nodata-found">
      <h5>No Certificates Availabel for this customer</h5>
    </div>
    {{else}}
      <ul class="certificates-list">
    {{#each records}}
    
        <li class="certificates-data">
          <span class="certificates-pdf-name">{{this.file}}</span>
          <a href="http://demo.cloudalp.com/ViewCertificates/{{this.pdf}}" target="_blank" data-id="{{this.id}}" class="certificates-link" download> download</a>
      </li>
    
    {{/each}}
  </ul>
  {{/if}}
</div>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder

custrecord_customer_list.name // string
custrecord_pdf_doc_1.name
custrecord_pdf_doc_1.internalid

-->