define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	require('<!--#echo var="static"-->css/mod/drawstar.css');
	var $star = $("ul.drawStar"),
		html = (new Array(6)).join('<li></li><li class="halfStar"></li>');
	var drawStar = function(li, i) {
		li.slice(0, i).addClass("lightstar");
		if (i != 10) li.slice(i - 10).removeClass("lightstar");
	}
	return function() {
		$star.each(function() {
			var $t = $(this);
			$t.html(html);
			var $li = $t.find("li");
			if ($t.attr("data-starlength")) {
				var i = $t.attr("data-starlength");
				$t.mouseout(function() {
					drawStar($li, i);
				});
				$li.slice(0, i).addClass("lightstar");
			}
			if ($t.attr("data-url")) {
				$t.on("click", function() {
					$.ajax({
						url: $t.attr("data-url"),
						dataType: 'json',
						data: {
							id: $t.attr("data-id"),
							length: $t.find(".lightstar").length
						}
					}).done(function(data) {
						if (data.state == "succ") {
							$t.unbind().css("cursor", "default");
							drawStar($li, data.starlength);
						}
						alertM(data.alert, {
							cName: data.state
						});
					}).fail(function() {
						alertM("连接失败,请检查网络连接是否已断开", {
							cName: "error"
						})
					});
				}).css("cursor", "pointer")
				$li.mouseover(function() {
					drawStar($li, $(this).index() + 1);
				});
			}
		})
	}
});