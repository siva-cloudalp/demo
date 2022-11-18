<section class="blogpostlist-container container">
    {{#if loading}}
    <h3>{{translate 'Loading'}}...</h3>
	
    {{else}}
    
		{{#if postsNotFound}}
			<p>{{postsNotFoundText}}</p>
		{{/if}}
		<div class="blogpostlist-list" data-view="PostList.Collection"></div>
    {{/if}}
</section>

