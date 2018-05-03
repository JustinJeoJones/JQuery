"use strict";
$(document).ready(function () {
    class data { //Holds data for each table
        constructor() {
            this.name = "";
            this.phone = "";
            this.people = "";
        }
        addData() { //takes values from forms
            this.name = $(".name").val();
            this.phone = $(".phone").val();
            this.people = $(".customers").val();
        }
        getName() { //returns name
            return this.name;
        }
        getPhone() { //returns phone
            return this.phone;
        }
        getPeople() { //returns people
            return this.people;
        }
    }
    let ClickedID;
    let ClickedTag;
    let t1 = new data();
    let t2 = new data();
    let t3 = new data();
    let t4 = new data();
    let t5 = new data();
    let t6 = new data();
    let t7 = new data();
    let t8 = new data();
    let t9 = new data();
    var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
       mouseX = e.pageX; 
       mouseY = e.pageY;
    });  
    $(".create").hide();
    $(".save").click(function () {
        $(".create").hide();
        if (ClickedID == 1) {
            t1.addData();
        }
        else if (ClickedID == 2) {
            t2.addData();
        }
        else if (ClickedID == 3) {
            t3.addData();
        }
        else if (ClickedID == 4) {
            t4.addData();
        }
        else if (ClickedID == 5) {
            t5.addData();
        }
        else if (ClickedID == 6) {
            t6.addData();
        }
        else if (ClickedID == 7) {
            t7.addData();
        }
        else if (ClickedID == 8) {
            t8.addData();
        }
        else if (ClickedID == 9) {
            t9.addData();
        }
    });
    $(".clear").click(function () {
        $(".create").hide();
        let empty = new data();
        if (ClickedID == 1) {
            t1 = empty;
        }
        else if (ClickedID == 2) {
            t2 = empty;
        }
        else if (ClickedID == 3) {
            t3 = empty;
        }
        else if (ClickedID == 4) {
            t4 = empty;
        }
        else if (ClickedID == 5) {
            t5 = empty;
        }
        else if (ClickedID == 6) {
            t6 = empty;
        }
        else if (ClickedID == 7) {
            t7 = empty;
        }
        else if (ClickedID == 8) {
            t8 = empty;
        }
        else if (ClickedID == 9) {
            t9 = empty;
        }
        $(ClickedTag).css("background-color", "#ADAAAA");
    });
    $(".table").click(function () {
        ClickedID = $(this).val();
        ClickedTag = this;
        $(this).css("background-color", "#EEE");
        $('h4').html("Table number:" + ClickedID);
        $(".create").show();
    });

    $(".table").hover(function () {
        let HoveredID = $(this).val();
        $('p').css({'top':mouseY,'left':mouseX}).fadeIn('slow');

        if (HoveredID == 1) {
            $('p').html("Name:" + t1.getName() + "<br> Size of Party:" + t1.getPeople());
        }
        else if (HoveredID == 2) {
            $('p').html("Name:" + t2.getName() + "<br> Size of Party:" + t2.getPeople());
        }
        else if (HoveredID == 3) {
            $('p').html("Name:" + t3.getName() + "<br> Size of Party:" + t3.getPeople());
        }
        else if (HoveredID == 4) {
            $('p').html("Name:" + t4.getName() + "<br> Size of Party:" + t4.getPeople());
        }
        else if (HoveredID == 5) {
            $('p').html("Name:" + t5.getName() + "<br> Size of Party:" + t5.getPeople());
        }
        else if (HoveredID == 6) {
            $('p').html("Name:" + t6.getName() + "<br> Size of Party:" + t6.getPeople());
        }
        else if (HoveredID == 7) {
            $('p').html("Name:" + t7.getName() + "<br> Size of Party:" + t7.getPeople());
        }
        else if (HoveredID == 8) {
            $('p').html("Name:" + t8.getName() + "<br> Size of Party:" + t8.getPeople());
        }
        else if (HoveredID == 9) {
            $('p').html("Name:" + t9.getName() + "<br> Size of Party:" + t9.getPeople());
        }
    


    });

    function getTable(id) {
        if (id == 1) {
            return t1;
        }
        else if (id == 2) {
            return t2;
        }
        else if (id == 3) {
            return t3;
        }
        else if (id == 4) {
            return t4;
        }
        else if (id == 5) {
            return t5;
        }
        else if (id == 6) {
            return t6;
        }
        else if (id == 7) {
            return t7;
        }
        else if (id == 8) {
            return t8;
        }
        else if (id == 9) {
            return t9;
        }
    }
});