define(function(require, exports, module) {
	require('jquery');
	var alertM = require('alert');
	require('tip');
	return {
		checkStr: ['<img src="<!--#echo var="static"-->images/common/loading.gif">请稍候，正在检查', '是否已被使用', '<img src="<!--#echo var="static"-->images/mod/', '.png">', 'error.png">连接错误，', '检查', '失败，', '格式错误，请重新输入', '请检查网络连接是否已断开'],
		userName: {
			regular: /^(\w|[\u4E00-\u9FA3]){4,20}$/,
			info: '4-20位字符，数字，下划线或组合',
			key: '用户名',
			val: '',
			succ: 0
		},
		email: {
			regular: /^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/,
			info: '例如：123456@gmail.com',
			key: '电子邮箱',
			val: '',
			succ: 0
		},
		mobile: {
			regular: /^1[3458]\d{9}$|^0\d{2,3}\d{7,8}?$/,
			info: '例如：13812345678',
			key: '手机号码',
			val: '',
			succ: 0
		},
		tel: {
			regular: /^1[3458]\d{9}$|^(0\d{2,4}-)?[2-9]\d{6,7}(-\d{2,5})?$|^(?!\d+(-\d+){3,})[48]00(-?\d){7,10}$/,
			info: '例如：13812345678，0311-88881234，88881234',
			key: '联系电话',
			val: '',
			succ: 0
		},
		company: {
			regular: /.*/,
			info: '无此公司信息，建议选择其他公司或独立经纪人',
			key: '所属公司',
			val: '',
			succ: 0
		},
		store: {
			regular: /.*/,
			info: '无此门店信息，建议选择其他门店',
			key: '所属门店',
			val: '',
			succ: 0
		},
		imgCode: {
			regular: /^[A-Za-z0-9]{4}$/,
			info: '',
			key: '',
			val: '',
			succ: 0
		},
		area: {
			val: 0,
			succ: 0
		},
		circle: {
			val: 0,
			succ: 0
		},
		password: {
			score: 0,
			confirm: 0,
			succ: 0
		},
		checkPassword: function(opt) {
			opt = $.extend({
				password: "#password",
				pinfo: "#pwInfo",
				pwConfirm: "#passwordConfirm",
				pcinfo: "#pcInfo"
			}, opt || {});
			require('<!--#echo var="static"-->css/mod/pwstreng.css');
			var re = function(a, b, c) {
				var j = c.replace(a, "");
				j = b - j.length;
				return j > 3 ? 3 : j;
			}
			var gps = function(h) {
				var a = h.length;
				var b = a > 8 ? 2 : Math.floor(a / 4);
				var c = b + re(/[0-9]/g, a, h) + re(/[a-z]/g, a, h) + re(/[A-Z]/g, a, h) + re(/\W/g, a, h) - 2;
				return c < 0 ? 0 : (c > 10 ? 10 : c);
			}
			var $p = $(opt.password),
				$pi = $(opt.pinfo),
				$c = $(opt.pwConfirm),
				$ci = $(opt.pcinfo);
			l = 0;
			$p.on({
				focus: function() {
					if ($p.val().length == 0) $pi.html("6-16位字母、数字及字符组合，区分大小写");
				},
				keyup: function(e) {
					var i = 0,
						html = '<b id="pwStreng" class="cf">';
					l = gps($p.val());
					for (; i < l; i++) {
						html += '<i class="c' + i + '"></i>';
					}
					html += "</b>";
					if ($p.val().length < 16) if (l < 5) html += "不堪一用";
					else if (l < 7) html += "简单了点，可以使用";
					else if (l < 9) html += "不错，想攀登高峰？";
					else html += "太棒了！赞！";
					else {
						html += "太长了！记起来很费劲的！";
						l = 0;
					}
					$pi.html(html);
					module.exports.password.score = l;
					$c.trigger("keyup")
				},
				blur: function() {
					$p.trigger("keyup");
					if (l < 5) {
						$p.addClass("error").tip().remove();
						$pi.addClass("info");
					} else {
						$p.removeClass("error").tip();
						$pi.empty().removeClass("info")
					}
				}
			});
			$c.on({
				keyup: function() {
					if ($c.val() == $p.val()) {
						$c.removeClass("error").tip();
						$ci.empty();
						module.exports.password.confirm = 1;
					} else {
						$c.addClass("error").tip().remove();
						$ci.html("两次密码输入不一致").addClass("info");
						module.exports.password.confirm = 0;
					}
					module.exports.password.succ = module.exports.password.score > 4 && module.exports.password.confirm == 1 ? 1 : 0;
				},
				blur: function() {
					$c.trigger("keyup")
				}
			});
			return module.exports;
		},
		confirm: function($t, $i, conf, checkStr) {
			$t.on({
				focus: function() {
					$i.html(conf.info).removeClass("info")
				},
				keyup: function() {
					if (conf.regular.test($t.val())) $t.tip();
					else $t.tip().remove();
				},
				blur: function() {
					if ($t.val() == "" || $t.val() == conf.val) return false;
					if (conf.regular.test($t.val())) {
						conf.val = $t.val();
						conf.succ = 0;
						$i.html(checkStr[0] + conf.key + checkStr[1]).removeClass("info");
						$.ajax({
							url: conf.url,
							dataType: 'json',
							data: {
								val: $t.val()
							}
						}).done(function(data) {
							if (data.state == "succ") {
								conf.succ = 1;
								$t.tip();
								setTimeout(function() {
									$i.empty();
								}, 4000)
							} else $t.addClass("error").tip().remove();
							$i.html(checkStr[2] + data.state + checkStr[3] + data.alert)
						}).fail(function() {
							alertM(checkStr[5] + conf.key + checkStr[6] + checkStr[8], {
								cName: "error",
								rf: function() {
									$t.tip().remove();
									$i.html(checkStr[2] + checkStr[4] + checkStr[8]).addClass("info");
								}
							});
						});
					} else {
						$t.addClass("error").tip().remove();
						$i.html(conf.key + checkStr[7]).addClass("info")
					}
				}
			})
			return module.exports;
		},
		checkUserName: function(opt) {
			opt = $.extend({
				userName: "#userName",
				uinfo: "#userNameInfo",
				url: ""
			}, opt || {});
			module.exports.userName.url=opt.url;
			return module.exports.confirm($(opt.userName), $(opt.uinfo), module.exports.userName, module.exports.checkStr)
		},
		checkEmail: function(opt) {
			opt = $.extend({
				email: "#email",
				einfo: "#emailInfo",
				url: ""
			}, opt || {});
			module.exports.email.url=opt.url;
			return module.exports.confirm($(opt.email), $(opt.einfo), module.exports.email, module.exports.checkStr)
		},
		checkMobile: function(opt) {
			opt = $.extend({
				mobile: "#mobile",
				minfo: "#mobileInfo",
				url: ""
			}, opt || {});
			module.exports.mobile.url=opt.url;
			return module.exports.confirm($(opt.mobile), $(opt.minfo), module.exports.mobile, module.exports.checkStr)
		},
		checkTel: function(opt) {
			opt = $.extend({
				tel: "#tel",
				tinfo: "#telInfo",
				url: ""
			}, opt || {});
			module.exports.tel.url=opt.url;
			return module.exports.confirm($(opt.tel), $(opt.tinfo), module.exports.tel, module.exports.checkStr);
		},
		sendMobileCode: function(opt) {
			opt = $.extend({
				mobile: "#mobile",
				getmCheck: "#getmCheck",
				waitM: "#waitM",
				url: ""
			}, opt || {});
			var $mobile = $(opt.mobile),
				$getmCheck = $(opt.getmCheck),
				$waitM = $(opt.waitM),
				time = 86;
			var mobileTime = function() {
				if (--time == 0) {
					$getmCheck.show();
					$waitM.hide();
					time = 86;
					clearInterval(delay);
				} else $waitM.text(time + "秒后重发验证码");
			}
			$getmCheck.click(function() {
				if (module.exports.mobile.succ) {
					$getmCheck.hide();
					$.ajax({
						url: opt.url,
						dataType: 'json',
						data: {
							mobile: $mobile.val()
						}
					}).done(function(data) {
						if (data.state == "succ") {
							$waitM.css("display", "inline-block");
							delay = setInterval(mobileTime, 1000);
						}
						alertM(data.alert, {
							cName: data.state
						})
					}).fail(function() {
						alertM("发送失败，请检查网络连接是否已断开", {
							cName: "error"
						});
						$getmCheck.show();
					});
				} else $mobile.focus();
			})
			return module.exports;
		},
		checkImg: function(opt) {
			opt = opt ? opt : "#cimg";
			var $cimg = $(opt),
				src = $cimg.find("img").attr("src");
			$cimg.on("click", function() {
				$cimg.html('<img src="' + src + '?' + Math.random() + '">');
			})
			return module.exports;
		},
		checkImgCode: function(opt) {
			opt = $.extend({
				imgCode: "#imgCheck",
				imgCinfo: "#imgCheckInfo",
				url: ""
			}, opt || {});
			module.exports.imgCode.url=opt.url;
			return module.exports.confirm($(opt.imgCode), $(opt.imgCinfo), module.exports.imgCode, module.exports.checkStr);
		},
		checkCompany: function(opt) {
			opt = $.extend({
				company: "#company",
				store: "#store",
				cinfo: "#companyInfo",
				cpop:"#cpop",
				curl: "",
				surl: "",
				scurl:""
			}, opt || {});
			var $c = $(opt.company).attr("autocomplete", "off"),
				$s = $(opt.store).attr("autocomplete", "off"),
				$i = $(opt.cinfo),
				$pop = $(opt.cpop),
				l = 0,
				inlength=0,
				inhtml="",
				url="",
				checkStr = module.exports.checkStr,
				$t, delay;
			$pop.on("mouseover", "li", function() {
				$pop.find(".pop").removeClass("pop");
				$(this).addClass("pop");
			}).on("mousedown", "li", function() {
				$t.val($(this).find("b").text());
				$pop.hide();
				if($t.index()==1){
					$s.focus();
					return false;
				}
			});
			$c.add($s).on({
				keydown: function(e) {
					switch (e.which) {
						case 9:
							$pop.hide();
							break;
						case 32:
							return false;
						case 13:
							$t.val($pop.hide().find(".pop").text());
							if($t.index()==1){
								$s.focus();
								return false;
							}
							break;
						case 37:
						case 38:
							var $p = $pop.find(".pop").removeClass("pop");
							if ($p.index() > 0) $p.prev().addClass("pop");
							else $pop.find("li:last").addClass("pop");
							return false;
						case 39:
						case 40:
							var $p = $pop.find(".pop").removeClass("pop");
							if ($p.index() < l) $p.next().addClass("pop");
							else $pop.find("li:first").addClass("pop");
							return false;
					}
				},
				keyup:function(e){
					switch (e.which) {
						case 9:
						case 37:
						case 38:
						case 39:
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
										dataType: 'json',
										data: {
											key: val
										}
									}).done(function(data) {
										if (data.length > 0) {
											var i = 0,
												html = str;
											l = data.length;
											for (; i < l; i++) {
												html += "<li><b>" + data[i].name + "</b></li>";
											}
											l += inlength;
											html += inhtml;
											$pop.html(html).show();
										} else {
											$pop.html(html).show();
										}
									});
								}, 400)
							}
							$pop.html(str + inhtml);
					}
				}
			})
			$c.on({
				focus: function() {
					$c.parent().css("z-index", "9");
					$t = $c;
					inhtml='<li class="b"><b>其他公司</b></li><li class="b"><b>独立经纪人</b></li>';
					inlength=2;
					url=opt.curl;
					$pop.removeClass("l").html(inhtml).show();
				},
				blur: function() {
					var val=$c.val();
					$pop.hide().parent().css("z-index", "0");
					if (val == "" || val == module.exports.company.val || val == $c.attr("data-val")) return false;
					module.exports.company.succ = 0;
					module.exports.company.val=val;
					if(val=="其他公司"||val=="独立经纪人"){
						module.exports.company.succ = 1;
						$s.val(val).prop("readonly",true).tip();
						$c.tip();
						$pop.hide().html("")
					}else {
						$s.val("").prop("readonly",false);
						$.ajax({
							url: opt.surl,
							dataType: 'json',
							data: {
								company: val
							}
						}).done(function(data) {
							if (data.length > 0) {
								$c.tip()
								module.exports.company.succ = 1;
								var i = 0,
									html = "";
								l = data.length;
								for (; i < l; i++) {
									html += "<li><b>" + data[i].name + "</b></li>";
								}
								l += 2;
								html += '<li class="b"><b>其他店面</b></li>';
								if(l>9)
									html += '<li class="b"><b></b><em class="red">输入门店信息查询更多</em></li>';
								$pop.html(html);
								if($s.is(":focus"))
									$pop.show();
							} else {
								module.exports.company.succ = 0;
								$pop.hide();
								$c.addClass("error").tip().remove();
								$i.html(checkStr[2] + 'error' + checkStr[3] + module.exports.company.info).removeClass("info")
							}
						}).fail(function() {
							$pop.hide();
							module.exports.company.succ = 0;
							alertM(checkStr[5] + module.exports.company.key + checkStr[6] + checkStr[8], {
								cName: "error",
								rf: function() {
									$c.tip().remove();
									$i.html(checkStr[2] + checkStr[4] + checkStr[8]).addClass("info");
								}
							});
						});
					}
				}
			})
			$s.on({
				focus: function() {
					$s.parent().css("z-index", "9");
					$t = $s;
					inhtml='<li class="b"><b>其他店面</b></li>';
					inlength=1;
					url=opt.surl+"?company="+module.exports.company.val;
					if($pop.find("li").length>0)
						$pop.addClass("l").show();
				},
				blur: function() {
					var val=$s.val();
					$pop.hide().parent().css("z-index", "0");
					module.exports.store.succ = 0;
					module.exports.store.val=val;
					if(val=="其他店面"||val=="其他公司"||val=="独立经纪人"){
						module.exports.store.succ = 1;
						$s.tip();
					}else {
						$.ajax({
							url: opt.scurl,
							dataType: 'json',
							data: {
								key: val
							}
						}).done(function(data) {
							if (data.state == "succ") {
								module.exports.store.succ = 1;
								$s.tip();
								setTimeout(function() {
									$i.empty();
								}, 4000)
							} else $s.addClass("error").tip().remove();
							$i.html(checkStr[2] + data.state + checkStr[3] + data.alert)
						}).fail(function() {
							module.exports.store.succ = 0;
							alertM(checkStr[5] + module.exports.store.key + checkStr[6] + checkStr[8], {
								cName: "error",
								rf: function() {
									$s.tip().remove();
									$i.html(checkStr[2] + checkStr[4] + checkStr[8]).addClass("info");
								}
							});
						});
					}
				}
			})
			return module.exports;
		},
		checkArea: function(opt) {
			opt = $.extend({
				q: "#gzqxt",
				s: "#gzsyqt",
				qo: "#gzqx",
				so: "#gzsyq",
				i: "#gzInfo",
				url: ""
			}, opt || {});
			var $q = $(opt.q).attr("autocomplete", "off"),
				$s = $(opt.s).attr("autocomplete", "off"),
				$i = $(opt.i),
				$qo = $(opt.qo),
				$so = $(opt.so),
				l = 0,
				checkStr = module.exports.checkStr,
				soHtml = $so.html(),
				$t, $o;
			var blur = function() {
				if ($o.find("a:contains('" + $t.val() + "')").length == 1 && $o.find("a:contains('" + $t.val() + "')").text() == $t.val()) return $o.find("a:contains('" + $t.val() + "')").attr("data-val");
				else {
					$t.addClass("error").tip().remove();
					$i.html("工作区域不存在，请重新输入")
					return false;
				}
			}
			$qo.add($so).on("mouseover", "a", function() {
				$(this).parent().find(".on").removeClass("on");
				this.className = "on";
			}).on("mousedown", "a", function() {
				$t.val($(this).parent().hide().end().text());
			});
			$q.add($s).on({
				keydown: function(e) {
					switch (e.which) {
						case 9:
							$o.hide();
							break;
						case 32:
							return false;
						case 13:
							$t.val($o.hide().find(".on").text());
							break;
						case 37:
						case 38:
							var $p = $o.find(".on").removeClass("on");
							if ($p.index() > 1) $p.prev().addClass("on");
							else $o.find("a:last").addClass("on");
							return false;
						case 39:
						case 40:
							var $p = $o.find(".on").removeClass("on");
							if ($p.index() >= l || $p.length == 0) $o.find("a:first").addClass("on");
							else $p.next().addClass("on");
							return false;
					}
				},
				keyup: function(e) {
					switch (e.which) {
						case 9:
						case 32:
						case 37:
						case 39:
						case 38:
						case 40:
							return false;
							break;
						default:
							$o.find(".on").removeClass("on");
							$o.find("a:contains('" + $t.val() + "')").addClass("on");
					}
				}
			})
			$q.on({
				focus: function() {
					$q.parent().css("z-index", "9");
					$t = $q;
					$o = $qo.show();
					l = $o.find("a").length;
				},
				blur: function() {
					$qo.hide();
					var id = blur();
					if (!id) module.exports.area.succ = 0;
					else if (id != module.exports.area.val) {
						module.exports.area.val = id;
						$s.val("").tip().remove();
						$so.html(soHtml);
						$qo.find("input").val(id);
						$.ajax({
							url: opt.url,
							dataType: 'json',
							data: {
								pid: id
							}
						}).done(function(data) {
							if (data.state == "succ") {
								module.exports.area.succ = 1;
								$q.tip();
								$i.empty();
								var i = 0,
									length = data.circle.length,
									html = soHtml;
								for (; i < length; i++) {
									html += '<a href="javascript:void(0)" data-val="' + data.circle[i].id + '">' + data.circle[i].name + '</a>';
								}
								$so.html(html);
								$s.focus();
							} else {
								module.exports.area.succ = 0;
								$q.tip().remove();
								$i.html(checkStr[2] + data.state + checkStr[3] + data.alert);
							}
						}).fail(function() {
							module.exports.area.succ = 0;
							alertM("获取商业圈信息" + checkStr[6] + checkStr[8], {
								cName: "error",
								rf: function() {
									$q.tip().remove();
									$i.html(checkStr[2] + checkStr[4] + "获取商业圈信息" + checkStr[6] + checkStr[8]).addClass("info");
								}
							});
						});
					} else {
						$q.tip();
						$i.empty();
					}
				}
			})
			$s.on({
				focus: function() {
					$q.parent().css("z-index", "9");
					$t = $s;
					$o = $so;
					l = $o.find("a").length;
					if($.trim($q.val())==""||$.trim($q.val())=="区县")
						$q.focus();
					if (l) $o.show()
				},
				blur: function() {
					$so.hide();
					var id = blur();
					if (!id) module.exports.circle.succ = 0;
					else {
						if (id != module.exports.circle.val) {
							module.exports.circle.val = id;
							module.exports.circle.succ = 1;
							$so.find("input").val(id);
						}
						$s.tip();
						$i.empty();
					}
				}
			})
			return module.exports;
		}
	}
});