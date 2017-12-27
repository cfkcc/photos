package com.photo.controller.photo;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.photo.controller.index.BaseController;
import com.photo.entity.PhotoFormMap;
import com.photo.mapper.PhotoMapper;
import com.photo.plugin.PageView;
import com.photo.util.Common;
@Controller
@RequestMapping("/photo/")
public class PhotoController extends BaseController {
	
	@Inject
	private PhotoMapper photoMapper;
	
	@RequestMapping("list")
	public String listUI(Model model) throws Exception {
//		model.addAttribute("res", findByRes());
		return Common.BACKGROUND_PATH + "/photo/photo/list";
	}

	@ResponseBody
	@RequestMapping("findByPage")
	public PageView findByPage( String pageNow,
			String pageSize,String column,String sort) throws Exception {
		PhotoFormMap photoFormMap = getFormMap(PhotoFormMap.class);
		photoFormMap=toFormMap(photoFormMap, pageNow, pageSize,photoFormMap.getStr("orderby"));
		photoFormMap.put("column", column);
		photoFormMap.put("sort", sort);
        pageView.setRecords(photoMapper.findPhotoPage(photoFormMap));//不调用默认分页,调用自已的mapper中findUserPage
        return pageView;
	}
}
