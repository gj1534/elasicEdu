<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <jsp:include page="../common/common.jsp"/>
    </head>
    <body>
        <div>
            검색을 해봅시다!
            <input type="text" id="searchInput" />
            <button type="button" onclick="elasicSearchAjax.searchList();">검색!</button>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">cd_business</th>
                    <th scope="col">nm_people</th>
                    <th scope="col">title</th>
                    <th scope="col">host</th>
                    <th scope="col">address</th>
                    <th scope="col">ymd_start</th>
                    <th scope="col">ymd_end</th>
                    <th scope="col">fl_every</th>
                    <th scope="col">fl_finish</th>
                    <th scope="col">summary</th>
                    <th scope="col">dt_write</th>
                    <th scope="col">biz_tag</th>
                    <th scope="col">nm_education</th>
                    <th scope="col">nm_pay</th>
                    <th scope="col">nm_type</th>
                    <th scope="col">workdetail</th>
                    <th scope="col">dt_sort</th>
                    <th scope="col">theme_tag</th>
                    <th scope="col">cd_work1</th>
                    <th scope="col">cd_work2</th>
                </tr>
            </thead>
            <tbody id="tableBody">
            </tbody>
        </table>
        <div id="paging"></div>
    </body>
    <script>
        elasicSearchAjax.init(1, 'businessInfo_table', 20);
    </script>
</html>