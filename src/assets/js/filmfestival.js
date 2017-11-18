/**
 * Created by aspetko on 01.11.17.
 */

/**
 * Filters a JSON node by genre
 * @param node the item of the json document
 * @param genre the genre to filter by
 * @returns the movie JSON object or undefined
 */
function getMoviesByGenres(node, genre){
    if (node.Genres !== undefined) {
        for (var i = 0; i < node.Genres.length; i++) {
            if (node.Genres[i] === genre) {
                return node;
            }
        }
    }
}

const tablePattern = [ "col-md-1", "col-md-4", "col-md-2", "col-md-1" ];

/**
 * Creates a table row
 * @param element the movie object from JSON
 * @param area the radiobutton group
 * @returns {string} the html element
 */
function printToHtml(element, area) {
    return "<tr>" +
                "<td class='"+tablePattern[0]+"'>" +
                   "<input type='radio' " +
                          "name='"+area+"' " +
                          "id='enabled_"+element.ID+"' " +
                          "onclick='enableNumberInputForSelectedRow("+element.ID+")'>" +
                "</td>" +
                "<td class='"+tablePattern[1]+"' " +
                    "id='name_"+element.ID+"'>"+element.Movie+"</td>" +
                "<td class='"+tablePattern[2]+"'>"+element.Area+"</td>" +
                "<td class='"+tablePattern[3]+"'>" +
                    "<input id='"+element.ID+"' " +
                           "type='number' " +
                           "min='1' " +
                           "value='2' " +
                           "disabled>" +
                "</td>" +
           "</tr>";
}

/**
 * Creates a table row
 * @param element the movie object from JSON
 * @param area the radiobutton group
 * @returns {string} the html element
 */
function printToHtmlWithLetter(element, area, letter) {
    return "<tr>" +
                "<td class='"+tablePattern[0]+"'>" +
                     "<input type='radio' " +
                            "name='"+area+"' " +
                            "id='enabled_"+element.ID+"' " +
                            "onclick='enableNumberInputForSelectedRow('"+letter+element.ID+"')'>" +
                "</td>" +
                "<td class='"+tablePattern[1]+"' " +
                    "id='name_"+element.ID+"'>"+element.Movie+"</td>" +
                "<td class='"+tablePattern[2]+"'>"+element.Area+"</td>" +
                "<td class='"+tablePattern[3]+"'>" +
                    "<input id='"+letter+element.ID+"' " +
                           "type='number' " +
                           "min='1' " +
                           "value='2' " +
                           "disabled>" +
                "</td>" +
           "</tr>";
}

/**
 * Displays that no matching genres was found on the timespot
 * @returns {string}
 */
function printNoMatchingMovieToHtml() {
    return "<tr>" +
                "<td class=''"+tablePattern[0]+"'>" +
                  "<input type='radio' " +
                         "disabled>" +
                "</td>" +
                "<td class='"+tablePattern[1]+"'>No Movie match the genre</td>" +
                "<td class='"+tablePattern[2]+"'>-</td>" +
                "<td class='"+tablePattern[3]+"'>-</td>" +
            "</tr>";
}

/**
 * Creating HTML to unselect the selection
 * @param id
 * @param area
 * @returns {string}
 */
function printNotGoing(id, area){
    return "<tr><td class='"+tablePattern[0]+"'><input id='"+id+"' type='radio' name='"+area+"' checked></td><td class='"+tablePattern[1]+"'>I am not going</td><td class='"+tablePattern[2]+"'>-</td><td class='"+tablePattern[3]+"'>-</td></tr>";
}

function enableNumberInputForSelectedRow(coordinate) {
    document.getElementById(coordinate).disabled = false;
}

/**
 *
 */
