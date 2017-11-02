/**
 * Created by aspetko on 01.11.17.
 */

/**
 * Filters a JSON node by genre
 * @param node
 * @param genre
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

/**
 * Creates a table row
 * @param element the movie object from JSON
 * @param area the radiobutton group
 * @returns {string} the html element
 */
function printToHtml(element, area) {
  return "<tr><td><input type=\"radio\" name=\""+area+"\" id=\"enabled_"+element.ID+"\" onclick=\"" +
    "enableNumberInputForSelectedRow('"+element.ID+"')\"></td>" +
    "<td id=\"name_"+element.ID+"\">"+element.Movie+"</td>" +
    "<td>"+element.Area+"</td>" +
    "<td><input id=\""+element.ID+"\" type=\"number\" min=\"1\" value=\"2\" disabled></td></tr>";
}

/**
 * Displays that no matching genres was found on the timespot
 * @returns {string}
 */
function printNoMatchingMovieToHtml() {
  return "</tr><td>-</td><td>No Movie match the genre</td><td>-</td><td>-</td>";
}

/**
 * Creating HTML to unselect the selection
 * @param id
 * @param area
 * @returns {string}
 */
function printNotGoing(id, area){
  return "<tr><td><input id=\""+id+"\" type=\"radio\" name=\""+area+"\" checked></td><td>I am not going</td><td>-</td><td>-</td></tr>";
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
      greeting = "Dear Mr. "+name+",";
    } else if (first_name.length>0){
      greeting = "Dear "+first_name+",";
    }
  } else if (document.getElementById('mrsRadio').checked) {
    if ((name.length===0) && (first_name.length===0)){
      greeting = "Dear movie fan,";
    } else if (first_name.length==0){
      greeting = "Dear Mrs. "+name+",";
    } else if (name.length==0){
      greeting = "Dear "+first_name+",";
    }
  } else if (document.getElementById('msRadio').checked) {
    if ((name.length===0) && (first_name.length===0)){
      greeting = "Dear movie fan,";
    } else if (name.length>0){
      greeting = "Dear Ms. "+name+",";
    } else if (first_name.length>0){
      greeting = "Dear "+first_name+",";
    }
  } else {
    if ((name.length===0) && (first_name.length===0)){
      greeting = "Dear Sir or Madame,";
    } else if (name.length>0){
      greeting = "Dear Mr./Mrs./Ms. "+name+",";
    } else if (first_name.length>0){
      greeting = "Dear "+first_name+",";
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
