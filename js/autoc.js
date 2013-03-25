define(function(require, exports, module) {
	var $pop, $bind, delay;
	require('jquery');
	require('<!--#echo var="static"-->css/mod/pop.css');
	$(function() {
		$("body").append('<ul id="autoc" class="autopop"></ul>');
		$pop = $("#autoc").on("mouseover", "li", function() {
			$pop.find(".pop").removeClass("pop");
			$(this).addClass("pop");
		}).on("mousedown", "li", function() {
			$bind.val($(this).find("b").text()).closest("form").trigger("submit");
			$pop.hide();
		});
	})
	var resize = function() {
		var offset = $bind.offset();
		$pop.css({
			left: offset.left,
			top: offset.top + $bind.outerHeight() + 2,
			width: $bind.outerWidth()
		});
	}
	$.fn.autoC = function(url) {
		return $(this).each(function() {
			var l = 0,
				delay = 0,
				$t = $(this).attr("autocomplete", "off").on({
				focus: function() {
					$bind = $t;
					$pop.html("<li class='pop'><b>" + $t.val() + "</b></li>");
					resize();
					$(window).on("resize", resize);
				},
				keydown: function(e) {
					switch (e.which) {
						case 9:
							$pop.hide();
							break;
						case 13:
							$t.val($pop.hide().find(".pop b").text());
							break;
						case 38:
							var $p = $pop.find(".pop").removeClass("pop");
							if ($p.index() > 0) $p.prev().addClass("pop");
							else $pop.find("li:last").addClass("pop");
							return false;
						case 40:
							var $p = $pop.find(".pop").removeClass("pop");
							if ($p.index() < l) $p.next().addClass("pop");
							else $pop.find("li:first").addClass("pop");
							return false;
					}
				},
				keyup: function(e) {
					switch (e.which) {
						case 9:
						case 38:
						case 40:
							return false;
							break;
						default:
							var val = $t.val(),
								str = "<li class='pop'><b>" + val + "</b></li>";
							if (val == "" || e.which == 13) $pop.hide();
							else {
								if (delay) clearTimeout(delay);
								delay = setTimeout(function() {
									$.ajax({
										url: url,
										dataType: 'jsonp',
										data: {
											key: val
										}
									}).done(function(data) {
										if (data.length > 0) {
											d=data;
											var i = 0,
												html = str;
											l = data.length;
											for (; i < l; i++) {
												html += '<li><b>' + data[i].name + '</b> ' + data[i].address + '</li>';
											}
											$pop.html(html).show();
										} else {
											$pop.hide();
										}
									});
								}, 400)
							}
							$pop.html(str);
					}
				},
				blur: function() {
					$pop.hide();
					$(window).off("resize", resize);
				}
			})
		})
	}
});