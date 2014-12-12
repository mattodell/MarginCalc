function addAnotherOption() {
    var option = $("#optionCount").val();

    if (option === "1") {
        $("#option2").show(1000);
        $("#optionCount").val("2");
        $("#removeButton").show(1000);
    } else if (option === "2") {
        $("#option3").show(1000);
        $("#optionCount").val("3");
    } else if (option === "3") {
        $("#option4").show(1000);
        $("#optionCount").val("4");
        $("#addAnotherButton").hide(1000);
    }
}

function removeOption() {
    var option = $("#optionCount").val();

    if (option === "2") {
        $("#option2").hide(1000);
        $("#optionCount").val("1");
        $("#removeButton").hide(1000);
    } else if (option === "3") {
        $("#option3").hide(1000);
        $("#optionCount").val("2");
    } else if (option === "4") {
        $("#option4").hide(1000);
        $("#optionCount").val("3");
        $("#addAnotherButton").show(1000);

    }
}

function saveOptionName() {
    var selectedOption = $("#selectedOption").val();

    if (selectedOption === 'option1') {
        $("#option1Label").text($("#modalOptionName").val());
        localStorage.setItem("option1Label", $("#modalOptionName").val());
    } else if (selectedOption === 'option2') {
        $("#option2Label").text($("#modalOptionName").val());
        localStorage.setItem("option2Label", $("#modalOptionName").val());
    } else if (selectedOption === 'option3') {
        $("#option3Label").text($("#modalOptionName").val());
        localStorage.setItem("option3Label", $("#modalOptionName").val());
    } else if (selectedOption === 'option4') {
        $("#option4Label").text($("#modalOptionName").val());
        localStorage.setItem("option4Label", $("#modalOptionName").val());
    } else if (selectedOption === 'other') {
        $("#otherLabel").text($("#modalOptionName").val());
        localStorage.setItem("otherLabel", $("#modalOptionName").val());
    }

}

function getInt(value) {
    var num = parseInt(value);
    if (isNaN(num)) {
        return 0;
    } else {
        return num;
    }
}

function getFloat(value) {
    var num = parseFloat(value);
    if (isNaN(num)) {
        return 0;
    } else {
        return num;
    }
}

function loadData() {
    $("input:text").each(function () {
        $(this).val(localStorage.getItem($(this).attr('id')));
    });

    var option = localStorage.getItem("option1Label")
    if (option != null) {
        if (option != "") {
            $("#option1Label").text(option);
        }
    }

    option = localStorage.getItem("option2Label")
    if (option != null) {
        if (option != "") {
            $("#option2Label").text(option);
        }
    }

    option = localStorage.getItem("option3Label")
    if (option != null) {
        if (option != "") {
            $("#option3Label").text(option);
        }
    }

    option = localStorage.getItem("option4Label")
    if (option != null) {
        if (option != "") {
            $("#option4Label").text(option);
        }
    }

    option = localStorage.getItem("otherLabel")
    if (option != null) {
        if (option != "") {
            $("#otherLabel").text(option);
        }
    }

}

function clearData() {
    $("input:text").val("");
    localStorage.clear();

    $("#option1Label").text("Option 1");
    $("#option2Label").text("Option 2");
    $("#option3Label").text("Option 3");
    $("#option4Label").text("Option 4");
    $("#otherLabel").text("Other");
}

function saveData(fieldID) {
    localStorage.setItem(fieldID, $("#" + fieldID).val());
}

