define(['jquery'], function ($) {
    const CONST_CONFIG_PATHIP = 'config/root.config.json';
    const serviceProvider = {};

    const IP = '';
    const PATH = '/';  

    /** 
     *
     *获取请求ip
     */
    serviceProvider.getIP = function () {
        var re = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;  
        var arr = location.href.match(re);
        var _ip = arr[2];
        return _ip;
    };

    serviceProvider.getQueryStr = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }

    /**
    *
    *异步获取本地文件
    */
    serviceProvider.get = function (url, _callback) {
        $.get(url, function (data) {
            _callback(data);
        });
    };

    /*
    *
    *异步请求get
    */
    serviceProvider.getAsync = function (url, _callback) {
        $.ajax({
            type: "get",
            async: true, //true:异步 false:同步
            contentType: "application/json;charset=utf-8",
            url: _url,
            data: "",
            dataType: 'json',
            success: function (rr) {
                _callback(rr);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //alert("dfddd");
            }
        });
    };

    /*
    *
    *同步请求get
    */
    serviceProvider.getSync = function (url, _callback) {
        $.ajax({
            type: "get",
            async: false, //true:异步 false:同步
            contentType: "application/json;charset=utf-8",
            url: _url,
            data: "",
            dataType: 'json',
            success: function (rr) {
                _callback(rr);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //alert("dfddd");
            }
        });
    };

    /**
     * 初始化参数
     */
    serviceProvider.init = function () {
        this.get(CONST_CONFIG_PATHIP, function (data) {
            this.IP = data == undefined ? "" : data.IP;
            this.PATH = data == undefined ? "" : data.PATH;
            console.log(data == undefined ? "" : data.basemap);
        });
    };

  
    //总之，返回一个对象就行
    return serviceProvider;
});
