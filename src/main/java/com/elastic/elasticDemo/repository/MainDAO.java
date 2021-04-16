package com.elastic.elasticDemo.repository;

import com.elastic.elasticDemo.vo.BusinessVO;
import com.elastic.elasticDemo.vo.UserVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

@Repository
public class MainDAO {
    @Resource
    private SqlSessionTemplate sqlSessionTemplate;

    private static final String MAPPER_NM = "com.elastic.elasticDemo.repository.MainDAO.";

    public List<UserVO> getUserList(){
        return sqlSessionTemplate.selectList(MAPPER_NM + "getUserList");
    }

    public List<BusinessVO> getBusinessList(){
        return sqlSessionTemplate.selectList(MAPPER_NM + "getBusinessList");
    }
}