//Calculate all values
function calculateAll(fieldID) {

    saveData(fieldID);

    /*if (fieldID === "mgn_l1") {
        fillAllSalesMargin();
    }*/

    if (fieldID === "discount_l1_o1") {
        fillAllDiscount();
    }

    //Calculate Net for Option 1
    var net_l1_o1 = ((getFloat($("#list_l1_o1").val())) * .50) * (1 - (getFloat($("#discount_l1_o1").val()) / 100)),
        net_l2_o1 = ((getFloat($("#list_l2_o1").val())) * .50) * (1 - (getFloat($("#discount_l2_o1").val()) / 100)),
        net_l3_o1 = ((getFloat($("#list_l3_o1").val())) * .50) * (1 - (getFloat($("#discount_l3_o1").val()) / 100)),
        net_l4_o1 = ((getFloat($("#list_l4_o1").val())) * .50) * (1 - (getFloat($("#discount_l4_o1").val()) / 100)),
        net_l5_o1 = ((getFloat($("#list_l5_o1").val())) * .50) * (1 - (getFloat($("#discount_l5_o1").val()) / 100)),
        net_l6_o1 = ((getFloat($("#list_l6_o1").val())) * .50) * (1 - (getFloat($("#discount_l6_o1").val()) / 100)),
        net_l7_o1 = ((getFloat($("#list_l7_o1").val())) * .50) * (1 - (getFloat($("#discount_l7_o1").val()) / 100)),
        net_l8_o1 = ((getFloat($("#list_l8_o1").val())) * .50) * (1 - (getFloat($("#discount_l8_o1").val()) / 100)),
        net_l9_o1 = ((getFloat($("#list_l9_o1").val())) * .50) * (1 - (getFloat($("#discount_l9_o1").val()) / 100));

    //Calculate Net for Option 2
    var net_l1_o2 = ((getFloat($("#list_l1_o2").val())) * .50) * (1 - (getFloat($("#discount_l1_o2").val()) / 100)),
        net_l2_o2 = ((getFloat($("#list_l2_o2").val())) * .50) * (1 - (getFloat($("#discount_l2_o2").val()) / 100)),
        net_l3_o2 = ((getFloat($("#list_l3_o2").val())) * .50) * (1 - (getFloat($("#discount_l3_o2").val()) / 100)),
        net_l4_o2 = ((getFloat($("#list_l4_o2").val())) * .50) * (1 - (getFloat($("#discount_l4_o2").val()) / 100)),
        net_l5_o2 = ((getFloat($("#list_l5_o2").val())) * .50) * (1 - (getFloat($("#discount_l5_o2").val()) / 100)),
        net_l6_o2 = ((getFloat($("#list_l6_o2").val())) * .50) * (1 - (getFloat($("#discount_l6_o2").val()) / 100)),
        net_l7_o2 = ((getFloat($("#list_l7_o2").val())) * .50) * (1 - (getFloat($("#discount_l7_o2").val()) / 100)),
        net_l8_o2 = ((getFloat($("#list_l8_o2").val())) * .50) * (1 - (getFloat($("#discount_l8_o2").val()) / 100)),
        net_l9_o2 = ((getFloat($("#list_l9_o2").val())) * .50) * (1 - (getFloat($("#discount_l9_o2").val()) / 100));

    //Calculate Net for Option 3
    var net_l1_o3 = ((getFloat($("#list_l1_o3").val())) * .50) * (1 - (getFloat($("#discount_l1_o3").val()) / 100)),
        net_l2_o3 = ((getFloat($("#list_l2_o3").val())) * .50) * (1 - (getFloat($("#discount_l2_o3").val()) / 100)),
        net_l3_o3 = ((getFloat($("#list_l3_o3").val())) * .50) * (1 - (getFloat($("#discount_l3_o3").val()) / 100)),
        net_l4_o3 = ((getFloat($("#list_l4_o3").val())) * .50) * (1 - (getFloat($("#discount_l4_o3").val()) / 100)),
        net_l5_o3 = ((getFloat($("#list_l5_o3").val())) * .50) * (1 - (getFloat($("#discount_l5_o3").val()) / 100)),
        net_l6_o3 = ((getFloat($("#list_l6_o3").val())) * .50) * (1 - (getFloat($("#discount_l6_o3").val()) / 100)),
        net_l7_o3 = ((getFloat($("#list_l7_o3").val())) * .50) * (1 - (getFloat($("#discount_l7_o3").val()) / 100)),
        net_l8_o3 = ((getFloat($("#list_l8_o3").val())) * .50) * (1 - (getFloat($("#discount_l8_o3").val()) / 100)),
        net_l9_o3 = ((getFloat($("#list_l9_o3").val())) * .50) * (1 - (getFloat($("#discount_l9_o3").val()) / 100));

    //Calculate Net for Option 4
    var net_l1_o4 = ((getFloat($("#list_l1_o4").val())) * .50) * (1 - (getFloat($("#discount_l1_o4").val()) / 100)),
        net_l2_o4 = ((getFloat($("#list_l2_o4").val())) * .50) * (1 - (getFloat($("#discount_l2_o4").val()) / 100)),
        net_l3_o4 = ((getFloat($("#list_l3_o4").val())) * .50) * (1 - (getFloat($("#discount_l3_o4").val()) / 100)),
        net_l4_o4 = ((getFloat($("#list_l4_o4").val())) * .50) * (1 - (getFloat($("#discount_l4_o4").val()) / 100)),
        net_l5_o4 = ((getFloat($("#list_l5_o4").val())) * .50) * (1 - (getFloat($("#discount_l5_o4").val()) / 100)),
        net_l6_o4 = ((getFloat($("#list_l6_o4").val())) * .50) * (1 - (getFloat($("#discount_l6_o4").val()) / 100)),
        net_l7_o4 = ((getFloat($("#list_l7_o4").val())) * .50) * (1 - (getFloat($("#discount_l7_o4").val()) / 100)),
        net_l8_o4 = ((getFloat($("#list_l8_o4").val())) * .50) * (1 - (getFloat($("#discount_l8_o4").val()) / 100)),
        net_l9_o4 = ((getFloat($("#list_l9_o4").val())) * .50) * (1 - (getFloat($("#discount_l9_o4").val()) / 100));

    //Calculate Retail for Option 1
    var retail_l1_o1 = net_l1_o1 * (1 + (getFloat($("#mgn_l1").val()) / 100)),
        retail_l2_o1 = net_l2_o1 * (1 + (getFloat($("#mgn_l2").val()) / 100)),
        retail_l3_o1 = net_l3_o1 * (1 + (getFloat($("#mgn_l3").val()) / 100)),
        retail_l4_o1 = net_l4_o1 * (1 + (getFloat($("#mgn_l4").val()) / 100)),
        retail_l5_o1 = net_l5_o1 * (1 + (getFloat($("#mgn_l5").val()) / 100)),
        retail_l6_o1 = net_l6_o1 * (1 + (getFloat($("#mgn_l6").val()) / 100)),
        retail_l7_o1 = net_l7_o1 * (1 + (getFloat($("#mgn_l7").val()) / 100)),
        retail_l8_o1 = net_l8_o1 * (1 + (getFloat($("#mgn_l8").val()) / 100)),
        retail_l9_o1 = net_l9_o1 * (1 + (getFloat($("#mgn_l9").val()) / 100));

    //Calculate Retail for Option 2
    var retail_l1_o2 = net_l1_o2 * (1 + (getFloat($("#mgn_l1").val()) / 100)),
        retail_l2_o2 = net_l2_o2 * (1 + (getFloat($("#mgn_l2").val()) / 100)),
        retail_l3_o2 = net_l3_o2 * (1 + (getFloat($("#mgn_l3").val()) / 100)),
        retail_l4_o2 = net_l4_o2 * (1 + (getFloat($("#mgn_l4").val()) / 100)),
        retail_l5_o2 = net_l5_o2 * (1 + (getFloat($("#mgn_l5").val()) / 100)),
        retail_l6_o2 = net_l6_o2 * (1 + (getFloat($("#mgn_l6").val()) / 100)),
        retail_l7_o2 = net_l7_o2 * (1 + (getFloat($("#mgn_l7").val()) / 100)),
        retail_l8_o2 = net_l8_o2 * (1 + (getFloat($("#mgn_l8").val()) / 100)),
        retail_l9_o2 = net_l9_o2 * (1 + (getFloat($("#mgn_l9").val()) / 100));

    //Calculate Retail for Option 3
    var retail_l1_o3 = net_l1_o3 * (1 + (getFloat($("#mgn_l1").val()) / 100)),
        retail_l2_o3 = net_l2_o3 * (1 + (getFloat($("#mgn_l2").val()) / 100)),
        retail_l3_o3 = net_l3_o3 * (1 + (getFloat($("#mgn_l3").val()) / 100)),
        retail_l4_o3 = net_l4_o3 * (1 + (getFloat($("#mgn_l4").val()) / 100)),
        retail_l5_o3 = net_l5_o3 * (1 + (getFloat($("#mgn_l5").val()) / 100)),
        retail_l6_o3 = net_l6_o3 * (1 + (getFloat($("#mgn_l6").val()) / 100)),
        retail_l7_o3 = net_l7_o3 * (1 + (getFloat($("#mgn_l7").val()) / 100)),
        retail_l8_o3 = net_l8_o3 * (1 + (getFloat($("#mgn_l8").val()) / 100)),
        retail_l9_o3 = net_l9_o3 * (1 + (getFloat($("#mgn_l9").val()) / 100));

    //Calculate Retail for Option 4
    var retail_l1_o4 = net_l1_o4 * (1 + (getFloat($("#mgn_l1").val()) / 100)),
        retail_l2_o4 = net_l2_o4 * (1 + (getFloat($("#mgn_l2").val()) / 100)),
        retail_l3_o4 = net_l3_o4 * (1 + (getFloat($("#mgn_l3").val()) / 100)),
        retail_l4_o4 = net_l4_o4 * (1 + (getFloat($("#mgn_l4").val()) / 100)),
        retail_l5_o4 = net_l5_o4 * (1 + (getFloat($("#mgn_l5").val()) / 100)),
        retail_l6_o4 = net_l6_o4 * (1 + (getFloat($("#mgn_l6").val()) / 100)),
        retail_l7_o4 = net_l7_o4 * (1 + (getFloat($("#mgn_l7").val()) / 100)),
        retail_l8_o4 = net_l8_o4 * (1 + (getFloat($("#mgn_l8").val()) / 100)),
        retail_l9_o4 = net_l9_o4 * (1 + (getFloat($("#mgn_l9").val()) / 100));

    // Assign quantity values from the table
    var qty_l1 = getInt($("#qty_l1").val()),
        qty_l2 = getInt($("#qty_l2").val()),
        qty_l3 = getInt($("#qty_l3").val()),
        qty_l4 = getInt($("#qty_l4").val()),
        qty_l5 = getInt($("#qty_l5").val()),
        qty_l6 = getInt($("#qty_l6").val()),
        qty_l7 = getInt($("#qty_l7").val()),
        qty_l8 = getInt($("#qty_l8").val()),
        qty_l9 = getInt($("#qty_l9").val());

    //Calculate Total Cost for Option 1
    var totCost_o1 = (qty_l1 * net_l1_o1) +
        (qty_l2 * net_l2_o1) +
        (qty_l3 * net_l3_o1) +
        (qty_l4 * net_l4_o1) +
        (qty_l5 * net_l5_o1) +
        (qty_l6 * net_l6_o1) +
        (qty_l7 * net_l7_o1) +
        (qty_l8 * net_l8_o1) +
        (qty_l9 * net_l9_o1);

    //Calculate Total Cost for Option 2
    var totCost_o2 = (qty_l1 * net_l1_o2) +
        (qty_l2 * net_l2_o2) +
        (qty_l3 * net_l3_o2) +
        (qty_l4 * net_l4_o2) +
        (qty_l5 * net_l5_o2) +
        (qty_l6 * net_l6_o2) +
        (qty_l7 * net_l7_o2) +
        (qty_l8 * net_l8_o2) +
        (qty_l9 * net_l9_o2);

    //Calculate Total Cost for Option 3
    var totCost_o3 = (qty_l1 * net_l1_o3) +
        (qty_l2 * net_l2_o3) +
        (qty_l3 * net_l3_o3) +
        (qty_l4 * net_l4_o3) +
        (qty_l5 * net_l5_o3) +
        (qty_l6 * net_l6_o3) +
        (qty_l7 * net_l7_o3) +
        (qty_l8 * net_l8_o3) +
        (qty_l9 * net_l9_o3);

    //Calculate Total Cost for Option 4
    var totCost_o4 = (qty_l1 * net_l1_o4) +
        (qty_l2 * net_l2_o4) +
        (qty_l3 * net_l3_o4) +
        (qty_l4 * net_l4_o4) +
        (qty_l5 * net_l5_o4) +
        (qty_l6 * net_l6_o4) +
        (qty_l7 * net_l7_o4) +
        (qty_l8 * net_l8_o4) +
        (qty_l9 * net_l9_o4);

    //Calculate Total Retail for Option 1
    var totRetail_o1 = (qty_l1 * retail_l1_o1) +
        (qty_l2 * retail_l2_o1) +
        (qty_l3 * retail_l3_o1) +
        (qty_l4 * retail_l4_o1) +
        (qty_l5 * retail_l5_o1) +
        (qty_l6 * retail_l6_o1) +
        (qty_l7 * retail_l7_o1) +
        (qty_l8 * retail_l8_o1) +
        (qty_l9 * retail_l9_o1);

    //Calculate Total Retail for Option 2
    var totRetail_o2 = (qty_l1 * retail_l1_o2) +
        (qty_l2 * retail_l2_o2) +
        (qty_l3 * retail_l3_o2) +
        (qty_l4 * retail_l4_o2) +
        (qty_l5 * retail_l5_o2) +
        (qty_l6 * retail_l6_o2) +
        (qty_l7 * retail_l7_o2) +
        (qty_l8 * retail_l8_o2) +
        (qty_l9 * retail_l9_o2);

    //Calculate Total Retail for Option 3
    var totRetail_o3 = (qty_l1 * retail_l1_o3) +
        (qty_l2 * retail_l2_o3) +
        (qty_l3 * retail_l3_o3) +
        (qty_l4 * retail_l4_o3) +
        (qty_l5 * retail_l5_o3) +
        (qty_l6 * retail_l6_o3) +
        (qty_l7 * retail_l7_o3) +
        (qty_l8 * retail_l8_o3) +
        (qty_l9 * retail_l9_o3);

    //Calculate Total Retail for Option 4
    var totRetail_o4 = (qty_l1 * retail_l1_o4) +
        (qty_l2 * retail_l2_o4) +
        (qty_l3 * retail_l3_o4) +
        (qty_l4 * retail_l4_o4) +
        (qty_l5 * retail_l5_o4) +
        (qty_l6 * retail_l6_o4) +
        (qty_l7 * retail_l7_o4) +
        (qty_l8 * retail_l8_o4) +
        (qty_l9 * retail_l9_o4);

    //Calculate Total Margin for Option 1
    var totMargin_o1 = ((totRetail_o1 - totCost_o1) / totCost_o1) * 100;

    //Calculate Total Margin for Option 2
    var totMargin_o2 = ((totRetail_o2 - totCost_o2) / totCost_o2) * 100;

    //Calculate Total Margin for Option 3
    var totMargin_o3 = ((totRetail_o3 - totCost_o3) / totCost_o3) * 100;

    //Calculate Total Margin for Option 4
    var totMargin_o4 = ((totRetail_o4 - totCost_o4) / totCost_o4) * 100;

    //Output Option 1 Net Values
    $("#net_l1_o1").text('$' + net_l1_o1.toFixed(2));
    $("#net_l2_o1").text('$' + net_l2_o1.toFixed(2));
    $("#net_l3_o1").text('$' + net_l3_o1.toFixed(2));
    $("#net_l4_o1").text('$' + net_l4_o1.toFixed(2));
    $("#net_l5_o1").text('$' + net_l5_o1.toFixed(2));
    $("#net_l6_o1").text('$' + net_l6_o1.toFixed(2));
    $("#net_l7_o1").text('$' + net_l7_o1.toFixed(2));
    $("#net_l8_o1").text('$' + net_l8_o1.toFixed(2));
    $("#net_l9_o1").text('$' + net_l9_o1.toFixed(2));

    //Output Option 2 Net Values
    $("#net_l1_o2").text('$' + net_l1_o2.toFixed(2));
    $("#net_l2_o2").text('$' + net_l2_o2.toFixed(2));
    $("#net_l3_o2").text('$' + net_l3_o2.toFixed(2));
    $("#net_l4_o2").text('$' + net_l4_o2.toFixed(2));
    $("#net_l5_o2").text('$' + net_l5_o2.toFixed(2));
    $("#net_l6_o2").text('$' + net_l6_o2.toFixed(2));
    $("#net_l7_o2").text('$' + net_l7_o2.toFixed(2));
    $("#net_l8_o2").text('$' + net_l8_o2.toFixed(2));
    $("#net_l9_o2").text('$' + net_l9_o2.toFixed(2));

    //Output Option 3 Net Values
    $("#net_l1_o3").text('$' + net_l1_o3.toFixed(2));
    $("#net_l2_o3").text('$' + net_l2_o3.toFixed(2));
    $("#net_l3_o3").text('$' + net_l3_o3.toFixed(2));
    $("#net_l4_o3").text('$' + net_l4_o3.toFixed(2));
    $("#net_l5_o3").text('$' + net_l5_o3.toFixed(2));
    $("#net_l6_o3").text('$' + net_l6_o3.toFixed(2));
    $("#net_l7_o3").text('$' + net_l7_o3.toFixed(2));
    $("#net_l8_o3").text('$' + net_l8_o3.toFixed(2));
    $("#net_l9_o3").text('$' + net_l9_o3.toFixed(2));

    //Output Option 4 Net Values
    $("#net_l1_o4").text('$' + net_l1_o4.toFixed(2));
    $("#net_l2_o4").text('$' + net_l2_o4.toFixed(2));
    $("#net_l3_o4").text('$' + net_l3_o4.toFixed(2));
    $("#net_l4_o4").text('$' + net_l4_o4.toFixed(2));
    $("#net_l5_o4").text('$' + net_l5_o4.toFixed(2));
    $("#net_l6_o4").text('$' + net_l6_o4.toFixed(2));
    $("#net_l7_o4").text('$' + net_l7_o4.toFixed(2));
    $("#net_l8_o4").text('$' + net_l8_o4.toFixed(2));
    $("#net_l9_o4").text('$' + net_l9_o4.toFixed(2));

    //Output Option 1 Retail Values
    $("#retail_l1_o1").text('$' + retail_l1_o1.toFixed(2));
    $("#retail_l2_o1").text('$' + retail_l2_o1.toFixed(2));
    $("#retail_l3_o1").text('$' + retail_l3_o1.toFixed(2));
    $("#retail_l4_o1").text('$' + retail_l4_o1.toFixed(2));
    $("#retail_l5_o1").text('$' + retail_l5_o1.toFixed(2));
    $("#retail_l6_o1").text('$' + retail_l6_o1.toFixed(2));
    $("#retail_l7_o1").text('$' + retail_l7_o1.toFixed(2));
    $("#retail_l8_o1").text('$' + retail_l8_o1.toFixed(2));
    $("#retail_l9_o1").text('$' + retail_l9_o1.toFixed(2));

    //Output Option 2 Retail Values
    $("#retail_l1_o2").text('$' + retail_l1_o2.toFixed(2));
    $("#retail_l2_o2").text('$' + retail_l2_o2.toFixed(2));
    $("#retail_l3_o2").text('$' + retail_l3_o2.toFixed(2));
    $("#retail_l4_o2").text('$' + retail_l4_o2.toFixed(2));
    $("#retail_l5_o2").text('$' + retail_l5_o2.toFixed(2));
    $("#retail_l6_o2").text('$' + retail_l6_o2.toFixed(2));
    $("#retail_l7_o2").text('$' + retail_l7_o2.toFixed(2));
    $("#retail_l8_o2").text('$' + retail_l8_o2.toFixed(2));
    $("#retail_l9_o2").text('$' + retail_l9_o2.toFixed(2));

    //Output Option 3 Retail Values
    $("#retail_l1_o3").text('$' + retail_l1_o3.toFixed(2));
    $("#retail_l2_o3").text('$' + retail_l2_o3.toFixed(2));
    $("#retail_l3_o3").text('$' + retail_l3_o3.toFixed(2));
    $("#retail_l4_o3").text('$' + retail_l4_o3.toFixed(2));
    $("#retail_l5_o3").text('$' + retail_l5_o3.toFixed(2));
    $("#retail_l6_o3").text('$' + retail_l6_o3.toFixed(2));
    $("#retail_l7_o3").text('$' + retail_l7_o3.toFixed(2));
    $("#retail_l8_o3").text('$' + retail_l8_o3.toFixed(2));
    $("#retail_l9_o3").text('$' + retail_l9_o3.toFixed(2));

    //Output Option 4 Retail Values
    $("#retail_l1_o4").text('$' + retail_l1_o4.toFixed(2));
    $("#retail_l2_o4").text('$' + retail_l2_o4.toFixed(2));
    $("#retail_l3_o4").text('$' + retail_l3_o4.toFixed(2));
    $("#retail_l4_o4").text('$' + retail_l4_o4.toFixed(2));
    $("#retail_l5_o4").text('$' + retail_l5_o4.toFixed(2));
    $("#retail_l6_o4").text('$' + retail_l6_o4.toFixed(2));
    $("#retail_l7_o4").text('$' + retail_l7_o4.toFixed(2));
    $("#retail_l8_o4").text('$' + retail_l8_o4.toFixed(2));
    $("#retail_l9_o4").text('$' + retail_l9_o4.toFixed(2));

    //Output Total Values for Option 1
    $("#totCost_o1").text('$' + totCost_o1.toFixed(2));
    $("#totRetail_o1").text('$' + totRetail_o1.toFixed(2));
    $("#totMargin_o1").text(totMargin_o1.toFixed(1) + '%');

    //Output Total Values for Option 2
    $("#totCost_o2").text('$' + totCost_o2.toFixed(2));
    $("#totRetail_o2").text('$' + totRetail_o2.toFixed(2));
    $("#totMargin_o2").text(totMargin_o2.toFixed(1) + '%');

    //Output Total Values for Option 3
    $("#totCost_o3").text('$' + totCost_o3.toFixed(2));
    $("#totRetail_o3").text('$' + totRetail_o3.toFixed(2));
    $("#totMargin_o3").text(totMargin_o3.toFixed(1) + '%');

    //Output Total Values for Option 4
    $("#totCost_o4").text('$' + totCost_o4.toFixed(2));
    $("#totRetail_o4").text('$' + totRetail_o4.toFixed(2));
    $("#totMargin_o4").text(totMargin_o4.toFixed(1) + '%');
}

