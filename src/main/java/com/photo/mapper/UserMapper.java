package com.photo.mapper;

import java.util.List;

import com.photo.entity.UserFormMap;
import com.photo.mapper.base.BaseMapper;


public interface UserMapper extends BaseMapper{

	public List<UserFormMap> findUserPage(UserFormMap userFormMap);
	
}
