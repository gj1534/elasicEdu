package com.elastic.elasticDemo.contoller;

import com.elastic.elasticDemo.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class MainController {
    @Autowired
    MainService mainService;

    @RequestMapping("/")
    public ModelAndView userList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/home");
        return mv;
    }

    @RequestMapping("/index")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/index");
        return mv;
    }

    @RequestMapping("/layout-static")
    public ModelAndView layout_static(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/layout-static");
        return mv;
    }

    @RequestMapping("/login")
    public ModelAndView login(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/login");
        return mv;
    }

    @RequestMapping("/register")
    public ModelAndView register(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/register");
        return mv;
    }

    @RequestMapping("/password")
    public ModelAndView password(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/password");
        return mv;
    }

    @RequestMapping("/401")
    public ModelAndView error_401(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/401");
        return mv;
    }

    @RequestMapping("/404")
    public ModelAndView error_404(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/404");
        return mv;
    }

    @RequestMapping("/500")
    public ModelAndView error_500(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/500");
        return mv;
    }

    @RequestMapping("/charts")
    public ModelAndView charts(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/charts");
        return mv;
    }

    @RequestMapping("/tables")
    public ModelAndView tables(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        //mv.addObject("businessList", mainService.getBusinessList());
        mv.setViewName("main/tables");
        return mv;
    }
}
