/*global jQuery */
/*
 * epub_ui
 * 
 *
 * Copyright (c) 2013 zwhu
 * Licensed under the MIT license.
 */

(function($, undefined) {

    $(document).ready(function() {
        var $homenavbar = $("#homenavbar");
        // 编辑按钮事件
        function tapEditButtonHandler() {
            $homenavbar.css("visibility","visible");
        }
        // 完成按钮事件
        function tapDoneButtonHandler() {
            tapCancelAllButtonHandler();
            $homenavbar.css("visibility","hidden");
        }
        // 删除按钮事件
        function tapDeleteButtonHandler() {

        }
        // 撤销按钮事件
        function tapCancelAllButtonHandler() {
            // TODO:撤销所有全选操作
            $('.selected').css("visibility","hidden");
        }
        // 全选按钮事件
        function tapCheckAllButtonHandler() {
            // TODO: 全选操作
            $('.selected').css("visibility","visible");
            
        }
        //点击图书事件
        function tapUlHandler(event) {
            //如果上面工具栏是隐藏的，则打开图书，反之则是选中图书
            if ($homenavbar.css("visibility") === "hidden") {
                //打开图书
                openBook();
            }else {
                //选择单本图书
                selectedSingleBook(event);
            }
        }

        
        // TODO: getAllBooks(){...}；
        // 取得书籍并在书架中显示
        // 图书的投影图片地址../libs/jquery-mobile/css/themes/default/images/bookbase.png
        // 选中图书的图片地址../libs/jquery-mobile/css//themes/default/images/yes.png
        function getBooks() {
            var n = 9;// 从后台取得书籍的个数
            var src = []; // 从后台取得书籍展示图的src
            src = [
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png",
                    "../libs/jquery-mobile/css/themes/default/images/book1.png" ];
            var bookbasesrc = "../libs/jquery-mobile/css/themes/default/images/bookbase.png";
            var selectedsrc = "../libs/jquery-mobile/css//themes/default/images/yes.png";
            for ( var i = 0; i < n; i++) {
                $("#books").append(
                        "<ul class = 'book'><li class = 'bookselect'><img src= '" + src[i] +
                        "' /><img class = 'selected' style = 'visibility:hidden' src = '" + 
                        selectedsrc + "' /></li><li><img src = '" + bookbasesrc +  "' /></li></ul>");
            }
        }

        //打开图书页,此时应该判断选择哪一本书
        function openBook() {
              $.mobile.changePage($('#readerpage'),'pop');
        }

        //在图书上增加选中图片
        //selectedImage为选中图片对象
        function selectedSingleBook(event) {
            var $selectedImg = $(event.target).next();
                //判断此本书是否被隐藏，如果没被隐藏，则隐藏，反之，则显示
            if ($selectedImg.css("visibility") === "visible") {
                $selectedImg.css("visibility","hidden");
            } else {
                $selectedImg.css("visibility","visible");
            }   
        }
        
        //获得图书目录和为页面上的各个元素注册事件
        getBooks();
        $("#homePageEdit").on('tap', tapEditButtonHandler);
        $("#homePageDone").on('tap', tapDoneButtonHandler);
        $("#homePageDelete").on('tap', tapDeleteButtonHandler);
        $("#homePageCheckAll").on('tap', tapCheckAllButtonHandler);
        $("#homePageCancelAll").on('tap', tapCancelAllButtonHandler);
        $(".bookselect img").on("tap", tapUlHandler);
    });

}(jQuery));
