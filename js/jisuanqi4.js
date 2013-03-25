lilv_array = new Array; 
//08年12月23日利率下限(7折)
lilv_array[1] = new Array;
lilv_array[1][1] = new Array;
lilv_array[1][2] = new Array;
lilv_array[1][1][5] = 0.0403;//商贷 1～5年 4.03%
lilv_array[1][1][10] = 0.0416;//商贷 5-30年 4.16%
lilv_array[1][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[1][2][10] = 0.0387;//公积金 5-30年 3.87%
//08年12月23日利率下限(85折)
lilv_array[2] = new Array;
lilv_array[2][1] = new Array;
lilv_array[2][2] = new Array;
lilv_array[2][1][5] = 0.049;//商贷 1～5年 4.9%
lilv_array[2][1][10] = 0.0505;//商贷 5-30年 5.05%
lilv_array[2][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[2][2][10] = 0.0387;//公积金 5-30年 3.87%
//08年12月23日基准利率
lilv_array[3] = new Array;
lilv_array[3][1] = new Array;
lilv_array[3][2] = new Array;
lilv_array[3][1][5] = 0.0576;//商贷 1～5年 5.76%
lilv_array[3][1][10] = 0.0594;//商贷 5-30年 5.94%
lilv_array[3][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[3][2][10] = 0.0387;//公积金 5-30年 3.87%
//08年12月23日利率上限(1.1倍)
lilv_array[4] = new Array;
lilv_array[4][1] = new Array;
lilv_array[4][2] = new Array;
lilv_array[4][1][5] = 0.0634;//商贷 1～5年 6.34%
lilv_array[4][1][10] = 0.0653;//商贷 5-30年 6.53%
lilv_array[4][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[4][2][10] = 0.0387;//公积金 5-30年 3.87%
//10年10月20日利率下限(7折)
lilv_array[5] = new Array;
lilv_array[5][1] = new Array;
lilv_array[5][2] = new Array;
lilv_array[5][1][5] = 0.04172;//商贷 1～5年 4.172%
lilv_array[5][1][10] = 0.04298;//商贷 5-30年 4.298%
lilv_array[5][2][5] = 0.035;//公积金 1～5年 3.5%
lilv_array[5][2][10] = 0.0405;//公积金 5-30年 4.05%
//10年10月20日利率下限(85折)
lilv_array[6] = new Array;
lilv_array[6][1] = new Array;
lilv_array[6][2] = new Array;
lilv_array[6][1][5] = 0.05066;//商贷 1～5年 5.066%
lilv_array[6][1][10] = 0.05218;//商贷 5-30年 5.218%
lilv_array[6][2][5] = 0.035;//公积金 1～5年 3.5%
lilv_array[6][2][10] = 0.0405;//公积金 5-30年 4.05%
//10年10月20日基准利率
lilv_array[7] = new Array;
lilv_array[7][1] = new Array;
lilv_array[7][2] = new Array;
lilv_array[7][1][5] = 0.0596;//商贷 1～5年 5.96%
lilv_array[7][1][10] = 0.0614;//商贷 5-30年 6.14%
lilv_array[7][2][5] = 0.035;//公积金 1～5年 3.5%
lilv_array[7][2][10] = 0.0405;//公积金 5-30年 4.05%
//10年10月20日利率上限(1.1倍)
lilv_array[8] = new Array;
lilv_array[8][1] = new Array;
lilv_array[8][2] = new Array;
lilv_array[8][1][5] = 0.06556;//商贷 1～5年 6.556%
lilv_array[8][1][10] = 0.06754;//商贷 5-30年 6.754%
lilv_array[8][2][5] = 0.035;//公积金 1～5年 3.5%
lilv_array[8][2][10] = 0.0405;//公积金 5-30年 4.05%
//10年12月26日基准利率
lilv_array[9] = new Array;
lilv_array[9][1] = new Array;
lilv_array[9][2] = new Array;
lilv_array[9][1][5] = 0.0622;//商贷 1～5年 6.22%
lilv_array[9][1][10] = 0.0640;//商贷 5-30年 6.4%
lilv_array[9][2][5] = 0.0375;//公积金 1～5年 3.75%
lilv_array[9][2][10] = 0.0430;//公积金 5-30年 4.3%
//10年12月26日利率下限(7折)
lilv_array[10] = new Array;
lilv_array[10][1] = new Array;
lilv_array[10][2] = new Array;
lilv_array[10][1][5] = 0.04354;//商贷 1～5年 4.354%
lilv_array[10][1][10] = 0.0448;//商贷 5-30年 4.48%
lilv_array[10][2][5] = 0.0375;//公积金 1～5年 3.75%
lilv_array[10][2][10] = 0.0430;//公积金 5-30年 4.3%
//10年12月26日利率上限(1.1倍)
lilv_array[11] = new Array;
lilv_array[11][1] = new Array;
lilv_array[11][2] = new Array;
lilv_array[11][1][5] = 0.06842;//商贷 1～5年 6.842%
lilv_array[11][1][10] = 0.0704;//商贷 5-30年 7.04%
lilv_array[11][2][5] = 0.0375;//公积金 1～5年 3.75%
lilv_array[11][2][10] = 0.0430;//公积金 5-30年 4.3%
//11年2月9日基准利率
lilv_array[12] = new Array;
lilv_array[12][1] = new Array;
lilv_array[12][2] = new Array;
lilv_array[12][1][5] = 0.0645;//商贷 1～5年 6.45%
lilv_array[12][1][10] = 0.0660;//商贷 5-30年 6.6%
lilv_array[12][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[12][2][10] = 0.0450;//公积金 5-30年 4.5%
//11年2月9日利率下限(7折)
lilv_array[13] = new Array;
lilv_array[13][1] = new Array;
lilv_array[13][2] = new Array;
lilv_array[13][1][5] = 0.04515;//商贷 1～5年 4.515%
lilv_array[13][1][10] = 0.04620;//商贷 5-30年 4.62%
lilv_array[13][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[13][2][10] = 0.0450;//公积金 5-30年 4.5%
//11年2月9日利率下限(85折)
lilv_array[14] = new Array;
lilv_array[14][1] = new Array;
lilv_array[14][2] = new Array;
lilv_array[14][1][5] = 0.054825;//商贷 1～5年 5.4825%
lilv_array[14][1][10] = 0.0561;//商贷 5-30年 5.61%
lilv_array[14][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[14][2][10] = 0.0450;//公积金 5-30年 4.5%
//11年2月9日利率上限(1.1倍)
lilv_array[15] = new Array;
lilv_array[15][1] = new Array;
lilv_array[15][2] = new Array;
lilv_array[15][1][5] = 0.07095;//商贷 1～5年 7.095%
lilv_array[15][1][10] = 0.0726;//商贷 5-30年 7.26%
lilv_array[15][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[15][2][10] = 0.0450;//公积金 5-30年 4.5%
//11年4月5日基准利率
lilv_array[16] = new Array;
lilv_array[16][1] = new Array;
lilv_array[16][2] = new Array;
lilv_array[16][1][5] = 0.0665;//商贷 1～5年 6.65%
lilv_array[16][1][10] = 0.0680;//商贷 5-30年 6.8%
lilv_array[16][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[16][2][10] = 0.0470;//公积金 5-30年 4.7%
//11年4月5日利率下限（7折）
lilv_array[17] = new Array;
lilv_array[17][1] = new Array;
lilv_array[17][2] = new Array;
lilv_array[17][1][5] = 0.04655;//商贷 1～5年 4.655%
lilv_array[17][1][10] = 0.0476;//商贷 5-30年 4.76%
lilv_array[17][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[17][2][10] = 0.0470;//公积金 5-30年 4.7%
//11年4月5日利率下限（85折）
lilv_array[18] = new Array;
lilv_array[18][1] = new Array;
lilv_array[18][2] = new Array;
lilv_array[18][1][5] = 0.056525;//商贷 1～5年 5.6525%
lilv_array[18][1][10] = 0.0578;//商贷 5-30年 5.78%
lilv_array[18][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[18][2][10] = 0.0470;//公积金 5-30年 4.7%
//11年4月5日利率上限（1.1倍）
lilv_array[19] = new Array;
lilv_array[19][1] = new Array;
lilv_array[19][2] = new Array;
lilv_array[19][1][5] = 0.07315;//商贷 1～5年 7.315%
lilv_array[19][1][10] = 0.0748;//商贷 5-30年 7.48%
lilv_array[19][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[19][2][10] = 0.0470;//公积金 5-30年 4.7%
//11年7月6日基准利率
lilv_array[20] = new Array;
lilv_array[20][1] = new Array;
lilv_array[20][2] = new Array;
lilv_array[20][1][5] = 0.0690;//商贷 1～5年 6.9%
lilv_array[20][1][10] = 0.0705;//商贷 5-30年 7.05%
lilv_array[20][2][5] = 0.0445;//公积金 1～5年 4.45%
lilv_array[20][2][10] = 0.0490;//公积金 5-30年 4.9%
//11年7月6日利率下限（7折）
lilv_array[21] = new Array;
lilv_array[21][1] = new Array;
lilv_array[21][2] = new Array;
lilv_array[21][1][5] = 0.0483;//商贷 1～5年 4.83%
lilv_array[21][1][10] = 0.04935;//商贷 5-30年 4.935%
lilv_array[21][2][5] = 0.0445;//公积金 1～5年 4.45%
lilv_array[21][2][10] = 0.0490;//公积金 5-30年 4.9%
//11年7月6日利率下限（85折）
lilv_array[22] = new Array;
lilv_array[22][1] = new Array;
lilv_array[22][2] = new Array;
lilv_array[22][1][5] = 0.05865;//商贷 1～5年 5.865%
lilv_array[22][1][10] = 0.059925;//商贷 5-30年 5.9925%
lilv_array[22][2][5] = 0.0445;//公积金 1～5年 4.45%
lilv_array[22][2][10] = 0.0490;//公积金 5-30年 4.9%
//11年7月6日利率上限（1.1倍）
lilv_array[23] = new Array;
lilv_array[23][1] = new Array;
lilv_array[23][2] = new Array;
lilv_array[23][1][5] = 0.0759;//商贷 1～5年 7.59%
lilv_array[23][1][10] = 0.07755;//商贷 5-30年 7.755%
lilv_array[23][2][5] = 0.0445;//公积金 1～5年 4.45%
lilv_array[23][2][10] = 0.0490;//公积金 5-30年 4.9%
//12年6月8日基准利率
lilv_array[24] = new Array;
lilv_array[24][1] = new Array;
lilv_array[24][2] = new Array;
lilv_array[24][1][5] = 0.0665;//商贷 1～5年 6.65%
lilv_array[24][1][10] = 0.0680;//商贷 5-30年 6.8%
lilv_array[24][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[24][2][10] = 0.0470;//公积金 5-30年 4.7%
//12年6月8日利率下限（7折）
lilv_array[25] = new Array;
lilv_array[25][1] = new Array;
lilv_array[25][2] = new Array;
lilv_array[25][1][5] = 0.04655;//商贷 1～5年 4.655%
lilv_array[25][1][10] = 0.0476;//商贷 5-30年 4.76%
lilv_array[25][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[25][2][10] = 0.0470;//公积金 5-30年 4.7%
//12年6月8日利率下限（85折）
lilv_array[26] = new Array;
lilv_array[26][1] = new Array;
lilv_array[26][2] = new Array;
lilv_array[26][1][5] = 0.056525;//商贷 1～5年 5.6525%
lilv_array[26][1][10] = 0.0578;//商贷 5-30年 5.78%
lilv_array[26][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[26][2][10] = 0.0470;//公积金 5-30年 4.7%
//12年6月8日利率上限（1.1倍）
lilv_array[27] = new Array;
lilv_array[27][1] = new Array;
lilv_array[27][2] = new Array;
lilv_array[27][1][5] = 0.07315;//商贷 1～5年 7.315%
lilv_array[27][1][10] = 0.0748;//商贷 5-30年 7.48%
lilv_array[27][2][5] = 0.0420;//公积金 1～5年 4.2%
lilv_array[27][2][10] = 0.0470;//公积金 5-30年 4.7%
//12年7月6日基准利率
lilv_array[28] = new Array;
lilv_array[28][1] = new Array;
lilv_array[28][2] = new Array;
lilv_array[28][1][5] = 0.0640;//商贷 1～5年 6.4%
lilv_array[28][1][10] = 0.0655;//商贷 5-30年 6.55%
lilv_array[28][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[28][2][10] = 0.0450;//公积金 5-30年 4.5%
//12年7月6日利率下限（7折）
lilv_array[29] = new Array;
lilv_array[29][1] = new Array;
lilv_array[29][2] = new Array;
lilv_array[29][1][5] = 0.0448;//商贷 1～5年 4.48%
lilv_array[29][1][10] = 0.04585;//商贷 5-30年 4.585%
lilv_array[29][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[29][2][10] = 0.0450;//公积金 5-30年 4.5%
//12年7月6日利率下限（85折）
lilv_array[30] = new Array;
lilv_array[30][1] = new Array;
lilv_array[30][2] = new Array;
lilv_array[30][1][5] = 0.0544;//商贷 1～5年 5.44%
lilv_array[30][1][10] = 0.055675;//商贷 5-30年 5.5675%
lilv_array[30][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[30][2][10] = 0.0450;//公积金 5-30年 4.5%
//12年7月6日利率上限（1.1倍）
lilv_array[31] = new Array;
lilv_array[31][1] = new Array;
lilv_array[31][2] = new Array;
lilv_array[31][1][5] = 0.0704;//商贷 1～5年 7.04%
lilv_array[31][1][10] = 0.07205;//商贷 5-30年 7.205%
lilv_array[31][2][5] = 0.0400;//公积金 1～5年 4%
lilv_array[31][2][10] = 0.0450;//公积金 5-30年 4.5%
function exc_zuhe(fmobj, v) {
    if (fmobj.name == "calc1") {
        if (v == 3) {
            document.getElementById('calc1_zuhe').style.display = 'block';
            fmobj.jisuan_radio[1].checked = true;
            exc_js(fmobj, 2);
        } else {
            document.getElementById('calc1_zuhe').style.display = 'none';
        }
    } else {
        if (v == 3) {
            document.getElementById('calc2_zuhe').style.display = 'block';
            fmobj.jisuan_radio[1].checked = true;
            exc_js(fmobj, 2);
        } else {
            document.getElementById('calc2_zuhe').style.display = 'none';
        }
    }
}
function exc_js(fmobj, v) {
    if (fmobj.name == "calc1") {
        if (v == 1) {
            document.getElementById('calc1_js_div1').style.display = 'block';
            document.getElementById('calc1_js_div2').style.display = 'none';
            document.getElementById('calc1_zuhe').style.display = 'none';
            fmobj.type.value = 1;
        } else {
            document.getElementById('calc1_js_div1').style.display = 'none';
            document.getElementById('calc1_js_div2').style.display = 'block';
        }
    } else {
        if (v == 1) {
            document.getElementById('calc2_js_div1').style.display = 'block';
            document.getElementById('calc2_js_div2').style.display = 'none';
            document.getElementById('calc2_zuhe').style.display = 'none';
            fmobj.type.value = 1;
        } else {
            document.getElementById('calc2_js_div1').style.display = 'none';
            document.getElementById('calc2_js_div2').style.display = 'block';
        }
    }
}
function formReset(fmobj) {
    if (fmobj.name == "calc1") {
        document.getElementById('calc1_js_div1').style.display = 'block';
        document.getElementById('calc1_js_div2').style.display = 'none';
    } else {
    }
}
function showRightDiv(fmobj) {
    if (ext_total(fmobj) == false) {
        return;
    }
    var a = window.open('', 'calc_win', 'status=yes,scrollbars=yes,resizable=yes,width=550,height=500,left=0,top=0')
    if (fmobj.name == "calc1") {
        document.calc1.target = "calc_win";
        document.calc1.submit();
    } else {
        document.calc2.target = "calc_win";
        document.calc2.submit();
    }
}
function reg_Num(str) {
    if (str.length == 0) {
        return false;
    }
    var Letters = "1234567890.";
    for (i = 0; i < str.length; i++) {
        var CheckChar = str.charAt(i);
        if (Letters.indexOf(CheckChar) == -1) {
            return false;
        }
    }
    return true;
}
function getlilv(lilv_class, type, years) {
    var lilv_class = parseInt(lilv_class);
    if (years <= 5) {
        return lilv_array[lilv_class][type][5];
    } else {
        return lilv_array[lilv_class][type][10];
    }
}
function getMonthMoney2(lilv, total, month, cur_month) {
    var lilv_month = lilv / 12;
    var benjin_money = total / month;
    return (total - benjin_money * cur_month) * lilv_month + benjin_money;
}
function getMonthMoney1(lilv, total, month) {
    var lilv_month = lilv / 12;
    return total * lilv_month * Math.pow(1 + lilv_month, month) / (Math.pow(1 + lilv_month, month) - 1);
}
function ext_total(fmobj) {
    while ((k = fmobj.month_money2.length - 1) >= 0) {
        fmobj.month_money2.options.remove(k);
    }
    var years = fmobj.years.value;
    var month = fmobj.years.value * 12;
    fmobj.month1.value = month + "(月)";
    fmobj.month2.value = month + "(月)";
    if (fmobj.type.value == 3) {
        if (!reg_Num(fmobj.total_sy.value)) {
            alert("混合型贷款请填写商贷比例");
            fmobj.total_sy.focus();
            return false;
        }
        if (!reg_Num(fmobj.total_gjj.value)) {
            alert("混合型贷款请填写公积金比例");
            fmobj.total_gjj.focus();
            return false;
        }
        if (fmobj.total_sy.value == null) {
            fmobj.total_sy.value = 0;
        }
        if (fmobj.total_gjj.value == null) {
            fmobj.total_gjj.value = 0;
        }
        var total_sy = fmobj.total_sy.value;
        var total_gjj = fmobj.total_gjj.value;
        fmobj.fangkuan_total1.value = "略";
        fmobj.fangkuan_total2.value = "略";
        fmobj.money_first1.value = 0;
        fmobj.money_first2.value = 0;
        var total_sy = parseInt(fmobj.total_sy.value);
        var total_gjj = parseInt(fmobj.total_gjj.value);
        var daikuan_total = total_sy + total_gjj;
        fmobj.daikuan_total1.value = daikuan_total;
        fmobj.daikuan_total2.value = daikuan_total;
        var lilv_sd = getlilv(fmobj.lilv.value, 1, years);
        var lilv_gjj = getlilv(fmobj.lilv.value, 2, years);
        var all_total2 = 0;
        var month_money2 = "";
        for (j = 0; j < month; j++) {
            huankuan = getMonthMoney2(lilv_sd, total_sy, month, j) + getMonthMoney2(lilv_gjj, total_gjj, month, j);
            all_total2 += huankuan;
            huankuan = Math.round(huankuan * 100) / 100;
            month_money2 += (j + 1) + "月," + huankuan + "(元)\n";
        }
        fmobj.month_money2.value = month_money2;
        fmobj.all_total2.value = Math.round(all_total2 * 100) / 100;
        fmobj.accrual2.value = Math.round((all_total2 - daikuan_total) * 100) / 100;
        var month_money1 = getMonthMoney1(lilv_sd, total_sy, month) + getMonthMoney1(lilv_gjj, total_gjj, month);
        fmobj.month_money1.value = Math.round(month_money1 * 100) / 100 + "(元)";
        var all_total1 = month_money1 * month;
        fmobj.all_total1.value = Math.round(all_total1 * 100) / 100;
        fmobj.accrual1.value = Math.round((all_total1 - daikuan_total) * 100) / 100;
    } 
    else {
        var lilv = getlilv(fmobj.lilv.value, fmobj.type.value, fmobj.years.value);
        if (fmobj.jisuan_radio[0].checked == true) {
            if (!reg_Num(fmobj.price.value)) {
                alert("请填写单价");
                fmobj.price.focus();
                return false;
            }
            if (!reg_Num(fmobj.sqm.value)) {
                alert("请填写面积");
                fmobj.sqm.focus();
                return false;
            }
            var fangkuan_total = fmobj.price.value * fmobj.sqm.value;
            fmobj.fangkuan_total1.value = fangkuan_total;
            fmobj.fangkuan_total2.value = fangkuan_total;
            var daikuan_total = (fmobj.price.value * fmobj.sqm.value) * (fmobj.anjie.value / 10);
            fmobj.daikuan_total1.value = daikuan_total;
            fmobj.daikuan_total2.value = daikuan_total;
            var money_first = fangkuan_total - daikuan_total;
            fmobj.money_first1.value = money_first
            fmobj.money_first2.value = money_first;
        } 
        else {
            if (fmobj.daikuan_total000.value.length == 0) {
                alert("请填写贷款总额");
                fmobj.daikuan_total000.focus();
                return false;
            }
            fmobj.fangkuan_total1.value = "略";
            fmobj.fangkuan_total2.value = "略";
            var daikuan_total = fmobj.daikuan_total000.value * 10000;
            fmobj.daikuan_total1.value = daikuan_total;
            fmobj.daikuan_total2.value = daikuan_total;
            fmobj.money_first1.value = 0;
            fmobj.money_first2.value = 0;
        }
        var all_total2 = 0;
        var month_money2 = "";
        for (j = 0; j < month; j++) {
            huankuan = getMonthMoney2(lilv, daikuan_total, month, j);
            all_total2 += huankuan;
            huankuan = Math.round(huankuan * 100) / 100;
            month_money2 += (j + 1) + "月," + huankuan + "(元)\n";
        }
        fmobj.month_money2.value = month_money2;
        fmobj.all_total2.value = Math.round(all_total2 * 100) / 100;
        fmobj.accrual2.value = Math.round((all_total2 - daikuan_total) * 100) / 100;
        var month_money1 = getMonthMoney1(lilv, daikuan_total, month);
        fmobj.month_money1.value = Math.round(month_money1 * 100) / 100 + "(元)";
        var all_total1 = month_money1 * month;
        fmobj.all_total1.value = Math.round(all_total1 * 100) / 100;
        fmobj.accrual1.value = Math.round((all_total1 - daikuan_total) * 100) / 100;
    }
    if (typeof (getsuithouse) != 'undefined') {
        getsuithouse();
    }
}
function play() {
    if (document.tqhdjsq.dkzws.value == '') {
        alert('请填入贷款总额');
        return false;
    } else
        dkzys = parseFloat(document.tqhdjsq.dkzws.value) * 10000;
    if (document.tqhdjsq.tqhkfs[1].checked && document.tqhdjsq.tqhkws.value == '') {
        alert('请填入部分提前还款额度');
        return false;
    }
    s_yhkqs = parseInt(document.tqhdjsq.yhkqs.value);
    if (document.tqhdjsq.dklx[0].checked) {
        if (s_yhkqs > 60) {
            dklv = getlilv(document.tqhdjsq.dklv_class.value, 2, 10) / 12;
        } else {
            dklv = getlilv(document.tqhdjsq.dklv_class.value, 2, 3) / 12;
        }
    }
    if (document.tqhdjsq.dklx[1].checked) {
        if (s_yhkqs > 60) {
            dklv = getlilv(document.tqhdjsq.dklv_class.value, 1, 10) / 12;
        } else {
            dklv = getlilv(document.tqhdjsq.dklv_class.value, 1, 3) / 12;
        }
    }
    yhdkqs = (parseInt(document.tqhdjsq.tqhksjn.value) * 12 + parseInt(document.tqhdjsq.tqhksjy.value)) - (parseInt(document.tqhdjsq.yhksjn.value) * 12 + parseInt(document.tqhdjsq.yhksjy.value));
    if (yhdkqs < 0 || yhdkqs > s_yhkqs) {
        alert('预计提前还款时间与第一次还款时间有矛盾，请查实');
        return false;
    }
    yhk = dkzys * (dklv * Math.pow((1 + dklv), s_yhkqs)) / (Math.pow((1 + dklv), s_yhkqs) - 1);
    yhkjssj = Math.floor((parseInt(document.tqhdjsq.yhksjn.value) * 12 + parseInt(document.tqhdjsq.yhksjy.value) + s_yhkqs - 2) / 12) + '年' + ((parseInt(document.tqhdjsq.yhksjn.value) * 12 + parseInt(document.tqhdjsq.yhksjy.value) + s_yhkqs - 2) % 12 + 1) + '月';
    yhdkys = yhk * yhdkqs;
    yhlxs = 0;
    yhbjs = 0;
    for (i = 1; i <= yhdkqs; i++) {
        yhlxs = yhlxs + (dkzys - yhbjs) * dklv;
        yhbjs = yhbjs + yhk - (dkzys - yhbjs) * dklv;
    }
    remark = '';
    if (document.tqhdjsq.tqhkfs[1].checked) {
        tqhkys = parseInt(document.tqhdjsq.tqhkws.value) * 10000;
        if (tqhkys + yhk >= (dkzys - yhbjs) * (1 + dklv)) {
            remark = '您的提前还款额已足够还清所欠贷款！';
        } else {
            yhbjs = yhbjs + yhk;
            byhk = yhk + tqhkys;
            if (document.tqhdjsq.clfs[0].checked) {
                yhbjs_temp = yhbjs + tqhkys;
                for (xdkqs = 0; yhbjs_temp <= dkzys; xdkqs++)
                    yhbjs_temp = yhbjs_temp + yhk - (dkzys - yhbjs_temp) * dklv;
                xdkqs = xdkqs - 1;
                xyhk = (dkzys - yhbjs - tqhkys) * (dklv * Math.pow((1 + dklv), xdkqs)) / (Math.pow((1 + dklv), xdkqs) - 1);
                jslx = yhk * s_yhkqs - yhdkys - byhk - xyhk * xdkqs;
                xdkjssj = Math.floor((parseInt(document.tqhdjsq.tqhksjn.value) * 12 + parseInt(document.tqhdjsq.tqhksjy.value) + xdkqs - 2) / 12) + '年' + ((parseInt(document.tqhdjsq.tqhksjn.value) * 12 + parseInt(document.tqhdjsq.tqhksjy.value) + xdkqs - 2) % 12 + 1) + '月';
            } else {
                xyhk = (dkzys - yhbjs - tqhkys) * (dklv * Math.pow((1 + dklv), (s_yhkqs - yhdkqs))) / (Math.pow((1 + dklv), (s_yhkqs - yhdkqs)) - 1);
                jslx = yhk * s_yhkqs - yhdkys - byhk - xyhk * (s_yhkqs - yhdkqs);
                xdkjssj = yhkjssj;
            }
        }
    }
    if (document.tqhdjsq.tqhkfs[0].checked || remark != '') {
        byhk = (dkzys - yhbjs) * (1 + dklv);
        xyhk = 0;
        jslx = yhk * s_yhkqs - yhdkys - byhk;
        xdkjssj = document.tqhdjsq.tqhksjn.value + '年' + document.tqhdjsq.tqhksjy.value + '月';
    }
    document.tqhdjsq.ykhke.value = Math.round(yhk * 100) / 100;
    document.tqhdjsq.yhkze.value = Math.round(yhdkys * 100) / 100;
    document.tqhdjsq.yhlxe.value = Math.round(yhlxs * 100) / 100;
    document.tqhdjsq.gyyihke.value = Math.round(byhk * 100) / 100;
    document.tqhdjsq.xyqyhke.value = Math.round(xyhk * 100) / 100;
    document.tqhdjsq.jslxzc.value = Math.round(jslx * 100) / 100;
    document.tqhdjsq.yzhhkq.value = yhkjssj;
    document.tqhdjsq.xdzhhkq.value = xdkjssj;
    document.tqhdjsq.jsjgts.value = remark;
}
;
function gjjloan2(obj) 
{
    var gryjce;
    var poyjce;
    var grjcbl;
    var pojcbl;
    var xy;
    var fwzj;
    var fwxz;
    var dknx;
    var syhk;
    var dked;
    var hkfs;
    var bxhj;
    var bxhj2;
    var gbl;
    var jtysr;
    var r;
    var rb;
    var gjjdka;
    var gjjdkb;
    var gjjdkc;
    dknx = Math.round(obj.mount10.value);
    if (dknx <= 0) {
        alert('贷款申请年限不能为空,请输入');
        obj.mount10.value = '';
        return;
    }
    var bcv = 0;
    if (dknx > 5) 
    {
        bcv = Math.round(1000000 * l6_30 / 12) / 1000000;
    } else {
        bcv = Math.round(1000000 * l1_5 / 12) / 1000000;
    }
    gjjdka = Math.min(Math.round((jtysr - 400) / r * 10000 * 10) / 10, 600000);
    gjjdkb = Math.round(gjjdka * xy * 10) / 10;
    gjjdkc = Math.round(fwzj * fwxz * 10) / 10;
    dked = Math.round(obj.need.value * 10) / 10;
    obj.need.value = dked;
    if (dked == 0) {
        alert('需要的贷款额度不能为空,请输入');
        obj.need.value = '';
        return;
    }
    if (dked < 0) {
        alert('输入的贷款额度不符合要求,请输入');
        obj.need.value = '';
        return;
    }
    hkfs = obj.select.value;
    if (hkfs == 1) {
        var ylv_new;
        if (dknx >= 1 && dknx <= 5)
            ylv_new = l1_5 / 12;
        else
            ylv_new = l6_30 / 12;
        var ncm = parseFloat(ylv_new) + 1;
        var dknx_new = dknx * 12;
        total_ncm = Math.pow(ncm, dknx_new)
        obj.ze22.value = Math.round(((dked * 10000 * ylv_new * total_ncm) / (total_ncm - 1)) * 100) / 100;
        var pp = Math.round(((dked * 10000 * ylv_new * total_ncm) / (total_ncm - 1)) * 100) / 100;
        gbl = Math.round(Math.ceil(dked * r * 100) / 100 / jtysr * 1000) / 10;
        obj.yj2.value = gbl;
        bxhj = Math.round(pp * dknx * 12 * 100) / 100;
        obj.lx2.value = bxhj;
    }
    if (hkfs == 2) 
    {
        if (dknx > 5) 
        {
            rb = l6_30 * 100;
        } else {
            rb = l1_5 * 100;
        }
        syhk = Math.round((dked * 10000 / (dknx * 12) + dked * 10000 * rb / (100 * 12)) * 100) / 100;
        obj.sfk2.value = syhk;
        var yhke;
        var bxhj;
        var dkys;
        var sydkze;
        var yhkbj;
        dkys = dknx * 12;
        yhkbj = dked * 10000 / dkys;
        yhke = syhk;
        sydkze = dked * 10000 - yhkbj;
        bxhj = syhk;
        for (var count = 2; count <= dkys; ++count) 
        {
            yhke = dked * 10000 / dkys + sydkze * rb / 1200;
            sydkze -= yhkbj;
            bxhj += yhke;
        }
        obj.lx3.value = Math.round(bxhj * 100) / 100;
    }
    if (hkfs == 3) 
    {
        switch (dknx) {
            case 1:
                rb = 83.04 / 100;
                break;
            case 2:
                rb = 81.08 / 100;
                break;
            case 3:
                rb = 79.12 / 100;
                break;
            case 4:
                rb = 77.16 / 100;
                break;
            case 5:
                rb = 75.20 / 100;
                break;
            case 6:
                rb = 73.24 / 100;
                break;
            case 7:
                rb = 71.28 / 100;
                break;
            case 8:
                rb = 69.32 / 100;
                break;
            case 9:
                rb = 67.36 / 100;
                break;
            case 10:
                rb = 65.40 / 100;
                break;
            case 11:
                rb = 63.44 / 100;
                break;
            case 12:
                rb = 61.48 / 100;
                break;
            case 13:
                rb = 59.52 / 100;
                break;
            case 14:
                rb = 57.56 / 100;
                break;
            case 15:
                rb = 55.60 / 100;
                break;
            case 16:
                rb = 53.64 / 100;
                break;
            case 17:
                rb = 51.68 / 100;
                break;
            case 18:
                rb = 49.72 / 100;
                break;
            case 19:
                rb = 47.76 / 100;
                break;
            case 20:
                rb = 45.80 / 100;
                break;
            case 21:
                rb = 43.84 / 100;
                break;
            case 22:
                rb = 41.88 / 100;
                break;
            case 23:
                rb = 39.92 / 100;
                break;
            case 24:
                rb = 37.96 / 100;
                break;
            case 25:
                rb = 36.00 / 100;
                break;
            case 26:
                rb = 34.04 / 100;
                break;
            case 27:
                rb = 32.08 / 100;
                break;
            case 28:
                rb = 30.12 / 100;
                break;
            case 29:
                rb = 28.16 / 100;
                break;
            case 30:
                rb = 26.20 / 100;
                break;
        }
        var yhke;
        var ll;
        var zhbj;
        zhbj = Math.round(dked * 10000 * rb * 100) / 100;
        if (dknx <= 5) 
        {
            ll = l1_5 / 12;
            zdhkll = 0.0378 / 12;
            var total_gjj = Math.pow(zdhkll + 1, dknx * 12);
            syhk = Math.ceil(dked * 10000 * zdhkll * total_gjj / (total_gjj - 1));
        } 
        else 
        {
            ll = l6_30 / 12;
            zdhkll = 0.0423 / 12;
            var total_gjj = Math.pow(zdhkll + 1, dknx * 12 - 1);
            syhk = Math.ceil((dked * 10000 - zhbj) * zdhkll * total_gjj / (total_gjj - 1) + zhbj * zdhkll);
        }
        obj.sfksan.value = syhk;

        var zhyqbj = dked * 10000;
        var zchlx = 0;
        for (i = 1; i < dknx * 12; i++) 
        {
            zchlx += Math.round(zhyqbj * ll * 100) / 100;
            zhyqbj = Math.round((zhyqbj - (syhk - Math.round(zhyqbj * ll * 100) / 100)) * 100) / 100;
        }
        var sydkze = dked * 10000 - syhk;
        obj.lx4.value = zhyqbj;
        obj.lx5.value = Math.round(zhyqbj * ll * 100) / 100;
        zchlx += Math.round(zhyqbj * ll * 100) / 100;
        obj.lx6.value = Math.round(zchlx * 100) / 100;
    }
}
;
function gjjloan3(obj) 
{
    var dkye = 0;
    var dkzqs = 0;
    var gdhke = 0;
    var sxhke = 0;
    var sxhky = 0;
    var zhhke = 0;
    var zglx = 0;
    var dylx = 0;
    var syqs = 0;
    syqs = Number(obj.lx8_sy.value);
    dkye = Number(obj.lx7.value);
    if (dkye <= 0 || dkye > 780000 || isNaN(dkye)) 
    {
        alert("贷款余额输入不正确");
        return;
    }
    var ll;
    if (obj.lx8[1].checked) 
    {
        ll = Math.round(1000000 * l6_30 / 12) / 1000000;
    } 
    else 
    {
        ll = Math.round(1000000 * l1_5 / 12) / 1000000;
    }
    gdhke = Number(obj.lx9.value);
    if (Number(syqs) <= 0 || isNaN(syqs)) 
    {
        alert("请输入正确的剩于期数!");
        return;
    }
    if (Number(gdhke) <= 0 || isNaN(gdhke)) 
    {
        alert("请输入正确的固定还款额!");
        return;
    }
    var first_lx = Math.round(dkye * ll * 100) / 100;
    if (first_lx > gdhke) 
    {
        alert('固定还款额必须大于首月利息 ' + first_lx);
        obj.lx9.focus();
        obj.lx9.select();
        return;
    }
    var yjqs = 0;
    var sxhky = 0;
    for (var i = 1; i < syqs; i++) {
        sxhky = sxhky + 1;
        dylx = Math.round(dkye * ll * 100) / 100;
        zglx = zglx + dylx;
        if (dkye + dylx >= gdhke) 
        {
            if (dkye + dylx == gdhke)
                zhhke = dkye + dylx;
            dkye = Math.round((dkye - (gdhke - dylx)) * 100) / 100;
        } 
        else 
        {
            zhhke = dkye + dylx;
            dkye = -1;
            break;
        }
    }
    if (dkye > 0) {
        sxhky = sxhky + 1;
        dylx = Math.round(dkye * ll * 100) / 100;
        zglx = zglx + dylx;
        zhhke = dkye + dylx
    }
    if (sxhky > syqs) 
    {
        alert("输入不正确,请重新核对贷款余额和月固定还款额!" + sxhky);
        return;
    }
    obj.lx10.value = sxhky;
    obj.lx11.value = Format(zhhke, 2);
    obj.lx12.value = Format(zglx, 2);
}
