var pagebg = '#fffff0';

var headbg = '#cccccc';

var todaybg = '#ff7f50';

function monthlength(month, year) {
   var dd = new Date(year, month, 0);
   return dd.getDate();
   }
function dispCal(yy, mm) {
   var dow = ['E', 'T', 'K', 'N', 'R', 'L', 'P'];
   var moy = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 

'September', 'Oktoober', 'November', 'Detsember'];
   if (mm < 0 || mm > 12) {
      alert('Kuu peab asuma 1 kuni 12 vahemikus');
      return false;
      }
   if (yy != 0 && (yy < 1901 || yy > 2100)) {
      alert('Aastad pevad jääma vahemikku 1900 kuni 2101');
      return false;
      }
   var calendar = new Date();
   var today = calendar.getDate();
   calendar.setDate(+1);
   if (yy > 1900) calendar.setFullYear(yy);
   if (mm > 0) calendar.setMonth(mm - 1);
   var yy = year = calendar.getFullYear();
   var month = calendar.getMonth();
   calendar.setDate(today -1);
   var weekday = calendar.getDay(0);
   var daysInMonth = monthlength(month + 1, year);
   var hilite_start = '<td width="30" style="background:' + todaybg + '" align="center"><b>';
   var td_start = '<td width="30" align="center">';
   var cal = '<div id="cal" style="border:1pt solid></div>

#cccccc; height:180px;width:238px"><table border="0" cellspacing="0" cellpadding="0"><tr><td 

colspan="7", style="background:' + headbg + '", align="center"><b>' + moy[month] + ' ' + year + 

</b></td></tr><tr style="height:23px">;
   for(dex = 0; dex < 7; dex++) {
      if(weekday == dex) cal += td_start + '<b>' + dow[dex] + '</b> </td>';
      else cal += td_start + dow[dex] + '</td>';
      }
   cal += '</tr><tr style="height:23px">';
   var day2 = today;
   for (dex = today; dex > 6; dex -= 7) day2 = dex;
   weekday -= day2 - 1;
   while (weekday < 0) weekday += 7;
   for(dex = 0; dex < weekday; dex++) cal += td_start + ' </td>';
   for(dex = 1; dex <= daysInMonth; dex++) {
      if(weekday == 7) {
         cal += '</tr><tr style="height:23px">';
         weekday = 0;
         }
      if(today == dex) cal += hilite_start + dex + '</b></td>';
      else cal += td_start + dex + '</td>';
      weekday += 1;
      }
   for(dex = weekday; dex < 7; dex++) cal += td_start + ' </td>';
   cal += '</tr></table></div>';
   if (document.getElementById && arguments.length == 2) {
      var mmb = month;
      mm = month + 1;
      var yya = yyb = yy;
      if (mmb < 1) {
         mmb += 12;
         yyb--;
         }
      var mma = month + 2;
      if (mma > 12) {
         mma -= 12;
         yya++;
         }
      var yb = yy - 1;
      var ya = yy + 1;
      cal += '<table border="0" cellspacing="0" cellpadding="2" width="210"><tr><td><a href="#" 

onclick="if (cala = dispCal(' + yb + ',' + mm + ')) {document.getElementById(\'cal\').innerHTML 

= cala; return false;}"><<</a></td><td><a href= onclick=if (cala = dispCal(' + yyb + ',' + 

mmb + ')) {document.getElementById(\'cal\').innerHTML = cala; return false;}"><</a></td><td 

align="right"><a href="#" onclick="if (cala = dispCal(' + yya + ',' + mma + ')) 

{document.getElementById(\'cal\').innerHTML = cala; return false;}"></a>

align="right"><a href="#" onclick="if (cala = dispCal(' + ya + ',' + mm + ')) 

{document.getElementById(\'cal\').innerHTML = cala; return false;}"></a>'
      }
   else {
      cal += '<div> </div>';
      }
   cal += '</div>';
   return cal;
   }
function calendar(yy, mm) {
   var cal = dispCal(yy, mm);
   if (!cal) return false;
   TheNewWin = window.open('', 'calendar', 

'height=255,width=260,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no'

);
   TheNewWin.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 

Transitional\/\/EN" "http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-transitional.dtd"><html 

xmlns="http://www.w3.org/1999/xhtml"><head><title>Kalender</title>');
   if (document.getElementById) TheNewWin.document.write('<script>var pagebg = "' + pagebg + 

'";var headbg = "' + headbg + '";var todaybg = "' + todaybg + '";' + dispCal.toString() + 

'<\/script>');
   TheNewWin.document.write('<\/head><body style="overflow:hidden;background:' + pagebg + '">' + 

cal + '<div style="text-align:center; width:250px"><a href="#" onclick="self.close();return 

false;">Sulge aken<\/a><\/div><\/body><\/html>');
   return true;
   }
                  