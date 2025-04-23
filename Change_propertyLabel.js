    /* *****************************************************************************
    Description:
                - On the basis of state of Item, change the color of property Label
    Hooks:
        Type:   Client Event
        Hooks:  'onFormPopulate'
        ***************************************************************************** */
    function changeProLabelColor(fields, colorCode) {
        fields.forEach(field => {
            const element = document.getElementsByName(field)[0];
            if (element) {
                // Try to find 'aras-field__label' or 'sys_f_label'
                let label = element.getElementsByClassName("aras-field__label")[0] || element.getElementsByClassName("sys_f_label")[0];
                if (label) {
                    label.style.color = colorCode;
                }
            }
        });
    }
    
    var state = document.thisItem.getProperty("state");
    
    if (state == "In Progress") {
        changeProLabelColor(["property_1", "property_2", "property_3", "property_4", "......"], "#ff0000");
    }
    else if (state == "In Deployment" || state == "In Approval") {
        changeProLabelColor(["property_1", "property_2", "property_3", "property_4", "......"], "#333333");
    }
    else if (state == "Rejected" || state == "Closed") {
        changeProLabelColor(["property_1", "property_2", "property_3", "property_4", "......"], "#333333");
    }
