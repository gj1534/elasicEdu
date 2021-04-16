var templateLiteral = function() {
    var templateHTML = {
        pagination: '<nav aria-label="Page navigation">\n' +
            '  <ul class="pagination">\n' +
            '    <li id="pagePrev">\n' +
            '      <a href="#" aria-label="Previous">\n' +
            '        <span aria-hidden="true">&laquo;</span>\n' +
            '      </a>\n' +
            '    </li>\n' +
            '    <li class="cursor: pointer;" id="page_{{page_1}}" onclick="elasicSearchAjax.getListPageInit({{page_1}})"><span>{{page_1}}</span></li>\n' +
            '    <li class="cursor: pointer;" id="page_{{page_2}}" onclick="elasicSearchAjax.getListPageInit({{page_2}})"><span>{{page_2}}</span></li>\n' +
            '    <li class="cursor: pointer;" id="page_{{page_3}}" onclick="elasicSearchAjax.getListPageInit({{page_3}})"><span>{{page_3}}</span></li>\n' +
            '    <li class="cursor: pointer;" id="page_{{page_4}}" onclick="elasicSearchAjax.getListPageInit({{page_4}})"><span>{{page_4}}</span></li>\n' +
            '    <li class="cursor: pointer;" id="page_{{page_5}}" onclick="elasicSearchAjax.getListPageInit({{page_5}})"><span>{{page_5}}</span></li>\n' +
            '    <li id="pageNext">\n' +
            '      <a href="#" aria-label="Next">\n' +
            '        <span aria-hidden="true">&raquo;</span>\n' +
            '      </a>\n' +
            '    </li>\n' +
            '  </ul>\n' +
            '</nav>'

        ,businessInfo_table:
            '    <tr>\n' +
            '      <td>{{cd_business}}</td>\n' +
            '      <td>{{nm_people}}</td>\n' +
            '      <td>{{title}}</td>\n' +
            '      <td>{{host}}</td>\n' +
            '      <td>{{address}}</td>\n' +
            '      <td>{{ymd_start}}</td>\n' +
            '      <td>{{ymd_end}}</td>\n' +
            '      <td>{{fl_every}}</td>\n' +
            '      <td>{{fl_finish}}</td>\n' +
            '      <td>{{summary}}</td>\n' +
            '      <td>{{dt_write}}</td>\n' +
            '      <td>{{biz_tag}}</td>\n' +
            '      <td>{{nm_education}}</td>\n' +
            '      <td>{{nm_pay}}</td>\n' +
            '      <td>{{nm_type}}</td>\n' +
            '      <td>{{workdetail}}</td>\n' +
            '      <td>{{dt_sort}}</td>\n' +
            '      <td>{{theme_tag}}</td>\n' +
            '      <td>{{cd_work1}}</td>\n' +
            '      <td>{{cd_work2}}</td>\n' +
            '    </tr>\n'

        ,recruit_info:
            '    <tr>\n' +
            '      <td>{{nm_people}}</td>\n' +
            '      <td>{{title}}</td>\n' +
            '      <td>{{summary}}</td>\n' +
            '      <td>{{biz_tag}}</td>\n' +
            '      <td>{{dt_write}}</td>\n' +
            '      <td>{{nm_type}}</td>\n' +
            '    </tr>\n'

        ,emptyList: ' <tr>\n' +
            '           <td colspan="{{empty}}">조회된 데이터가 없습니다.</td>\n' +
            '         </tr>'
    };
    return {
        objTemplate: function(key, dataObj) {
            var html = templateHTML[key];
            for(var data in dataObj) {
                html = html.replaceAll("{{" + data + "}}", dataObj[data]);
            }
            return html;
        },
        mapTemplate: function(key, dataMap) {
            var html = templateHTML[key];
            var dataObj = Object.fromEntries(dataMap);
            for(var data in dataObj) {
                html = html.replaceAll("{{" + data + "}}", dataObj[data]);
            }
            return html;
        },
        forObjTemplate: function(key, listObj) {
            var html = "";
            for(i = 0; i < listObj.length; i++) {
                html += templateLiteral.objTemplate(key, listObj[i]);
            }
            return html;
        },
        forMapTemplate: function(key, listMap) {
            var html = "";
            for(i = 0; i < listMap.length; i++) {
                html += templateLiteral.mapTemplate(key, listMap[i]);
            }
            return html;
        }
    }

}();