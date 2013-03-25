define(function(require, exports, module) {
	require('jquery');
	$.fn.required = function(callback) {
		return $(this).on("focus", "input", function() {
			var $t = $(this);
			$t.addClass("focus").removeClass("error");
			if ($t.val() == $t.attr("data-val")) {
				$t.val("");
			}
		}).on("blur", "input", function() {
			var $t = $(this);
			$t.removeClass("focus");
			if ($t.val() == "") {
				$t.val($t.attr("data-val"));
			}
		}).on("submit", function() {
			var suc = 1,
				delay = 1;
			$(this).find("input").each(function() {
				var $t = $(this);
				if ($t.attr("data-required") && ($t.val() == "" || $t.val() == $t.attr("data-val"))) {
					if (suc & delay) {
						clearTimeout(delay);
						delay = setTimeout(function() {
							$t.focus();
						}, 500);
					}
					suc = 0;
					$t.addClass("error");
					setTimeout(function() {
						$t.removeClass("error");
					}, 200);
					setTimeout(function() {
						$t.addClass("error");
					}, 400);
				}
			})
			if (suc) {
				if (Object.prototype.toString.apply(callback) === "[object Function]") return callback();
			} else return false;

		})
	}
});