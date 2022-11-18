<section class="slideshow-cct-container">
    <div class="slideshow-slider">
        {{#each slides}}
            <div class="slideshow-slide">
                <div class="content {{imgOverlayClass}}">
                    <div class="crop-height bg-image-wedding bg-center-center {{opacityClass}}" title="{{altText}}" style="background-image: url({{imageURL}}); {{#if ../sectionHeight}}height:{{../sectionHeight}}px;{{/if}}">
                        <img class="scale transparent" src="{{imageURL}}" alt="{{altText}}" />
                    </div>
                    <div class="content-box {{textAlignClass}} {{#if ../animate}}for-animate{{/if}}">
                        {{#if text}}
                            <div class="slider-text {{textColorClass}}">{{{text}}}</div>
                        {{/if}}
                        {{#if btnText}}
                            <div class="button-container">
                                <a href="{{btnLink}}" target="_blank" class="{{btnStyleClass}}">{{btnText}}</a>
                            </div>
                        {{/if}}
                    </div>
                </div>
            </div>
        {{/each}}
    </div>
</section>