define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	require("tip");
	require("emailpop");
	$.fn.gb = function(url, id) {
		var $t = $(this),
			$name = $t.find(":text[name='username']"),
			$tel = $t.find(":text[name='tel']"),
			$email = $t.find(":text[name='email']");
		$email.emailpop();
		$name.keyup(function() {
			if ($name.val().length > 0) $name.tip()
			else $name.tip(0, "姓名不得为空")
		})
		$tel.keyup(function() {
			if (/^1[3458]\d{9}$|^(0\d{2,4}-)?[2-9]\d{6,7}(-\d{2,5})?$/.test($tel.val())) $tel.tip()
			else $tel.tip(0, "手机号码格式错误")
		})
		$t.on("click", ":button", function() {
			var c = 1;
			if ($name.val().length == 0) {
				c = 0;
				$name.tip(0, "姓名不得为空")
			}
			if (!/^1[3458]\d{9}$|^(0\d{2,4}-)?[2-9]\d{6,7}(-\d{2,5})?$/.test($tel.val())) {
				c = 0;
				$tel.tip(0, "手机号码格式错误")
			}
			if (c) {
				var $b = $t.find("b.red");
				$.ajax({
					url: url,
					dataType: 'json',
					data: {
						hid: id,
						truename: $name.val(),
						tel: $tel.val(),
						sex: $t.find(":radio[checked]").val(),
						email: $email.val()
					}
				}).done(function(data) {
					if (data.state == "succ") {
						$b.html($b.html() - 0 + 1);
						$name.val("");
						$tel.val("");
						$email.val("");
					}
					alertM(data.alert, {
						cName: data.state
					});
				}).fail(function() {
					alertM("团购请求失败，请检查网络连接是否已断开", {
						cName: "error"
					});
				});
			}
		})
		return $t;
	}
});