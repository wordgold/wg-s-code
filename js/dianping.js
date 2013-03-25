define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	require("tip");
	return {
		reInit: function(reurl, durl) {
			$("#dpl").on("click", "a.r", function() {
				$("#redp").remove();
				$(this).parent().parent().append('<div id="redp"><textarea id="redptxt"></textarea><button>回复</button></div>')
			}).on("click", "a.d", function() {
				var $b = $(this).find("b");
				$.ajax({
					url: durl,
					dataType: 'json',
					data: {
						cid: $(this).closest("li").attr("data-id"),
						dotype: "digg"
					}
				}).done(function(data) {
					if (data.state == "succ") {
						$b.html($b.html() - 0 + 1);
					}
					alertM(data.alert, {
						cName: data.state
					});
				}).fail(function() {
					alertM("点评提交失败，请检查网络连接是否已断开", {
						cName: "error"
					});
				});
			}).on("click", "a.c", function() {
				var $b = $(this).find("b");
				$.ajax({
					url: durl,
					dataType: 'json',
					data: {
						cid: $(this).closest("li").attr("data-id"),
						dotype: "down"
					}
				}).done(function(data) {
					if (data.state == "succ") {
						$b.html($b.html() - 0 + 1);
					}
					alertM(data.alert, {
						cName: data.state
					});
				}).fail(function() {
					alertM("点评提交失败，请检查网络连接是否已断开", {
						cName: "error"
					});
				});
			}).on("keyup", "textarea", function() {
				if ($(this).val().length == 0) $(this).tip(0, "回复内容不得为空")
				else $(this).tip()
			}).on("click", "button", function() {
				if ($("#redptxt").val() == 0) $("#redptxt").tip(0, "回复内容不得为空")
				else $.ajax({
					url: reurl,
					dataType: 'json',
					data: {
						id: $(this).closest("li").attr("data-id"),
						text: $(this).prev().val()
					}
				}).done(function(data) {
					if (data.state == "succ" && !data.check) {
						setTimeout(function() {
							window.location.reload()
						}, 2000)
					}
					alertM(data.alert, {
						cName: data.state
					});
					$("#redp").remove();
				}).fail(function() {
					alertM("回复提交失败，请检查网络连接是否已断开", {
						cName: "error"
					});
				});
			})
		},
		formInit: function(url, id, se) {
			var $seccode = $("#seccode");
			var $info = $("#info");
			var $shortcoming = $("#shortcoming");
			var $advantage = $("#advantage");
			var $title = $("#title");
			var $nickname = $("#nickname");
			$title.keyup(function() {
				if ($title.val().length > 0) $title.tip()
				else $title.tip(0, "标题不得为空")
			})
			$shortcoming.keyup(function() {
				if ($shortcoming.val().length == 0 && $advantage.val().length == 0 && $info.val().length == 0) $advantage.tip(0, "优点、缺点或综述，请至少填写一项")
				else if ($shortcoming.val().length > 0) $shortcoming.tip()
			})
			$advantage.keyup(function() {
				if ($shortcoming.val().length == 0 && $advantage.val().length == 0 && $info.val().length == 0) $advantage.tip(0, "优点、缺点或综述，请至少填写一项")
				else if ($advantage.val().length > 0) $advantage.tip()
			})
			$info.keyup(function() {
				if ($shortcoming.val().length == 0 && $advantage.val().length == 0 && $info.val().length == 0) $advantage.tip(0, "优点、缺点或综述，请至少填写一项")
				else if ($info.val().length > 0) $info.tip()
			})
			if (se) $seccode.keyup(function() {
				if ($seccode.val().length > 0) $("#another").tip()
				else $("#another").tip(0, "验证码不得为空")
			}).next().next().click(function() {
				var src = $(this).prev().attr("src");
				$(this).prev().remove();
				$(this).before('<img src="' + src + '?' + Math.random() + '">');
			})
			$("#dpf").on("click", "button", function() {
				var c = 1;
				if ($title.val().length == 0) {
					c = 0;
					$title.tip(0, "标题不得为空")
				}
				if ($shortcoming.val().length == 0 && $advantage.val().length == 0 && $info.val().length == 0) {
					c = 0;
					$advantage.tip(0, "优点、缺点或综述，请至少填写一项")
				}
				if (se && $seccode.val().length == 0) {
					c = 0;
					$("#another").tip(0, "验证码不得为空")
				}
				if (c) {
					var data = {
						hid: id,
						info: $info.val(),
						shortcoming: $shortcoming.val(),
						advantage: $advantage.val(),
						title: $title.val(),
						nickname: $nickname.val()
					}
					if (se) data.seccode = $seccode.val()
					alertM("正在提交点评，请稍候", {
						cName: "loading"
					});
					$.ajax({
						url: url,
						dataType: 'json',
						data: data
					}).done(function(data) {
						if (data.state == "succ" && !data.check) {
							setTimeout(function() {
								window.location.reload()
							}, 2000)
						}
						alertM(data.alert, {
							cName: data.state
						});
						$info.val("");
						$shortcoming.val("");
						$advantage.val("");
						$title.val("");
						$nickname.val("");
					}).fail(function() {
						alertM("点评提交失败，请检查网络连接是否已断开", {
							cName: "error"
						});
					});
				}
			})
		}
	}
})