function resetValues() {
    for (var n =1; n<57; n++){
        $('#n'+n).prop("checked", true);
    }
    $('#mrRadio').prop("checked", false);
    $('#mrsRadio').prop("checked", false);
    $('#msRadio').prop("checked", false);
    $('#firstNameField').val('');
    $('#nameField').val('');
// All view
    for (var day =5; day<9;day++){
        for (var pos = 1; pos<29; pos++){
            $("#"+day+""+pos).val('2');
        }
    }
// 5th - 8th(e-l)i j k l
    for (var day =5; day<9;day++){
        for (var pos = 1; pos<29; pos++) {
            $("#i" + day + "" + pos).val('2');
        }
    }
    for (var day =5; day<9;day++){
        for (var pos = 1; pos<29; pos++) {
            $("#j" + day + "" + pos).val('2');
        }
    }
    for (var day =5; day<9;day++){
        for (var pos = 1; pos<29; pos++) {
            $("#k" + day + "" + pos).val('2');
        }
    }
    for (var day =5; day<9;day++){
        for (var pos = 1; pos<29; pos++) {
            $("#l" + day + "" + pos).val('2');
        }
    }
    // Need to reset the radiobuttons by hand ... :(
    $("#n0").prop("checked", true);
    $("#n1").prop("checked", true);
    $("#n2").prop("checked", true);
    $("#n3").prop("checked", true);
    $("#n4").prop("checked", true);
    $("#n5").prop("checked", true);
    $("#n6").prop("checked", true);
    $("#m0").prop("checked", true);
    $("#m1").prop("checked", true);
    $("#m2").prop("checked", true);
    $("#m3").prop("checked", true);
    $("#m4").prop("checked", true);
    $("#m5").prop("checked", true);
    $("#m6").prop("checked", true);
    $("#o0").prop("checked", true);
    $("#o1").prop("checked", true);
    $("#o2").prop("checked", true);
    $("#o3").prop("checked", true);
    $("#o4").prop("checked", true);
    $("#o5").prop("checked", true);
    $("#o6").prop("checked", true);
    $("#p0").prop("checked", true);
    $("#p1").prop("checked", true);
    $("#p2").prop("checked", true);
    $("#p3").prop("checked", true);
    $("#p4").prop("checked", true);
    $("#p5").prop("checked", true);
    $("#p6").prop("checked", true);
    $("#q0").prop("checked", true);
    $("#q1").prop("checked", true);
    $("#q2").prop("checked", true);
    $("#q3").prop("checked", true);
    $("#q4").prop("checked", true);
    $("#q5").prop("checked", true);
    $("#q6").prop("checked", true);
    $("#r0").prop("checked", true);
    $("#r1").prop("checked", true);
    $("#r2").prop("checked", true);
    $("#r3").prop("checked", true);
    $("#r4").prop("checked", true);
    $("#r5").prop("checked", true);
    $("#r6").prop("checked", true);
    $("#s0").prop("checked", true);
    $("#s1").prop("checked", true);
    $("#s2").prop("checked", true);
    $("#s3").prop("checked", true);
    $("#s4").prop("checked", true);
    $("#s5").prop("checked", true);
    $("#s6").prop("checked", true);
    $("#t0").prop("checked", true);
    $("#t1").prop("checked", true);
    $("#t2").prop("checked", true);
    $("#t3").prop("checked", true);
    $("#t4").prop("checked", true);
    $("#t5").prop("checked", true);
    $("#t6").prop("checked", true);

    $("#q_0").prop("checked", true);
    $("#q_1").prop("checked", true);
    $("#q_2").prop("checked", true);
    $("#q_3").prop("checked", true);
    $("#q_4").prop("checked", true);
    $("#q_5").prop("checked", true);
    $("#q_6").prop("checked", true);

}

function executeAll(){
    var a = [
        "#n0", "#n1", "#n2", "#n3", "#n4","#n5","#n6","#m0", "#m1", "#m2", "#m3", "#m4", "#m5", "#m6", "#o0", "#o1", "#o2",
        "#o3", "#o4", "#o5", "#o6", "#p0", "#p1", "#p2", "#p3", "#p4", "#p5", "#p6", "#q0", "#q1", "#q2", "#q3", "#q4",
        "#q5", "#q6", "#r0", "#r1", "#r2", "#r3", "#r4", "#r5", "#r6", "#s0", "#s1", "#s2", "#s3", "#s4", "#s5", "#s6",
        "#t0", "#t1", "#t2", "#t3", "#t4", "#t5", "#t6", "#q_0", "#q_1", "#q_2", "#q_3", "#q_4", "#q_5",
        "#q_6"];

    for (var x in a){
        $(x).prop("checked", true);
    }
}


