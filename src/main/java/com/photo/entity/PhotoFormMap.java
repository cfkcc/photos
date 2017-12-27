package com.photo.entity;

import com.photo.annotation.TableSeg;
import com.photo.util.FormMap;



/**
 * photo实体表
 */
@TableSeg(tableName = "photo", id="photo_id")
public class PhotoFormMap extends FormMap<String,Object>{

	private static final long serialVersionUID = 1L;

}
