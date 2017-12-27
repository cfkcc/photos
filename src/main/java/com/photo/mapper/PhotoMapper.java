package com.photo.mapper;

import java.util.List;

import com.photo.entity.PhotoFormMap;
import com.photo.mapper.base.BaseMapper;


public interface PhotoMapper extends BaseMapper{

	public List<PhotoFormMap> findPhotoPage(PhotoFormMap userFormMap);
	
}
