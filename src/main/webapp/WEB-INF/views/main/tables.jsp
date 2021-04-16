<%@ page contentType="text/html; charset=utf-8" %>
<!DOCTYPE html>
<html>
    <head>
        <jsp:include page="../common/common.jsp"/>
    </head>
    <body class="sb-nav-fixed">
        <jsp:include page="../common/nav.jsp"/>

        <div id="layoutSidenav">
            <jsp:include page="../common/sidebar.jsp"/>

            <div id="layoutSidenav_content">
                <div class="container-fluid">
                    <h2 class="mt-4">채용정보</h2>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item"><a href="/index">메인</a></li>
                        <li class="breadcrumb-item active">채용정보</li>
                    </ol>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="input-group row-cols-5">
                                <select class="form-control col-lg-1">
                                    <option>제목</option>
                                    <option>회사명</option>
                                </select>
                                <input class="form-control" id="searchInput" type="text" placeholder="검색어를 입력해주세요." aria-label="Search" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button id="searchBtn" class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-table mr-1"></i>
                            채용정보
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>회사명</th>
                                            <th>공고명</th>
                                            <th>포지션</th>
                                            <th>태그</th>
                                            <th>등록일</th>
                                            <th>근무형태</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableBody">
                                        <tr>
                                            <td colspan="6">조회된 데이터가 없습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div id="paging"></div>
                </div>
            </div>
        </div>
        <script>
            elasicSearchAjax.init(1, 'recruit_info', 6);

            $("#searchBtn").on('click', e => {
                var searchTxt = $("#searchInput").val();
                var searchParam = {
                    "from": 0
                    ,"size": 10
                    ,"query": {
                        "bool": {
                            "must": [],
                            "filter": [
                                {
                                    "bool": {
                                        "should": [
                                            {
                                                "match": {
                                                    "title": searchTxt
                                                }
                                            }
                                        ],
                                        "minimum_should_match": 1
                                    }
                                },
                            ],
                        }
                    }
                };

                if(!isNullStr(searchTxt)) {
                    elasicSearchAjax.searchList(searchParam);
                } else {
                    elasicSearchAjax.refreshList();
                }
            });
        </script>
    </body>
</html>
