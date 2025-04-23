
// debugger;
    var itm = document.item;
    var state = aras.getItemProperty(itm, 'state');

    if(state == "In Progress"){
        document.getElementsByName("property_1")[0].getElementsByClassName("sys_f_label")[0].style.color = "#ff0000";
        document.getElementsByName("property_2")[0].getElementsByClassName("sys_f_label")[0].style.color = "#ff0000";
        document.getElementsByName("property_3")[0].getElementsByClassName("sys_f_label")[0].style.color = "#ff0000";
        document.getElementsByName("property_4")[0].getElementsByClassName("sys_f_label")[0].style.color = "#ff0000";
    }
    else{
        document.getElementsByName("property_1")[0].getElementsByClassName("sys_f_label")[0].style.color = "#333333";
        document.getElementsByName("property_2")[0].getElementsByClassName("sys_f_label")[0].style.color = "#333333";
        document.getElementsByName("property_3")[0].getElementsByClassName("sys_f_label")[0].style.color = "#333333";
        document.getElementsByName("property_4")[0].getElementsByClassName("sys_f_label")[0].style.color = "#333333";
    }