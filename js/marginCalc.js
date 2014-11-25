function addAnotherOption() {
    $("#option2").show(1000);
}

function getInt(value) {
    var num = parseInt(value);
    if (isNaN(num)) {
        return 0;
    }
    else {
        return num;
    }
}

function getFloat(value) {
    var num = parseFloat(value);
    if (isNaN(num)) {
        return 0;
    }
    else {
        return num;
    }
}



function calculateAll(fieldID) {
    if (fieldID === "mgn_l1") {
         fillAllSalesMargin();
    }

    if (fieldID === "discount_l1_o1") {
        fillAllDiscount();
    }

    var net_l1_o1 = (getFloat($("#list_l1_o1").val())) * (1 - (getFloat($("#discount_l1_o1").val()) / 100));
    var net_l2_o1 = (getFloat($("#list_l2_o1").val())) * (1 - (getFloat($("#discount_l2_o1").val()) / 100));
    var net_l3_o1 = (getFloat($("#list_l3_o1").val())) * (1 - (getFloat($("#discount_l3_o1").val()) / 100));
    var net_l4_o1 = (getFloat($("#list_l4_o1").val())) * (1 - (getFloat($("#discount_l4_o1").val()) / 100));
    var net_l5_o1 = (getFloat($("#list_l5_o1").val())) * (1 - (getFloat($("#discount_l5_o1").val()) / 100));
    var net_l6_o1 = (getFloat($("#list_l6_o1").val())) * (1 - (getFloat($("#discount_l6_o1").val()) / 100));
    var net_l7_o1 = (getFloat($("#list_l7_o1").val())) * (1 - (getFloat($("#discount_l7_o1").val()) / 100));

    var retail_l1_o1 = net_l1_o1 * (1 + (getFloat($("#mgn_l1").val()) / 100));
    var retail_l2_o1 = net_l2_o1 * (1 + (getFloat($("#mgn_l2").val()) / 100));
    var retail_l3_o1 = net_l3_o1 * (1 + (getFloat($("#mgn_l3").val()) / 100));
    var retail_l4_o1 = net_l4_o1 * (1 + (getFloat($("#mgn_l4").val()) / 100));
    var retail_l5_o1 = net_l5_o1 * (1 + (getFloat($("#mgn_l5").val()) / 100));
    var retail_l6_o1 = net_l6_o1 * (1 + (getFloat($("#mgn_l6").val()) / 100));
    var retail_l7_o1 = net_l7_o1 * (1 + (getFloat($("#mgn_l7").val()) / 100));

    var qty_l1 = getInt($("#qty_l1").val());
    var qty_l2 = getInt($("#qty_l1").val());
    var qty_l3 = getInt($("#qty_l1").val());
    var qty_l4 = getInt($("#qty_l1").val());
    var qty_l5 = getInt($("#qty_l1").val());
    var qty_l6 = getInt($("#qty_l1").val());
    var qty_l7 = getInt($("#qty_l1").val());

    var totCost_o1 = (qty_l1 * net_l1_o1) +
        (qty_l2 * net_l2_o1) +
        (qty_l3 * net_l3_o1) +
        (qty_l4 * net_l4_o1) +
        (qty_l5 * net_l5_o1) +
        (qty_l6 * net_l6_o1) +
        (qty_l7 * net_l7_o1);

    var totRetail_o1 = (qty_l1 * retail_l1_o1) +
        (qty_l2 * retail_l2_o1) +
        (qty_l3 * retail_l3_o1) +
        (qty_l4 * retail_l4_o1) +
        (qty_l5 * retail_l5_o1) +
        (qty_l6 * retail_l6_o1) +
        (qty_l7 * retail_l7_o1);

    var totMargin_o1 = ((totRetail_o1 - totCost_o1) / totCost_o1) * 100;

    $("#net_l1_o1").text('$' + net_l1_o1.toFixed(2));
    $("#net_l2_o1").text('$' + net_l2_o1.toFixed(2));
    $("#net_l3_o1").text('$' + net_l3_o1.toFixed(2));
    $("#net_l4_o1").text('$' + net_l4_o1.toFixed(2));
    $("#net_l5_o1").text('$' + net_l5_o1.toFixed(2));
    $("#net_l6_o1").text('$' + net_l6_o1.toFixed(2));
    $("#net_l7_o1").text('$' + net_l7_o1.toFixed(2));

    $("#retail_l1_o1").text('$' + retail_l1_o1.toFixed(2));
    $("#retail_l2_o1").text('$' + retail_l2_o1.toFixed(2));
    $("#retail_l3_o1").text('$' + retail_l3_o1.toFixed(2));
    $("#retail_l4_o1").text('$' + retail_l4_o1.toFixed(2));
    $("#retail_l5_o1").text('$' + retail_l5_o1.toFixed(2));
    $("#retail_l6_o1").text('$' + retail_l6_o1.toFixed(2));
    $("#retail_l7_o1").text('$' + retail_l7_o1.toFixed(2));

    $("#totCost_o1").text('$' + totCost_o1.toFixed(2));
    $("#totRetail_o1").text('$' + totRetail_o1.toFixed(2));
    $("#totMargin_o1").text(totMargin_o1.toFixed(1) + '%');
}

function fillAllSalesMargin() {
    var margin = $("#mgn_l1").val();
    $("#mgn_l2").val(margin);
    $("#mgn_l3").val(margin);
    $("#mgn_l4").val(margin);
    $("#mgn_l5").val(margin);
    $("#mgn_l6").val(margin);
    $("#mgn_l7").val(margin);
}

function fillAllDiscount() {
    var margin = $("#discount_l1_o1").val();
    $("#discount_l2_o1").val(margin);
    $("#discount_l3_o1").val(margin);
    $("#discount_l4_o1").val(margin);
    $("#discount_l5_o1").val(margin);
    $("#discount_l6_o1").val(margin);
    $("#discount_l7_o1").val(margin);
}
