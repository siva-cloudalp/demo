<div class="container-fluid blogpost-container">

    {{#if loading}}
    <h3>{{translate 'Loading'}}...</h3>
    {{else}}
	
		<div class="blogpost-heading">
			<h1 class="blogpost-title">
				{{title}}
			</h1>

			<p class="blogpost-author-date">
				By {{author}} | {{#if datePublished}}{{datePublished}} | {{/if}}{{#if category}}{{category}}{{/if}}
			</p>
		</div>
		<div class="blogpost-content-row">
			<div class="col-sm-9">
				{{#if headerImage}}
				<div class="blogpost-heading-image">
					<img src="{{resizeImage headerImage headerImageResizeId}}" alt="{{headerImageAlt}}" title="{{headerImageAlt}}" />
				</div>
				{{/if}}
				<div class="blogpost-content">
					{{{content}}}
				</div>
			</div>
			<div class="col-sm-3 blog-recent-post">
			
				<h4>Recent Posts</h4>	
				{{#each list}}<a href="{{this.url}}">{{this.title}}</a>{{/each}}
			</div>
        </div>
    {{/if}}

</div>
