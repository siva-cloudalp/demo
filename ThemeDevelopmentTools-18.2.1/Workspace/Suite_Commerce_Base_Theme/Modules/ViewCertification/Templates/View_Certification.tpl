
<div class="view-certifi-container">
  {{#if NoDataFound}}
    <div class="view-certifi-container-nodata-found">
      <h5>No Certificates Availabel for this customer</h5>
    </div>
    {{else}}
      <ul class="view-certifi-list">
    {{#each records}} 
      <a href="http://demo.cloudalp.nl/ViewCertificates/{{this.pdf}}" target="_blank" data-id="{{this.id}}" class="view-certifi-link" download>
        <li class="view-certifi-list-data">
        {{this.pdf}}
      </li>
      </a>
    {{/each}}
  </ul>
  {{/if}}
</div>


{{!-- to customize this templates use the following properties
custrecord_customer_list.name // string
custrecord_pdf_doc_1.name
custrecord_pdf_doc_1.internalid
custrecord_pdf_doc_2.name
custrecord_pdf_doc_2.internalid
custrecord_pdf_doc_3.name
custrecord_pdf_doc_3.internalid
custrecord_pdf_doc_4.name
custrecord_pdf_doc_4.internalid

 --}}