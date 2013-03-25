define(function(require, exports, module) {
	require('jquery');
	require("tip");
	var alertM = require('alert');
	$.fn.aw = function(url, id, anurl) {
		var $t = $(this),
			$alist = $t.find("ul.answer"),
			$txt = $t.find("textarea"),
			$l = $("#txtlength"),
			str = '<div class="replybox"><textarea type="text" class="replyTxt"></textarea><input type="button" class="replyBtn"></div>';
		$txt.keyup(function() {
			var l = 100 - $txt.val().length;
			if (l > 0) $l.html('您还可以输入 <span class="red">' + l + '</span>个字符');
			else if (l == 0) $l.html('您正好输入 <span class="red">100</span>个字符');
			else $l.html('您已超出 <span class="red">' + (0 - l) + '</span>个字符');
		})
		$t.on("click", "a.re", function() {
			$t.find("div.replybox").remove();
			$(this).closest("li").append(str);
		}).on("click", ":button.replyBtn", function() {
			var $anw = $(this).prev();
			if ($anw.val().length > 0 && $anw.val().length < 101) {
				$.ajax({
					url: anurl,
					dataType: 'json',
					data: {
						hid: id,
						wid: $anw.closest("li").attr("data-id"),
						txt: $anw.val()
					}
				}).done(function(data) {
					//{"username":"","txt":"","check":"1代表审核，0不需要审核","alert":"弹出提示","suc",1}
					if (data.state == "succ") {
						var str = '<p class="border">' + data.username + ' 答：' + data.txt + '<span class="gray9">[ 刚才 ]</span>';
						if (data.check) str += '<br><span class="red">答案需要审核，审核通过后显示</span>';
						str += '</p>';
						$anw.closest("li").append(str).find("div.replybox").remove();
					}
					alertM(data.alert, {
						cName: data.state
					});
				}).fail(function() {
					alertM("答案提交失败，请检查网络连接是否已断开", {
						cName: "error"
					});
				});
			} else {
				alertM("答案不得为空且不得超过100个字符", {
					cName: "error"
				});
			}
		}).find(":button").click(function() {
			if ($txt.val().length > 0 && $txt.val().length < 101) {
				alertM("正在发表提问，请稍候", {
					cName: "yes",
					btnY: 0
				});
				$.ajax({
					url: url,
					dataType: 'json',
					//{"src":"用户头像路径","username":"","txt":"","check":"1代表审核，0不需要审核","alert":"弹出提示","suc",1}
					data: {
						hid: id,
						txt: $txt.val()
					}
				}).done(function(data) {
					if (data.state == "succ") {
						var str = '<li><img src="' + data.src + '"><b class="red">' + data.username + '：</b><span class="fr gray9">';
						if (data.check) str += '<span class="red">问题需要审核，审核通过后显示</span> ';
						str += '刚才</span><p>' + data.txt + '</p></li>';
						$alist.append(str);
						$txt.val("");
					}
					alertM(data.alert, {
						cName: data.state
					});
				}).fail(function() {
					alertM("提问发布失败，请检查网络连接是否已断开", {
						cName: "error"
					});
				});
			} else {
				alertM("提问不得为空且不得超过100个字符", {
					cName: "error"
				});
			}
		})
		return $t;
	}
});