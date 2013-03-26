define(function(require, exports, module) {
	require('jquery');
	var $superM, $smu, mod, alertM = require('alert');
	return {
		html: {
			start: '<div id="superM"><div id="smu" class="on"><a id="goTopBtn" href="javascript:" title="返回顶部"><i></i><s></s><u></u><span>返回顶部</span></a>',
			open: '<a id="openBoxBtn" href="javascript:" title="更多功能"><i></i><s></s><u></u><span class="c">打开试试</span><span class="o">关上它</span></a>',
			share: '<a id="shareBtn" href="javascript:" data-event="share" title="分享到社交网站"><i></i><s></s><u></u><span>分享到…</span></a>',
			sub: '<a id="subBtn" href="javascript:" data-event="sub" title="订阅房源信息"><i></i><s></s><u></u><span>订阅房源</span></a>',
			mobile: '<a id="mobileBtn" href="javascript:" data-event="mobile" title="发送房源信息到手机"><i></i><s></s><u></u><span>发送房源</span></a>',
			pk: '<a id="pkBtn" href="javascript:" data-event="pk" title="对比房源信息"><i></i><s></s><u></u><span>对比房源</span></a>',
			talk: '<a id="talkBtn" href="javascript:" data-event="talk" title="在线聊天"><i></i><s></s><u></u><span>在线聊天</span></a>',
			end: '</div></div>'
		},
		index: 0,
		state: 0,
		shareOpt: {
			i: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			s: [{
				title: '新浪微薄',
				click: 'tsina'
			}, {
				title: '腾讯微博',
				click: 'tqq'
			}, {
				title: '网易微博',
				click: 't163'
			}, {
				title: '搜狐微博',
				click: 'tsohu'
			}, {
				title: 'Qzone',
				click: 'qzone'
			}, {
				title: '人人网',
				click: 'renren'
			}, {
				title: '开心网',
				click: 'kaixin001'
			}, {
				title: '豆瓣',
				click: 'douban'
			}, {
				title: 'i贴吧',
				click: 'itieba'
			}]
		},
		pkOpt: {
			url: "",
			length: 2
		},
		subOpt: {
			name: "",
			hid: "",
			suburl: "",
			unSuburl: "",
			sendMCode: "",
			sendECode: "",
			mobile: "",
			email: ""
		},
		talkOpt: {

		},
		mobileOpt: {
			name: "",
			info: "",
			hid: "",
			checkurl: "",
			murl: ""
		},
		shareTo: function(m) {
			switch (m) {
				case "renren":
					void((function(s, d, e) {
						if (/renren\.com/.test(d.location)) return;
						var f = 'http://share.renren.com/share/buttonshare.do?link=',
							u = d.location,
							l = d.title,
							p = [e(u), '&title=', e(l)].join('');

						function a() {
							if (!window.open([f, p].join(''), 'xnshare', ['toolbar=0,status=0,resizable=1,width=626,height=436,left=', (s.width - 626) / 2, ',top=', (s.height - 436) / 2].join(''))) u.href = [f, p].join('');
						};
						if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0);
						else a();
					})(screen, document, encodeURIComponent));
					break;
				case "qzone":
					window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(document.location), 'qzone', 'toolbar=0,status=0,width=900,height=760,left=' + (screen.width - 900) / 2 + ',top=' + (screen.height - 760) / 2);
					break;
				case "kaixin001":
					var kw = window.open('', 'kaixin001', 'toolbar=no,titlebar=no,status=no,menubar=no,scrollbars=no,location:no,directories:no,width=570,height=350,left=' + (screen.width - 570) / 2 + ',top=' + (screen.height - 420) / 2);
					var tempForm = kw.document.createElement('form');

					function openPostWindow(url, data, name) {
						var tempForm = document.createElement('form');
						tempForm.id = 'tempForm1';
						tempForm.method = 'post';
						tempForm.action = url;
						tempForm.target = 'kaixin001';
						var hideInput = document.createElement('input');
						hideInput.type = 'hidden';
						hideInput.name = 'rcontent';
						hideInput.value = data;
						tempForm.appendChild(hideInput);
						document.body.appendChild(tempForm);
						tempForm.submit();
						document.body.removeChild(tempForm);
					}

					function add2Kaixin001() {
						var u = document.location.href;
						var t = document.title;
						var c = '' + (document.getSelection ? document.getSelection() : document.selection.createRange().text);
						var iframec = '';
						var url = 'http://www.kaixin001.com/repaste/bshare.php?rtitle=' + encodeURIComponent(t) + '&rurl=' + encodeURIComponent(u) + '&from=maxthon';
						var data = encodeURIComponent(c);
						openPostWindow(url, c, '_blank')
					}
					add2Kaixin001();
					break;
				case "tsina":
					void((function(s, d, e) {
						try {} catch (e) {}
						var f = 'http://v.t.sina.com.cn/share/share.php?',
							u = d.location.href,
							p = ['url=', e(u), '&title=', e(d.title), '&appkey=330242870'].join('');

						function a() {
							if (!window.open([f, p].join(''), 'mb', ['toolbar=0,status=0,resizable=1,width=620,height=450,left=', (s.width - 620) / 2, ',top=', (s.height - 450) / 2].join(''))) u.href = [f, p].join('');
						}
						if (/Firefox/.test(navigator.userAgent)) {
							setTimeout(a, 0)
						} else {
							a()
						}
					})(screen, document, encodeURIComponent));
					break;
				case "tsohu":
					void((function(s, d, e) {
						var f = 'http://t.sohu.com/third/post.jsp?link=',
							u = d.location;

						function a() {
							if (!window.open([f, e(u)].join(''), 'tsohu', ['toolbar=0,status=0,resizable=1,width=660,height=470,left=', (s.width - 660) / 2, ',top=', (s.height - 470) / 2].join(''))) u.href = [f, e(u)].join('');
						};
						if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0);
						else a();
					})(screen, document, encodeURIComponent));
					break;
				case "itieba":
					var sendT = {
						getContent: function() {
							var allPageTagss = document.getElementsByTagName("div");
							for (var i = 0; i < allPageTagss.length; i++) {
								if (allPageTagss[i].className == 'articleContent') {
									return allPageTagss[i].getElementsByTagName("P")[0].innerHTML ? allPageTagss[i].getElementsByTagName("P")[0].innerHTML : '';
								}
							}
						}
					}
					var itieba_share = 'http://tieba.baidu.com/i/sys/share?link=' + encodeURIComponent(window.location.href) + '&type=' + encodeURIComponent('text') + '&title=' + encodeURIComponent(document.title.substring(0, 76)) + '&content=' + encodeURIComponent(sendT.getContent());
					if (!window.open(itieba_share, 'itieba', 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=626,height=436')) {
						location.href = itieba_share;
					}
					break;
				case "t163":
					(function() {
						var url = 'link=http://www.shareto.com.cn/&source=' + encodeURIComponent('悦读通') + '&info=' + encodeURIComponent(document.title) + ' ' + encodeURIComponent(document.location.href);
						window.open('http://t.163.com/article/user/checkLogin.do?' + url + '&' + new Date().getTime(), 't163', 'height=330,width=550,top=' + (screen.height - 280) / 2 + ',left=' + (screen.width - 550) / 2 + ', toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no');
					})()
					break;
				case "douban":
					void(function() {
						var d = document,
							e = encodeURIComponent,
							s1 = window.getSelection,
							s2 = d.getSelection,
							s3 = d.selection,
							s = s1 ? s1() : s2 ? s2() : s3 ? s3.createRange().text : '',
							r = 'http://www.douban.com/recommend/?url=' + e(d.location.href) + '&title=' + e(d.title) + '&sel=' + e(s) + '&v=1',
							x = function() {
								if (!window.open(r, 'douban', 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=355,left=' + (screen.width - 450) / 2 + ',top=' + (screen.height - 330) / 2)) location.href = r + '&r=1'
							};
						if (/Firefox/.test(navigator.userAgent)) {
							setTimeout(x, 0)
						} else {
							x()
						}
					})();
					break;
				case "tqq":
					window.open('http://v.t.qq.com/share/share.php?title=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(document.location.href), 'tqq', 'toolbar=0,status=0,width=700,height=360,left=' + (screen.width - 700) / 2 + ',top=' + (screen.height - 600) / 2);
			}
		},
		share: function() {
			if (!$("#smshare").length) {
				opt = mod.shareOpt;
				var str = '<div id="smshare" class="smpanl"><h3 class="panlT">分享到社交网站</h3>';
				for (var i = 0; i < opt.i.length; i++) {
					str += '<a href="javascript:" style="background-position:0 -' + 32 * opt.i[i] + 'px" title="分享到' + opt.s[opt.i[i]].title + '"></a>';
				}
				str += "</div>";
				$superM.append(str);
				$("#smshare a").each(function(i) {
					$(this).hover(function() {
						this.style.backgroundPosition = '-32px -' + 32 * i + 'px';
					}, function() {
						this.style.backgroundPosition = '0 -' + 32 * i + 'px';
					}).click(function() {
						mod.shareTo(opt.s[opt.i[i]].click)
					})
				});
			}
			if (mod.index != "share") mod.openMod("share");
			else mod.closeMod();
		},
		sub: function(op) {
			var opt = mod.subOpt;
			console.log(opt);
			if (!$("#smsub").length) {
				var html = '<div id="smsub" class="smpanl"><h3 class="panlT"><a href="javascript:" class="fr">&times;</a>订阅房源信息</h3><form id="subForm"><input type="hidden" value="' + opt.hid + '" name="hid"><ul><li><b>订阅 ' + opt.name + ' 的通知服务</b></li><li>留下您的手机或邮箱，如果 <b>' + opt.name + '</b> 有最新楼盘消息或价格变动，我们会第一时间通知您</li><li>请选择订阅服务：<input name="subprice" id="subprice" type="checkbox" class="checkbox" value="1"><label for="subprice">价格变动通知</label><input name="subinfo" id="subinfo" type="checkbox" class="checkbox" value="2"><label for="subinfo">楼盘最新消息</label></li><li>';
				if (opt.mobile) html += '您已绑定手机号码， <a href="javascript:" class="red subchange">使用电子邮箱订阅</a></li><li><input type="text" id="subval" value="' + opt.mobile + '" readonly></li>';
				else if (opt.email) html += '您已绑定电子邮箱， <a href="javascript:" class="red subchange">使用手机订阅</a></li><li><input type="text" id="subval" value="' + opt.email + '" readonly></li>';
				else html += '请输入您的手机号码或邮箱地址：</li><li><input type="text" id="subval"></li><li>请输入您收到的验证码：</li><li><input type="text" id="dyencode" name="encode" style="width:80px"> &nbsp; <a href="javascript:" class="red sendCode">点击免费获取验证码</a></li>'
				$superM.append(html + '<li><a href="javascript:" class="lightbtn subBtn">订 &nbsp; 阅<button type="submit"/></a><a href="javascript:" class="lightbtn showUnSub">退订该楼盘通知</a></li></ul></form><form id="unSubForm" style="display:none"><input type="hidden" value="' + opt.hid + '" name="hid"><ul><li><b>退订' + opt.name + '的通知服务</b></li><li>请选择退订服务:<input name="unprice" id="unprice" type="checkbox" class="checkbox" value="1"><label for="unprice">价格变动通知</label><input name="uninfo" id="uninfo" type="checkbox" class="checkbox" value="2"><label for="uninfo">楼盘最新消息</label></li><li>请输入您订阅时的手机号码或邮箱地址：</li><li><input type="text" id="unsubval"></li><li>请输入您收到的验证码：</li><li><input type="text" name="encode" id="undyencode" style="width:80px"> &nbsp; <a href="javascript:" class="red sendCode">点击免费获取验证码</a></li><li><a href="javascript:" class="lightbtn unSubBtn">退 &nbsp; 订</a><a href="javascript:" class="lightbtn showSub">返回订阅</a></li></ul></form></div>');
				var $sv = $("#subval"),
					$uv = $("#unsubval"),
					mOrE = function($s) {
						if (/^1[3458]\d{9}$/.test($s.val())) $s.attr("name", "mobile");
						else if (/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/.test($s.val())) $s.attr("name", "email");
						else {
							alertM("请填写正确的手机号码或邮箱地址", {
								cName: 'error',
								rf: function() {
									$s.focus();
								}
							});
							return false;
						}
						return true;
					},
					sendCode = function($t, $f, $v) {
						if (mOrE($v)) $.ajax({
							url: opt.sendurl,
							dataType: "json",
							data: $f.serialize()
						}).done(function(data) {
							if (data.state == "succ") {
								$t.removeAttr("class").html("等待120秒后可以再次点击");
								var i = 119;
								var setin = setInterval(function() {
									$t.html("等待" + i + "秒后可以再次点击")
									if (--i < 0) {
										$t.attr("class", "red sendCode").html("点击免费获取验证码");
										clearInterval(setin);
									}
								}, 999)
							}
							alertM(data.alert, {
								cName: data.state
							})
						}).fail(function() {
							alertM(name + "失败，请检查网络连接是否已断开", {
								cName: 'error'
							});
						})
					},
					check = function(url, name, $f, $s, $e) {
						if (!$f.find("input:checked").length) alertM("请至少选择一项订阅内容", {
							cName: 'error'
						});
						else if (mOrE($s)) {
							if ($e.length && $e.val() == "") alertM("请填写验证码", {
								cName: 'error',
								rf: function() {
									$e.focus();
								}
							});
							else $.ajax({
								url: url,
								dataType: "json",
								data: $f.serialize()
							}).done(function(data) {
								if (data.state == "succ") mod.close();
								alertM(data.alert, {
									cName: data.state
								})
							}).fail(function() {
								alertM(name + "失败，请检查网络连接是否已断开", {
									cName: 'error'
								});
							})
						}
						return false
					};
				var $sf = $("#subForm").on("submit", function() {
					return check(opt.suburl, "订阅", $sf, $sv, $("#dyencode"))
				}).on("click", "a.subBtn", function() {
					$sf.trigger("submit");
				}).on("click", "a.sendCode", function() {
					sendCode($(this), $sf, $sv);
				}).on("click", "a.showUnSub", function() {
					$sf.slideUp();
					$uf.slideDown();
				}).on("click", "a.subchange", function() {
					var $t = $(this).parent();
					if (opt.mobile && opt.email) {
						$sv.val(opt.email);
						$t.html('您已绑定电子邮箱， <a href="javascript:" class="red subreturn">返回</a>')
					} else {
						$sv.removeAttr("readonly").val("").parent().after('<li class="crb">请输入您收到的验证码：</li><li class="crb"><input type="text" id="dyencode" name="encode" style="width:80px"> &nbsp; <a href="javascript:" class="red sendCode">点击免费获取验证码</a></li>');
						$t.html('请输入您的' + (opt.email ? '手机号码' : '邮箱') + '号码， <a href="javascript:" class="red subreturn">返回</a>')
					}
				}).on("click", "a.subreturn", function() {
					$sf.find('li.crb').remove();
					$sv.prop("readonly", true);
					var $t = $(this).parent();
					if (opt.mobile) {
						$t.html('您已绑定手机号码， <a href="javascript:" class="red subchange">使用电子邮箱订阅</a>')
						$sv.val(opt.mobile);
					} else {
						$t.html('您已绑定电子邮箱， <a href="javascript:" class="red subchange">使用手机订阅</a>')
						$sv.val(opt.email);
					}

				});
				var $uf = $("#unSubForm").on("submit", function() {
					return check(opt.unSuburl, "退订", $uf, $uv, $("#undyencode"))
				}).on("click", "a.unSubBtn", function() {
					$uf.trigger("submit");
				}).on("click", "a.sendCode", function() {
					sendCode($(this), $uf, $uv);
				}).on("click", "a.showSub", function() {
					$uf.slideUp();
					$sf.slideDown();
				});
			}
			if (op) {
				$("#sub" + op.type).prop("checked", true).siblings().prop("checked", false);
				if (mod.index != "sub") mod.sendInfo(op.t, "info");
				else return;
			}
			if (mod.index != "sub") mod.openMod("sub");
			else mod.closeMod();
		},
		mobile: function(op) {
			opt = mod.mobileOpt;
			if (!$("#smmobile").length) {
				$superM.append('<div id="smmobile" class="smpanl"><h3 class="panlT"><a href="javascript:" class="fr">&times;</a>发送房源信息到手机</h3><ul><li><b>发送' + opt.name + '的房源信息到您的手机</b></li><li>您将会收到如下信息：</li><li class="gray9">' + opt.info + '</li><li>请输入您的手机号码：</li><li><input type="text" name="mobile" id="dymobile"></li><li>请输入您收到的验证码：</li><li><input type="text" name="mobile" id="dyencode" style="width:80px">&nbsp;<a href="javascript:" class="red">点击免费获取验证码</a></li><li><a href="javascript:" class="send lightbtn">发送房源信息到手机</a></li></ul></div>');
				var $m = $("#dymobile");
				var $e = $("#dyencode");
				$("#smmobile").on("click", "a.red", function() {
					var $t = $(this);
					if (!/^1[3458]\d{9}$/.test($m.val())) {
						alertM("请填写正确的手机号码格式", {
							cName: 'error',
							rf: function() {
								$m.focus();
							}
						});
					} else {
						$.ajax({
							url: opt.checkurl,
							dataType: 'jsonp',
							data: {
								mobile: $m.val()
							}
						}).done(function(data) {
							if (data.state == "succ") {
								$t.removeAttr("class").html("等待120秒后可以再次点击");
								var i = 119;
								var setin = setInterval(function() {
									$t.html("等待" + i + "秒后可以再次点击")
									if (--i < 0) {
										$t.attr("class", "red").html("点击免费获取验证码");
										clearInterval(setin);
									}
								}, 999)
							}
							alertM(data.alert, {
								cName: data.state
							});
						}).fail(function() {
							alertM("验证码发送失败，请检查网络连接是否已断开", {
								cName: 'error'
							});
						});
					}
				}).on("click", "a.send", function() {
					if (!/^1[3458]\d{9}$/.test($m.val())) {
						alertM("请填写正确的手机号码格式", {
							cName: 'error',
							rf: function() {
								$m.focus();
							}
						});
					} else if ($e.val() == "") {
						alertM("请填写验证码", {
							cName: 'error',
							rf: function() {
								$e.focus();
							}
						});
					} else {
						$.ajax({
							url: opt.murl,
							dataType: 'jsonp',
							data: {
								id: opt.hid,
								mobile: $m.val(),
								encode: $e.val()
							}
						}).done(function(data) {
							if (data.state == "succ") mod.close();
							alertM(data.alert, {
								cName: data.state
							})
						}).fail(function() {
							alertM("发送失败，请检查网络连接是否已断开", {
								cName: 'error'
							});
						});
					}
				})
				$m.keydown(function(e) {
					if (e.which == 9 || e.which == 8) return;
					if (e.which < 48 || e.which > 105 || (e.which > 57 && e.which < 96)) return false;
				})
			}
			if (op) {
				if (mod.index != "mobile") mod.sendInfo(op.t, "info");
				else return;
			}
			if (mod.index != "mobile") mod.openMod("mobile");
			else mod.closeMod();
		},
		pk: function(opt) {
			var pkOpt = mod.pkOpt;
			var s = '<li>请先选择需要对比的' + pkOpt.name + '<br>最多可同时对比' + pkOpt.length + '个' + pkOpt.name + '</li><li><a href="javascript:" class="db lightbtn">对比' + pkOpt.name + '</a><a class="qk lightbtn" href="javascript:">清空' + pkOpt.name + '</a></li>';
			if (!$("#smpk").length) {
				$superM.append('<div id="smpk" class="smpanl"><h3 class="panlT"><a href="javascript:" class="fr">&times;</a>对比' + pkOpt.name + '信息</h3><ul>' + s + '</ul></div>')
				var $pk = $("#smpk");
				$pk.on("click", "em", function() {
					$(this).parent().remove();
					if ($pk.find("li").length == 2) $pk.find("li").eq(0).show()
					$.cookie("db", $pk.find("ul").html());
				}).on("click", "a.qk", function() {
					$pk.find("ul").html(s);
					$.cookie("db", "", "")
				}).on("click", "a.db", function() {
					if ($pk.find("li").length > 3) {
						var href = [];
						$pk.find("a").slice(0, -2).each(function() {
							href.push($(this).attr("data-val"))
						});
						setTimeout(function() {
							window.location.href = pkOpt.url + href.join("-") + "/";
						}, 99)
					}
				});
				if ($.cookie("db")) {
					$pk.find("ul").html($.cookie("db"));
				}
			}
			if (opt) {
				var $pk = $("#smpk");
				if ($pk.find("li").length < pkOpt.length + 2) {
					var bl = 1;
					$pk.find("a").each(function() {
						if (opt.val == $(this).attr("data-val")) {
							alertM("请勿选择重复楼盘", {
								cName: "error"
							});
							bl = 0;
							return false;
						}
					})
					if (bl) {
						mod.sendInfo(opt.t);
						$pk.find("li").eq(0).hide().after('<li><em></em><a data-val="' + opt.val + '" href="' + opt.url + '">' + opt.name + '</a></li>');
						$.cookie("db", $pk.find("ul").html());
					}
				} else alertM("最多只能选择" + pkOpt.length + "个楼盘", {
					cName: "error"
				})
				if (mod.index != "pk") mod.openMod("pk");
			} else {
				if (mod.index != "pk") mod.openMod("pk");
				else mod.closeMod();
			}
		},
		talk: function() {
			var opt = mod.mobileOpt;
			if (!$("#smtalk").length) {
				$superM.append('<div id="smtalk" class="smpanl"><h3 class="panlT"><a href="javascript:" class="fr">&times;</a>在线聊天</h3><div class="smcon"><div id="talkInfo"><a href="#" class="fl"><img src="<!--#echo var="static"-->images/test/180x180.jpg" alt="王志坤">王志坤</a><p>电话： 15511871706<br>QQ： 暂无<br>服务：裕华区 翟营大街<br>公司： <a href="#">21世纪</a><a href="#">海天阳光园店</a></p></div><ul id="talkContent"><li><h5>王志坤<span>下午 6:20</span></h5> 会把屏抓花不？ </li><li><h5>我<span>下午 6:21</span></h5> 不会<br> 小孩子指甲要能抓花华硕也不用做了 </li><li><h5>王志坤<span>下午 6:25</span></h5> 嗯嗯<br> 回头一起买n4a </li><li><h5>我<span>下午 6:25</span></h5> 好，不着急 </li><li><h5>王志坤<span>下午 6:20</span></h5> 会把屏抓花不？ </li><li><h5>我<span>下午 6:21</span></h5> 不会<br> 小孩子指甲要能抓花华硕也不用做了 </li><li><h5>王志坤<span>下午 6:25</span></h5> 嗯嗯<br> 回头一起买n4a </li><li><h5>我<span>下午 6:25</span></h5> 好，不着急 </li></ul><textarea id=""></textarea><a href="javascript:" class="lightbtn">发 &nbsp; 送</a></div></div>');

			}
			if (mod.index != "talk") mod.openMod("talk");
			else mod.closeMod();
		},
		sendInfo: function(opt, c) {
			c = c ? c : "";
			var o = $(opt).offset(),
				o1 = $superM.offset();
			var $info = $("<div class='sendInfo " + c + "'></div>").appendTo("body").css({
				left: o.left,
				top: o.top
			}).animate({
				top: "+=32",
				opacity: "show"
			}).animate({
				left: o1.left - 480,
				top: o1.top - 160
			}).animate({
				left: o1.left - 360,
				opacity: "hide"
			}, function() {
				$info.remove()
			})
		},
		openMod: function(a) {
			if (mod.index && mod.index != a) mod.closeMod();
			$("#sm" + a).stop().animate({
				bottom: 24,
				opacity: "show"
			})
			mod.index = a;
		},
		closeMod: function() {
			$("#sm" + mod.index).stop().animate({
				bottom: 0,
				opacity: "hide"
			})
			mod.index = 0;
		},
		open: function(a, opt) {
			if (mod.state) {
				if (!a) mod.close();
			} else {
				$smu.addClass("on").find("a:gt(1)").each(function(i) {
					$(this).stop().animate({
						bottom: (i + 2) * 64,
						opacity: "show"
					})
				})
				mod.state = 1;
			}
			if (a) mod[a](opt);
		},
		close: function() {
			if (mod.index) mod.closeMod();
			$smu.find("a:gt(1)").stop().animate({
				bottom: 64,
				opacity: "hide"
			}, function() {
				$smu.removeClass("on")
			});
			mod.state = 0;
		},
		start: function(a, opt) {
			require('cookie');
			require('<!--#echo var="static"-->css/mod/superm.css');
			mod = module.exports;
			var html = mod.html.start;
			if (Object.prototype.toString.apply(a) === '[object Array]') {
				html += mod.html.open;
				for (var i = 0, l = a.length; i < l; i++)
				html += mod.html[a[i]];
			} else if (a) html += mod.html[a];
			mod.shareOpt = $.extend(mod.shareOpt, opt.share || {});
			mod.pkOpt = $.extend(mod.pkOpt, opt.pk || {});
			mod.subOpt = $.extend(mod.subOpt, opt.sub || {});
			mod.talkOpt = $.extend(mod.talkOpt, opt.talk || {});
			mod.mobileOpt = $.extend(mod.mobileOpt, opt.mobile || {});
			$(function() {
				$("body").append(html + mod.html.end);
				$smu = $("#smu").on("click", "a", function() {
					if ($(this).index() > 0) mod.open($(this).attr("data-event"));
					else $('html,body').animate({
						scrollTop: 0
					})
				});
				$smu.find("a").each(function(i) {
					this.style.bottom = i * 64 + "px"
				})
				$superM = $("#superM").show().on("click", "h3 a.fr", function() {
					mod.close();
				});
				mod.close();
				if (!-[1, ] && !window.XMLHttpRequest) {
					$superM.css("position", "absolute");
					var $w = $(window).on('scroll', function() {
						$superM.stop(true, false).animate({
							top: $w.height() - $superM.height() + $w.scrollTop()
						})
					});
				}
			})
		}
	}
});