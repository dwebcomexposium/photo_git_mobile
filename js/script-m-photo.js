;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var winO;

	$doc.ready(function() {
		$win.on('load', function() {
			// Init Main Slider
			if( $('.front .list-articles.selection .la-slider').length ) {
				var $sliderMain = $('.front .list-articles.selection .la-slider').clone();
				$('#zone1 .list-articles.selection .la-slider').detach();
				$sliderMain.prependTo('.front #zone1 .list-articles.selection');

				$sliderMain.add( $sliderMain.find('*') ).removeAttr('style');

				$('<div class="slider-paging"></div>').appendTo( $('.front #zone1 .list-articles.selection .la-slider') );

				$sliderMain.find('.slider-content').carouFredSel({
					circular: true,
					infinite: true,
					responsive: true,
					swipe: true,
					auto: {
						play: true,
						fx: 'slide',
						duration: 500,
						timeoutDuration: 5000
					},
					scroll: {					
						fx: 'slide',
						duration: 500
					},
					pagination: {
						container: '#zone1 .list-articles.selection .la-slider .slider-paging',
						anchorBuilder: true
					},
					onCreate: function() {
						$('.list-articles.selection .la-slider .slider-content').addClass('show');
					}
				});
			}

			$('<div class="slider-paging"></div>').appendTo( $('.front .section-links') );

			// Init Links Slider
			if( $('.list-links').length ) {
				$('.list-links').carouFredSel({
					circular: true,
					infinite: true,
					responsive: true,
					swipe: true,
					auto: {
						play: false,
						fx: 'slide',
						duration: 500,
						timeoutDuration: 5000
					},
					scroll: {					
						fx: 'slide',
						duration: 500
					},
					pagination: {
						container: '#zone1 .section-links .slider-paging',
						anchorBuilder: true
					}
				})
			}

			// Init Main Slider
			if( $('.front .list-articles.actus .la-slider').length ) {
				var $sliderMain = $('.front .list-articles.actus .la-slider').clone();
				$('#zone1 .list-articles.actus .la-slider').detach();
				$sliderMain.appendTo('.front #zone1 .list-articles.actus');

				$sliderMain.add( $sliderMain.find('*') ).removeAttr('style');

				$('<div class="slider-paging"></div>').appendTo( $('.front #zone1 .list-articles.actus .la-slider') );

				$sliderMain.find('.slider-content').carouFredSel({
					circular: true,
					infinite: true,
					responsive: true,
					swipe: true,
					auto: {
						play: false,
						fx: 'slide',
						duration: 500,
						timeoutDuration: 5000
					},
					scroll: {					
						fx: 'slide',
						duration: 500,
						onBefore: function(data) {
							$sliderMain.find('.active').removeClass('active');
													
						},
						onAfter: function(data) {
							$sliderMain.find('.la-item').eq(0).addClass('active');
						}
					},
					pagination: {
						container: '#zone1 .list-articles.actus .la-slider .slider-paging',
						anchorBuilder: true
					},
					onCreate: function(data) {
						var currentIndex = data.items.index();
						var imgH = $sliderMain.find('img').height();
						var topO = imgH - 40;

						$sliderMain.find('.la-item').eq(currentIndex).addClass('active');
						$sliderMain.find('.slider-paging').css('top', topO);
					}					
				});
			}

			if( $('.gla-item').length ) {
				$('.gla-item').each(function() {
					var url = $(this).find('img').attr('src');

					$(this).find('img').wrap('<div class="gla-item-image"></div>');
					$(this).find('.gla-item-image').css('background-image', 'url(' + url + ')');
				});
			}

			if( $('.article-wrapper .article-intro').length ) {
				$('.article-wrapper .article-intro').clone().addClass('cloned').insertAfter('.article-wrapper .article-title .at-content');
			}

			if( $('.article-wrapper .article-title img').length ) {
				$('.article-wrapper .article-title img').wrap('<div class="at-title-img"></div>');
			}

			if( $('.article-wrapper .article-content h4').length ) {
				$('.article-wrapper .article-content h4').wrapInner('<span></span>');
			}
		});

		$win.on('load scroll', function() {
			if( $win.scrollTop() > 0 ) {
				$('.header-bar').addClass('fixed');
			} else {
				$('.header-bar').removeClass('fixed');
			}
		});

		$('.sb-menu-trigger').on('click', function() {
			$('.main-navigation').addClass('mn-visible');
		});

		// Toggle Mobile Subnav
		$('.mn-item-has-submenu > a').unbind('click');
		$('.mn-item-has-submenu > a').on('click', function(event) {
			event.preventDefault();

			$(this).next('.mn-menu-submenu').slideToggle()
				.parent().siblings().find('.mn-menu-submenu').slideUp();
		});

		// Close Main Navigation
		$('.site-banner .main-navigation').on('click', function(event) {
			event.preventDefault();

			$('.sb-menu-trigger').removeClass('is-open');
			$('.main-navigation').removeClass('mn-visible');
		});
	});
})(jQuery, window, document);