function enableAll() {
    $("#n0").prop("checked", true);
    $("#n1").prop("checked", true);
    $("#n2").prop("checked", true);
    $("#n3").prop("checked", true);
    $("#n4").prop("checked", true);
    $("#n5").prop("checked", true);
    $("#n6").prop("checked", true);
    $("#m0").prop("checked", true);
    $("#m1").prop("checked", true);
    $("#m2").prop("checked", true);
    $("#m3").prop("checked", true);
    $("#m4").prop("checked", true);
    $("#m5").prop("checked", true);
    $("#m6").prop("checked", true);
    $("#o0").prop("checked", true);
    $("#o1").prop("checked", true);
    $("#o2").prop("checked", true);
    $("#o3").prop("checked", true);
    $("#o4").prop("checked", true);
    $("#o5").prop("checked", true);
    $("#o6").prop("checked", true);
    $("#p0").prop("checked", true);
    $("#p1").prop("checked", true);
    $("#p2").prop("checked", true);
    $("#p3").prop("checked", true);
    $("#p4").prop("checked", true);
    $("#p5").prop("checked", true);
    $("#p6").prop("checked", true);
    $("#q0").prop("checked", true);
    $("#q1").prop("checked", true);
    $("#q2").prop("checked", true);
    $("#q3").prop("checked", true);
    $("#q4").prop("checked", true);
    $("#q5").prop("checked", true);
    $("#q6").prop("checked", true);
    $("#r0").prop("checked", true);
    $("#r1").prop("checked", true);
    $("#r2").prop("checked", true);
    $("#r3").prop("checked", true);
    $("#r4").prop("checked", true);
    $("#r5").prop("checked", true);
    $("#r6").prop("checked", true);
    $("#s0").prop("checked", true);
    $("#s1").prop("checked", true);
    $("#s2").prop("checked", true);
    $("#s3").prop("checked", true);
    $("#s4").prop("checked", true);
    $("#s5").prop("checked", true);
    $("#s6").prop("checked", true);
    $("#t0").prop("checked", true);
    $("#t1").prop("checked", true);
    $("#t2").prop("checked", true);
    $("#t3").prop("checked", true);
    $("#t4").prop("checked", true);
    $("#t5").prop("checked", true);
    $("#t6").prop("checked", true);
}

/**
 * Read out the selection made by the customer and transfer it into the database.
 */
