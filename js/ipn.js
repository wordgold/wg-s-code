define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	$.fn.ipn = function(url, id) {
		var $t = $(this),
			$txt = $t.find(":text");
		$txt.focus(function() {
			if ($txt.val() == "我的印象，限5个字") $txt.val("")
		}).blur(function() {
			if ($txt.val() == "") $txt.val("我的印象，限5个字")
		}).keyup(function(e) {
			if ($txt.val().length > 5) {
				var val = $txt.val();
				$txt.val(val.substr(val.length - 5));
			}
		});
		$t.on("click", ":button", function() {
			$.ajax({
				url: url,
				dataType: 'json',
				data: {
					hid: id,
					name: $txt.val()
				}
			}).done(function(data) {
				if (data.state == "succ") {
					$txt.val("");
				}
				alertM(data.alert, {
					cName: data.state
				});
			}).fail(function() {
				alertM("印象发布失败，请检查网络连接是否已断开", {
					cName: "error"
				});
			});
		}).on("click", "span", function() {
			var $t = $(this).find("b");
			$.ajax({
				url: url,
				dataType: 'json',
				data: {
					id: $(this).attr("data-id")
				}
			}).done(function(data) {
				if (data.state == "succ") {
					$t.html($t.html() - 0 + 1);
				}
				alertM(data.alert, {
					cName: data.state
				});
			}).fail(function() {
				alertM("印象发布失败，请检查网络连接是否已断开", {
					cName: "error"
				});
			});
		})
		return $t;
	}
});