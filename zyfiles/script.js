$(function () {
    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);

    var bd_vid = $.getUrlParam('bd_vid');
    if (bd_vid.length) {
        $.post('https://as.ruan789.com/api/keyword_sys_write', { "key": "a46b7ebafc6f69e46aa03058fa6d1aa9", "vid": bd_vid, "cid": 4 }, function (res) {
            return res;
        })
    }
});