define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	$.fn.pk = function(length, url, name) {
		var $w = $(window);
		$("body").append('<div id="pkCon"><div class="hided"></div><div class="show"><h4>' + name + '对比</h4><ul><li>请先选择需要对比的' + name + '，<br>最多可同时对比' + length + '个' + name + '</li><li><button class="db"></button><button class="qk"></button></li></ul></div></div>')
		var $pk = $("#pkCon").css("top", $w.scrollTop() + $w.height() / 2 - 99);
		$pk.on("click", "div.hided", function() {
			$pk.addClass("on");
		}).on("click", "h4", function() {
			$pk.removeClass("on");
		}).on("click", "em", function() {
			$(this).parent().remove();
			if ($pk.find("li").length == 2) $pk.find("li").eq(0).show()
			$.cookie("db", $pk.find("ul").html());
		}).on("click", "button.qk", function() {
			$pk.find("ul").html('<li>请先选择需要对比的' + name + '，<br>最多可同时对比' + length + '个' + name + '</li><li><button class="db"></button><button class="qk"></button></li>');
			$.cookie("db", "", "")
		}).on("click", "button.db", function() {
			if ($pk.find("li").length > 3) {
				var href = [];
				$pk.find("a").each(function() {
					href.push($(this).attr("data-val"))
				});
				setTimeout(function() {
					window.location.href = url + href.join("-") + "/";
				}, 99)
			}
		});
		if ($.cookie("db")) {
			$pk.addClass("on").find("ul").html($.cookie("db"));
		}
		$(this).on("click", function() {
			var $t = $(this);
			$pk.addClass("on");
			if ($pk.find("li").length < length + 2) {
				var bl = 1;
				$pk.find("a").each(function() {
					if ($t.attr("data-val") == $(this).attr("data-val")) {
						alertM("请勿选择重复" + name, {
							cName: "error"
						});
						bl = 0;
						return false;
					}
				})
				if (bl) {
					$pk.find("li").eq(0).hide().after('<li><em></em><a data-val="' + $t.attr("data-val") + '" href="' + $t.attr("data-url") + '">' + $t.attr("data-name") + '</a></li>');
					$.cookie("db", $pk.find("ul").html());
				}
			} else alertM("最多只能选择" + length + "个" + name, {
				cName: "error"
			})
		})
		$w.scroll(function() {
			$pk.css("top", $w.scrollTop() + $w.height() / 2 - 99);
		})
	}
});