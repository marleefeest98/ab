setTimeout(function () {
    document.getElementById("box").style.display = "block";
    
  // 100%//
  }, 800);
  setTimeout(function () {
   startScan();
}, 1000);
  function startScan() {
    document.getElementById("box").style.display = "none";
    document.getElementById("scan").style.display = "block";
  
    setTimeout(function () {
          document.getElementById("amount").innerHTML = "34";
      }, 0200);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "256";
      }, 0210);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "312";
      }, 0220);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "349";
      }, 0230);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "460";
      }, 0240);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "498";
      }, 0250);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "685";
      }, 0250);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "702";
      },260);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "702";
      }, 270);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "749";
      }, 280);   setTimeout(function () {
          document.getElementById("amount").innerHTML = "776";
      }, 290);   setTimeout(function () {
          document.getElementById("amount").innerHTML = "897";
      }, 300);   setTimeout(function () {
          document.getElementById("amount").innerHTML = "937";
      }, 310);   setTimeout(function () {
          document.getElementById("amount").innerHTML = "993";
      }, 320);   setTimeout(function () {
          document.getElementById("amount").innerHTML = "1056";
      }, 330);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1056";
      }, 340);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1240";
      }, 350);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1349";
      }, 400);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1416";
      }, 500);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1512";
      }, 600);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1636";
      }, 700);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1685";
      }, 800);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1732";
      }, 900);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1798";
      }, 1000);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "1999";
      }, 1100);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "2038";
      }, 1200);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "2229";
      }, 1300);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "2415";
      }, 1400);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "2510";
      }, 900);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "2566";
      }, 1300);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3012";
      }, 1300);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3049";
      }, 1300);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3230";
      }, 1400);
  
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3450";
      }, 1100);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3515";
      }, 1200);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3600";
      }, 1500);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3629";
      }, 1000);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3749";
      }, 1100);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3818";
      }, 1200);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3819";
      }, 1300);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3820";
      }, 1400);
      setTimeout(function () {
          document.getElementById("amount").innerHTML = "3821";
      }, 1500);
  
  
  
  
      // time
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:30";
      }, 0300);
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:25";
      }, 0400);
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:17";
      }, 0500);
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:45";
      }, 0600);
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:06";
      }, 700);
      
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:03";
      }, 800);
      
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:01";
      }, 900);
      setTimeout(function () {
          document.getElementById("time").innerHTML = "0:00:00";
      }, 1000);
  
      setTimeout(function () {
          document.getElementById("info").innerHTML = "Threat detected. <br> Last scan: " + date_time + "<br> 11 threats found. <br> Scan lasted 0 minutes, 6 seconds. <br> 3821 scanned file. "
      }, 1000);
      setTimeout(function () {
          document.getElementById("bar").style.display = "none";
      }, 1000);
      setTimeout(function () {
          document.getElementById("re").innerHTML = "quick scan";
      }, 1000);
      setTimeout(function () {
          document.getElementById("recx").style.display = "none";
      }, 1000);
      setTimeout(function () {
          document.getElementById("recx-hide").style.display = "none";
      }, 1000);
      setTimeout(function () {
          document.getElementById("shx").style.display = "block";
      }, 1000);
  
      $(".alert_popup").delay(1000).fadeIn(500);
      $(".websa").delay(1500).fadeIn(500);
   
  } 
  
 function playSound() {
    document.getElementById("beep").play();
 }
var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes();
var date_time = current_date+" "+current_time;	
document.getElementById("p1").innerHTML = date_time;
   