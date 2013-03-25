define(function(require, exports, module) {
	require('jquery');
	$(function() {
		var $list = $('img[data-src]');
		if ($list.length > 0) {
			$list.attr('src', '<!--#echo var="static"-->images/common/lazy.gif').css('background', 'url(<!--#echo var="static"-->images/common/loading.gif) no-repeat 50% 50%');
			var $w = $(window),
				delay = 0;
			var scrollLoad = function() {
				if (delay) clearTimeout(delay);
				setTimeout(function() {
					var h = $w.height() + $w.scrollTop();
					$list.each(function() {
						var $t = $(this);
						if ($t.offset().top < h) {
							$list = $list.not($t.attr('src', $t.attr('data-src')));
						}
					})
				}, 400)
			}
			scrollLoad();
			$(window).on('scroll resize', scrollLoad);
		}
	})
});