function readValues() {
    var greeting = "";
    var first_name_element = document.getElementById('firstNameField');
    var first_name = first_name_element.value;
    var name_element = document.getElementById('nameField');
    var name = name_element.value;
    if (document.getElementById('mrRadio').checked) {
        if ((name.length===0) && (first_name.length===0)){
            greeting = "Dear movie fan,";
        } else if (name.length>0){
            greeting = "Dear Mr. "+name.trim()+",";
        } else if (first_name.length>0){
            greeting = "Dear "+first_name+",";
        }
    } else if (document.getElementById('mrsRadio').checked) {
        if ((name.length===0) && (first_name.length===0)){
            greeting = "Dear movie fan,";
        } else if (first_name.length==0){
            greeting = "Dear Mrs. "+name.trim()+",";
        } else if (name.length==0){
            greeting = "Dear "+first_name.trim()+",";
        }
    } else if (document.getElementById('msRadio').checked) {
        if ((name.length===0) && (first_name.length===0)){
            greeting = "Dear movie fan,";
        } else if (name.length>0){
            greeting = "Dear Ms. "+name.trim()+",";
        } else if (first_name.length>0){
            greeting = "Dear "+first_name.trim()+",";
        }
    } else {
        if ((name.length===0) && (first_name.length===0)){
            greeting = "Dear Sir or Madame,";
        } else if (name.length>0){
            greeting = "Dear Mr./Mrs./Ms. "+name+",";
        } else if (first_name.length>0){
            greeting = "Dear "+first_name.trim()+",";
        } else {
            greeting = "Dear Sir or Madame,";
        }
    }
    $('#myModalLabel').text(greeting);

    var thankYou = "we know that it is hard to decide, but select a movie first, please!";
    var name="<ul>";

    for (var day=5; day<9; day++){
        for (var pos = 1; pos<29; pos++){
            var element = document.getElementById('enabled_'+day+pos);
            if (element !==undefined && element !== null){
                if (element.checked) {
                    thankYou = "thank you for signing up to the following movie:";
                    var line = document.getElementById(""+day+pos).value;
                    if (line === "1"){
                        line = "";
                    } else {
                        line += " * ";
                    }
                    switch(day){
                        case 5:
                            switch(pos) {
                                case 1:
                                    line += database["festival"].the5.AM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 2:
                                    line += database["festival"].the5.AM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 3:
                                    line += database["festival"].the5.AM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 4:
                                    line += database["festival"].the5.AM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 5:
                                    line += database["festival"].the5.PM1200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 6:
                                    line += database["festival"].the5.PM1200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 7:
                                    line += database["festival"].the5.PM1200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 8:
                                    line += database["festival"].the5.PM1200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 9:
                                    line += database["festival"].the5.PM0200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 10:
                                    line += database["festival"].the5.PM0200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 11:
                                    line += database["festival"].the5.PM0200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 12:
                                    line += database["festival"].the5.PM0200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 13:
                                    line += database["festival"].the5.PM0400[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 14:
                                    line += database["festival"].the5.PM0400[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 15:
                                    line += database["festival"].the5.PM0400[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 16:
                                    line += database["festival"].the5.PM0400[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 17:
                                    line += database["festival"].the5.PM0600[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 18:
                                    line += database["festival"].the5.PM0600[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 19:
                                    line += database["festival"].the5.PM0600[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 20:
                                    line += database["festival"].the5.PM0600[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 21:
                                    line += database["festival"].the5.PM0800[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 22:
                                    line += database["festival"].the5.PM0800[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 23:
                                    line += database["festival"].the5.PM0800[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 24:
                                    line += database["festival"].the5.PM0800[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 25:
                                    line += database["festival"].the5.PM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 26:
                                    line += database["festival"].the5.PM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 27:
                                    line += database["festival"].the5.PM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 28:
                                    line += database["festival"].the5.PM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                            }

                            break;
                        case 6:
                            switch(pos) {
                                case 1:
                                    line += database["festival"].the6.AM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 2:
                                    line += database["festival"].the6.AM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 3:
                                    line += database["festival"].the6.AM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 4:
                                    line += database["festival"].the6.AM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 5:
                                    line += database["festival"].the6.PM1200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 6:
                                    line += database["festival"].the6.PM1200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 7:
                                    line += database["festival"].the6.PM1200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 8:
                                    line += database["festival"].the6.PM1200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 9:
                                    line += database["festival"].the6.PM0200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 10:
                                    line += database["festival"].the6.PM0200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 11:
                                    line += database["festival"].the6.PM0200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 12:
                                    line += database["festival"].the6.PM0200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 13:
                                    line += database["festival"].the6.PM0400[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 14:
                                    line += database["festival"].the6.PM0400[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 15:
                                    line += database["festival"].the6.PM0400[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 16:
                                    line += database["festival"].the6.PM0400[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 17:
                                    line += database["festival"].the6.PM0600[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 18:
                                    line += database["festival"].the6.PM0600[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 19:
                                    line += database["festival"].the6.PM0600[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 20:
                                    line += database["festival"].the6.PM0600[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 21:
                                    line += database["festival"].the6.PM0800[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 22:
                                    line += database["festival"].the6.PM0800[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 23:
                                    line += database["festival"].the6.PM0800[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 24:
                                    line += database["festival"].the6.PM0800[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 25:
                                    line += database["festival"].the6.PM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 26:
                                    line += database["festival"].the6.PM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 27:
                                    line += database["festival"].the6.PM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 28:
                                    line += database["festival"].the6.PM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                            }
                            break;
                        case 7:
                            switch(pos) {
                                case 1:
                                    line += database["festival"].the7.AM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 2:
                                    line += database["festival"].the7.AM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 3:
                                    line += database["festival"].the7.AM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 4:
                                    line += database["festival"].the7.AM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 5:
                                    line += database["festival"].the7.PM1200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 6:
                                    line += database["festival"].the7.PM1200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 7:
                                    line += database["festival"].the7.PM1200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 8:
                                    line += database["festival"].the7.PM1200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 9:
                                    line += database["festival"].the7.PM0200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 10:
                                    line += database["festival"].the7.PM0200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 11:
                                    line += database["festival"].the7.PM0200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 12:
                                    line += database["festival"].the7.PM0200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 13:
                                    line += database["festival"].the7.PM0400[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 14:
                                    line += database["festival"].the7.PM0400[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 15:
                                    line += database["festival"].the7.PM0400[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 16:
                                    line += database["festival"].the7.PM0400[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 17:
                                    line += database["festival"].the7.PM0600[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 18:
                                    line += database["festival"].the7.PM0600[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 19:
                                    line += database["festival"].the7.PM0600[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 20:
                                    line += database["festival"].the7.PM0600[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 21:
                                    line += database["festival"].the7.PM0800[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 22:
                                    line += database["festival"].the7.PM0800[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 23:
                                    line += database["festival"].the7.PM0800[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 24:
                                    line += database["festival"].the7.PM0800[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 25:
                                    line += database["festival"].the7.PM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 26:
                                    line += database["festival"].the7.PM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 27:
                                    line += database["festival"].the7.PM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 28:
                                    line += database["festival"].the7.PM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                            }
                            break;
                        case 8:
                            switch(pos) {
                                case 1:
                                    line += database["festival"].the8.AM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 2:
                                    line += database["festival"].the8.AM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 3:
                                    line += database["festival"].the8.AM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 4:
                                    line += database["festival"].the8.AM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 5:
                                    line += database["festival"].the8.PM1200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 6:
                                    line += database["festival"].the8.PM1200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 7:
                                    line += database["festival"].the8.PM1200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 8:
                                    line += database["festival"].the8.PM1200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 9:
                                    line += database["festival"].the8.PM0200[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 10:
                                    line += database["festival"].the8.PM0200[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 11:
                                    line += database["festival"].the8.PM0200[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 12:
                                    line += database["festival"].the8.PM0200[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 13:
                                    line += database["festival"].the8.PM0400[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 14:
                                    line += database["festival"].the8.PM0400[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 15:
                                    line += database["festival"].the8.PM0400[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 16:
                                    line += database["festival"].the8.PM0400[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 17:
                                    line += database["festival"].the8.PM0600[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 18:
                                    line += database["festival"].the8.PM0600[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 19:
                                    line += database["festival"].the8.PM0600[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 20:
                                    line += database["festival"].the8.PM0600[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 21:
                                    line += database["festival"].the8.PM0800[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 22:
                                    line += database["festival"].the8.PM0800[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 23:
                                    line += database["festival"].the8.PM0800[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 24:
                                    line += database["festival"].the8.PM0800[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 25:
                                    line += database["festival"].the8.PM1000[0].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 26:
                                    line += database["festival"].the8.PM1000[1].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 27:
                                    line += database["festival"].the8.PM1000[2].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                                case 28:
                                    line += database["festival"].the8.PM1000[3].Movie;
                                    name+="<li>"+line+"</li>";
                                    break;
                            }
                            break;
                    }
                }
            }
        }
    }
    name+="</ul>";
    $('#thankYou').text(thankYou);
    document.getElementById('movieName').innerHTML = name;


}
