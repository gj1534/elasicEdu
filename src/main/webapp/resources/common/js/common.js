/*!
    * Start Bootstrap - SB Admin v6.0.2 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
(function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);


var elasicSearchAjax = function() {
    var _scope = {
         isInit             : true
        ,page               : 1
        ,size               : 10
        ,totalSize          : 0
        ,firstPage          : 1
        ,lastPage           : 1
        ,searchUrl          : "http://localhost:9200/business_index/_search?pretty"
        ,listData           : {}
        ,listKey            : ""
        ,listColSize        : 0
        ,refreshParam       : {}
        ,searchParam        : {
             "from": 0
            ,"size": 10
            ,"sort": [
                { "dt_sort" : {"order" : "desc"}}
                ,"_score"
            ]
            ,"query": {
                "match_all": {}
            }
        }
    };

    var makePagination = function() {
        var totalPage = _scope.totalSize / _scope.size;
        var first = 1;
        var max = 5;
        var divi = 2;
        var objMap = new Map();

        if(totalPage > max) {
            _scope.lastPage = _scope.page + divi < max ? max : _scope.page + divi;
            _scope.firstPage = _scope.page - divi < divi ? first : _scope.page - divi;
        } else if(totalPage < first) {
            _scope.lastPage = first;
            _scope.firstPage = first;
        } else {
            _scope.lastPage = Math.ceil(_scope.totalSize / _scope.size);
            _scope.firstPage = Math.ceil(_scope.lastPage / max);
        }

        for(var i = _scope.firstPage; i <= _scope.lastPage; i++) {
            objMap.set("page_" + first++, i);
        }

        for(var i = first; first <= max && i <= max; i++) {
            objMap.set("page_" + first++, "remove");
        }

        $("#paging").empty();
        $("#paging").append(templateLiteral.mapTemplate("pagination", objMap));
        $("li[id=page_remove]").remove();
        $("#page_" + _scope.page).addClass("active");
    };

    var makeList = function(listData) {
        var listObj = new Array();

        for(var i = 0; i < listData.length; i++) {
            listObj.push(listData[i]._source);
        }

        $("#tableBody").empty();
        if(listData.length > 0) {
            $("#tableBody").append(templateLiteral.forObjTemplate(_scope.listKey, listObj));
        } else {
            listObj.push({"empty": _scope.listColSize})
            $("#tableBody").append(templateLiteral.forObjTemplate('emptyList', listObj));
        }
    };

    var getListPage = function(page, listKey, listColSize) {
        if(_scope.isInit) {
            _scope.refreshParam = _scope.searchParam;
            _scope.isInit = false;
        }

        _scope.listKey = listKey ? listKey : _scope.listKey;
        _scope.listColSize = listColSize ? listColSize : _scope.listColSize;
        _scope.page = page;
        _scope.searchParam.from = (_scope.page - 1) * _scope.size;

        if(isNullStr(_scope.listKey)) {
            console.log("not Found List...");
            return false;
        }

        jsonAjax(_scope.searchUrl, JSON.stringify(_scope.searchParam), jsonObj => {
            _scope.totalSize = jsonObj.hits.total.value;
            _scope.listData = jsonObj.hits.hits;

            makeList(_scope.listData);
            makePagination();
        });
    }

    return {
        init: function(page, listKey, listColSize) {
            getListPage(page, listKey, listColSize);
        },
        searchList: function(searchParam) {
            _scope.searchParam = searchParam;
            getListPage(1);
        },
        refreshList: function() {
            _scope.searchParam = _scope.refreshParam;
            getListPage(1);
        }
    }
}();

function jsonAjax(url, params, callbackFn, callbackParam) {
    $.ajax({
        timeout		: 10000
        ,cache 		: true
        ,async 		: false
        ,dataType   : "json"
        ,type		: "POST"
        ,contentType: 'application/json'
        ,url		: url
        ,data       : params
        ,success : function(data, status, xhr){
            if(callbackFn) {
                callbackFn(data, callbackParam || '');
            }
        }
        ,error	: function(xhr,status,error){
            console.log(url, xhr);
            console.log(error);
        }
    });
}

function isNullStr(str) {
    if(!str || 'undefined' == str || 'null' == str || 'Null' == str || 'NaN' == str) {
        return true;
    }

    return false;
}