// Fill all sales margins from the first value
function fillAllSalesMargin() {
    var margin = $("#mgn_l1").val();
    $("#mgn_l2").val(margin);
    $("#mgn_l3").val(margin);
    $("#mgn_l4").val(margin);
    $("#mgn_l5").val(margin);

    saveData("mgn_l2");
    saveData("mgn_l3");
    saveData("mgn_l4");
    saveData("mgn_l5");
}

// Fill all discounts from the first value
function fillAllDiscount() {
    var margin = $("#discount_l1_o1").val();
    $("#discount_l2_o1").val(margin);
    $("#discount_l3_o1").val(margin);
    $("#discount_l4_o1").val(margin);
    $("#discount_l5_o1").val(margin);
    $("#discount_l6_o1").val(margin);
    $("#discount_l7_o1").val(margin);
    $("#discount_l8_o1").val(margin);
    $("#discount_l9_o1").val(margin);

    saveData("discount_l2_o1");
    saveData("discount_l3_o1");
    saveData("discount_l4_o1");
    saveData("discount_l5_o1");
    saveData("discount_l6_o1");
    saveData("discount_l7_o1");
    saveData("discount_l8_o1");
    saveData("discount_l9_o1");
}

function printTable() {
    $("#printDiv").show();
    var data = $("#printDiv").html();
    $("#printDiv").hide();
    Popup(data);
}

function Popup(data) {
    var mywindow = window.open('', 'House of Locks Margin Calculations');
    mywindow.document.write('<html><head><title>House of Locks Margin Calculations</title>');
    /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');

    mywindow.print();
    mywindow.close();

    return true;
}

var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            })
        }
    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        }
        window.location.href = uri + base64(format(template, ctx))
    }
})()
