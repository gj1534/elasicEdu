package com.elastic.elasticDemo.service;

import com.elastic.elasticDemo.repository.MainDAO;
import com.elastic.elasticDemo.vo.BusinessVO;
import com.elastic.elasticDemo.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainDAO mainDAO;

    public List<UserVO> getUserList() throws Exception {
        return mainDAO.getUserList();
    }

    public List<BusinessVO> getBusinessList() throws Exception {
        return mainDAO.getBusinessList();
    }
}
