<section id="size-chart-details" class="size-chart-details-section">
  <div id="size-chart-data-wrapper" class="size-chart-data-wrapper {{#if isRenderedInModal }} rendered-in-modal {{else}} container {{/if}}">
    {{# unless isRenderedInModal }}
      <div class="page-title">
        <h1>{{pageTitle}}</h1>
      </div>
    {{/unless}}
    <div class="size-chart-container" id="size-chart-{{sizeChartId}}" data-view="SizeCharts.View">
    </div>
  </div>
</section>
