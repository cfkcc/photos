package com.photo.mapper;

import java.util.List;

import com.photo.entity.RoleFormMap;
import com.photo.mapper.base.BaseMapper;

public interface RoleMapper extends BaseMapper{
	public List<RoleFormMap> seletUserRole(RoleFormMap map);
	
	public void deleteById(RoleFormMap map);
}
