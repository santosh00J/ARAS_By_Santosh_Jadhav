//Change the Tab Label of relationships tabs.
//debugger;
    
    var type = document.thisItem.getType();
    var itm = document.item;
    var state = aras.getItemProperty(itm, 'state');
    var curr_action = document.thisItem.getAction();
    if(type == "ItemTypoe_001"){
        //parent.document.getElementsByClassName("aras-tabs__label")[1].style.color = "#ff0000";
        var reltabValueRev = ["Related Change Orders"];
    
        var relCount = parent.document.getElementsByClassName("aras-tabs__label").length;
        for (var i = 0; i < relCount; i++)
        {
            var relTabLabel = parent.document.getElementsByClassName("aras-tabs__label")[i].innerText;
        
            if (reltabValueRev.includes(relTabLabel)) 
            {
                parent.document.getElementsByClassName("aras-tabs__label")[i].style.color = "#ff0000";
            }
        }
        return false;
    }
    
    var reltabValue = ["Relationships Tab 1", "Relationships Tab 2"];
    var reltabValueRev = ["Relationships Tab 3"];
    
    // Get the total number of tabs
    var relCount = parent.document.getElementsByClassName("aras-tabs__label").length;
    
    for (var i = 0; i < relCount; i++) {
        var relTabLabel = parent.document.getElementsByClassName("aras-tabs__label")[i].innerText;
    
        if (reltabValue.includes(relTabLabel))
        {
            parent.document.getElementsByClassName("aras-tabs__label")[i].style.color = "#ff0000"; // Highlight with red
        }
        else if (!reltabValueRev.includes(relTabLabel))
        {
            // Reset to default if not in reltabValueRev
            parent.document.getElementsByClassName("aras-tabs__label")[i].style.color = "";
        }
        if(state === "In Approval" || state === "In Deployment" || state ==="Extension Review" || state ==="Expired" || state ==="Closed" || state ==="Rejected"){
            parent.document.getElementsByClassName("aras-tabs__label")[i].style.color = "";
        }
    }
    
    // Get the value of the 'oc_revrequired' field
    var Cutinfo1 = getFieldComponentByName("oc_revrequired").getValue();
    
    if (Cutinfo1 == "1") 
    {
        for (var j = 0; j < relCount; j++)
        {
            var relTabLabel1 = parent.document.getElementsByClassName("aras-tabs__label")[j].innerText;
    
            if (reltabValueRev.includes(relTabLabel1)) 
            {
                parent.document.getElementsByClassName("aras-tabs__label")[j].style.color = "#ff0000";
            }
        }
    } 
    else 
    {
        // If 'oc_revrequired' is not "1", reset color of "Reviewers" tab labels to black
        for (var k = 0; k < relCount; k++)
        {
            var relTabLabel2 = parent.document.getElementsByClassName("aras-tabs__label")[k].innerText;
            if (reltabValueRev.includes(relTabLabel2)) 
            {
                parent.document.getElementsByClassName("aras-tabs__label")[k].style.color = "";
            }
        }
    }