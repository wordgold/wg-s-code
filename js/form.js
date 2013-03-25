define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	require("tip");
	require('<!--#echo var="static"-->css/mod/form.css');
	return {
		userName: {
			fir: "起个响亮的名号吧，推荐使用中文名称；可输入4-20位字符，数字，下划线或组合",
			err: "只可输入4-20位字符，数字，下划线或组合",
			check: "正在检查用户名是否已存在",
			checkerr: "连接失败,请检查网络连接是否已断开",
			regular: /^(\w|[\u4E00-\u9FA3]){4,20}$/,
			suc: 0
		},
		password: {
			fir: "6-16位字母、数字及组合，区分大小写",
			err: "6-16位字母、数字及组合，区分大小写",
			regular: /^\w{6,16}$/,
			suc: 0
		},
		conf: {
			fir: "请重复输入刚才的密码",
			err: "两次输入密码不一致",
			suc: 0
		},
		email: {
			fir: "请输入常用邮箱，如example@example.com",
			err: "请输入正确的邮箱地址，如example@example.com",
			check: "正在检查邮箱地址是否已存在",
			checkerr: "连接失败,请检查网络连接是否已断开",
			regular: /^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/,
			suc: 0
		},
		phone: {
			fir: "请填写您的联系电话!格式如0311-88888888或86088888或138********",
			err: "联系电话格式错误,格式如0311-88888888或86088888或138********",
			regular: /^1[3458]\d{9}$|^(0\d{2,4}-)?[2-9]\d{6,7}(-\d{2,5})?$|^(?!\d+(-\d+){3,})[48]00(-?\d){7,10}$/,
			suc: 0
		},
		init: function(t) {
			var $t = $(t);
			var $un = $t.find("input[data-type='username']");
			var $pa = $t.find("input[data-type='password']");
			var $cf = $t.find("input[data-type='confirm']");
			var $em = $t.find("input[data-type='email']");
			var $ph = $t.find("input[data-type='phone']");
			if ($un.length > 0) module.exports.ajax($un, module.exports.userName);
			if ($pa.length > 0) module.exports.regular($pa, module.exports.password);
			if ($cf.length > 0) module.exports.confirm($pa, $cf, module.exports.conf);
			if ($em.length > 0) module.exports.ajax($em, module.exports.email);
			if ($ph.length > 0) module.exports.regular($ph, module.exports.phone);
		},
		ajax: function($un, data) {
			$un.focus(function() {
				$un.tip(1, data.fir)
			}).blur(function() {
				if (data.regular.test($un.val())) {
					if ($un.attr("data-checkurl").length > 0) {
						$un.tip(1, data.check);
						$.ajax({
							url: $un.attr("data-checkurl"),
							dataType: 'text',
							data: {
								data: $un.val()
							}
						}).done(function(data) {
							if (data == 1) {
								$un.tip();
								data.suc = 1;
							} else $un.tip(0, data)
						}).fail(function() {
							$un.tip(0, data.checkerr)
						});
						module.exports.checkSubmit();
					} else {
						$un.tip();
					}
				} else {
					$un.tip(0, data.err)
				}
				module.exports.checkSubmit();
			})
		},
		regular: function($pa, data) {
			$pa.focus(function() {
				$pa.tip(1, data.fir)
			}).blur(function() {
				if (data.regular.test($pa.val())) {
					$pa.tip();
				} else {
					$pa.tip(0, data.err)
				}
				module.exports.checkSubmit();
			})
		},
		confirm: function($pa, $cf, conf) {
			$cf.focus(function() {
				$cf.tip(1, conf.fir);
			}).blur(function() {
				if ($cf.val() == $pa.val()) {
					$cf.tip();
				} else {
					$cf.tip(0, conf.err)
				}
				module.exports.checkSubmit();
			})
		},
		checkSubmit: function() {
			if (module.exports.userName.suc) alertM(11111111111);
		}
	}
});