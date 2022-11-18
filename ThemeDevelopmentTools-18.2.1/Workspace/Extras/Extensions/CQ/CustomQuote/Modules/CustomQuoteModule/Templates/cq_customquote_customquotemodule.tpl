<section id="print" class="customquotemodule-info-card">

<div class="title-container">
<div> <h1>{{title}}</h1></div>

<div>
  <button class="btn btn-primary epbtn" value = "Print"  {{!---- data-action="printing" ----}} onclick = "window.print()" >Print </button>
  <button class="btn btn-primary epbtn" data-action="openmailbox">Email </button>
  </div>
</div>
<p class="validitydate">{{date}} {{translate 'Quote is valid for 60 days'}}</p>
<div class="subtext-cotainer">
{{{subtext}}}
</div>

<table >
<thead >
<tr>
 	<th>Item</th>  
  <th>Item Number</th>
	<th>Quantity</th>
	<th>Price</th>
	<th>Total</th>
  </tr>
</thead>


<tbody>
{{#if lines}}
{{#each lines}}
<tr>
  <td class="firstcol">{{this.item.displayname}}</td>
  <td >{{this.item.internalid}}</td>
  <td >{{this.quantity}}</td>
  <td >{{this.rate}}</td>
  <td >{{this.amount}}</td>
  </tr>
  {{/each}}
{{/if}}
</tbody>


<tfoot>
<tr> <td></td><td></td><td></td> <td  >Subtotal</td><td>{{subtotal}}</td></tr>
<tr><td></td><td></td><td></td> <td  >Sales Tax</td><td>{{salestax}}</td></tr>
{{#if shippingrate}}
<tr><td></td><td></td><td></td> <td  >Shipping({{shippingrate}}%)</td><td>{{shippingcost}}</td></tr>
{{else}}
<tr><td></td><td></td><td></td> <td  >Shipping</td><td>{{shippingcost}}</td></tr>
{{/if}}
<tr><td></td><td></td><td></td> <td  >Total</td><td>{{total}}</td></tr>
</tfoot>


</table>

<p class="below-total">For AK and HI orders, add 15% shipping.</p>

<div class="notes-container">
{{{notes}}}
</div>
</section>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->