var pageii = null;
var grid = null;
$(function() {
	
	grid = lyGrid({
		pagId : 'paging',
		l_column : [ {
			colkey : "app_id",
			name : "APPID",
		},{
			colkey : "package_name",
			name : "APP包名",
		},{
			colkey : "group_id",
			name : "专辑ID",
		}, {
			colkey : "sort",
			name : "排序",
			isSort:true
		}, {
			colkey : "photo_id",
			name : "图片ID",
			isSort:true
		},{
			colkey : "img_url",
			name : "图片路径",
		},{
			colkey : "is_hot",
			name : "热门",
			isSort:true
		}, {
			colkey : "status",
			name : "状态",
			isSort:true
		}, {
			colkey : "is_free",
			name : "免费",
			isSort:true
		}, {
			colkey : "coins",
			name : "金币数"
		}, {
			colkey : "create_time",
			name : "时间",
			isSort:true,
			renderData : function(rowindex,data, rowdata, column) {
				return new Date(data).format("yyyy-MM-dd hh:mm:ss");
			}
		}, {
			name : "操作",
			renderData : function( rowindex ,data, rowdata, colkeyn) {
				return "测试渲染函数";
			}
		} ],
		jsonUrl : rootPath + '/photo/findByPage.shtml',
		checkbox : true,
		serNumber : true
	});
	$("#search").click("click", function() {// 绑定查询按扭
		var searchParams = $("#searchForm").serializeJson();// 初始化传参数
		grid.setOptions({
			data : searchParams
		});
	});
	
	$("#callback_test").click("click", function() {
		paging_callback();
	});
	$("#addAccount").click("click", function() {
		addAccount();
	});
	$("#editAccount").click("click", function() {
		editAccount();
	});
	$("#delAccount").click("click", function() {
		delAccount();
	});
	$("#permissions").click("click", function() {
		permissions();
	});
});
function paging_callback(){
	var parm = {
			pagId : 'paging_callback',
			l_column : [ {
				colkey : "app_id",
				name : "APPID",
			},{
				colkey : "package_name",
				name : "APP包名",
			},{
				colkey : "group_id",
				name : "专辑ID",
			}, {
				colkey : "sort",
				name : "排序",
				isSort:true
			}, {
				colkey : "photo_id",
				name : "图片ID",
				isSort:true
			},{
				colkey : "img_url",
				name : "图片路径",
			},{
				colkey : "is_hot",
				name : "热门",
				isSort:true
			}, {
				colkey : "status",
				name : "状态",
				isSort:true
			}, {
				colkey : "is_free",
				name : "免费",
				isSort:true
			}, {
				colkey : "coins",
				name : "金币数"
			}, {
				colkey : "create_time",
				name : "时间",
				isSort:true,
				renderData : function(rowindex,data, rowdata, column) {
					return new Date(data).format("yyyy-MM-dd hh:mm:ss");
				}
			}, {
				name : "操作",
				renderData : function( rowindex ,data, rowdata, colkeyn) {
					return "测试渲染函数";
				}
			} ],
			jsonUrl : rootPath + '/photo/findByPage.shtml',
			checkbox : true,
			serNumber : true
	}
	
	var grid_c=lyGrid(parm,function(c,d){
		//回调方法
		pageii = layer.open({
			title : "回调方法生成表格", 
			type : 1,
			area : [ "800px", "400px" ],
			content : $("#callback_div"),btn: ['确认', '取消']
		  	,yes: function(sum, layero){ //或者使用btn1
		  		layer.close(index);
			 },cancel: function(index){ //或者使用btn2
				 layer.close(index);
			 }
		});
	});
}
function editAccount() {
	var cbox = grid.getSelectedCheckbox();
	if (cbox.length > 1 || cbox == "") {
		layer.msg("只能选中一个");
		return;
	}
	pageii = layer.open({
		title : "编辑",
		type : 2,
		area : [ "600px", "80%" ],
		content : rootPath + '/user/editUI.shtml?id=' + cbox
	});
}
function addAccount() {
	pageii = layer.open({
		title : "新增",
		type : 2,
		area : [ "600px", "80%" ],
		content : rootPath + '/user/addUI.shtml'
	});
}
function delAccount() {
	var cbox = grid.getSelectedCheckbox();
	if (cbox == "") {
		layer.msg("请选择删除项！！");
		return;
	}
	layer.confirm('是否删除？', function(index) {
		var url = rootPath + '/user/deleteEntity.shtml';
		var s = CommnUtil.ajax(url, {
			ids : cbox.join(",")
		}, "json");
		if (s == "success") {
			layer.msg('删除成功');
			grid.loadData();
		} else {
			layer.msg('删除失败');
		}
	});
}
