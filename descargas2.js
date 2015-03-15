imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif";
showRandomImg = true;
aBold = true;
summaryPost = 200;
summaryTitle = 20;
numposts1 = 99999;
numposts2 = 99999;

function removeHtmlTag(strx, chop) {
    var s = strx.split("<");
    for (var i = 0; i < s.length; i++) {
        if (s[i].indexOf(">") != -1) {
            s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length)
        }
    }
    s = s.join("");
    s = s.substring(0, chop - 1);
    return s
}
function barra(json) {
 j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        var trtd = '<a href="'+posturl+'" title="'+ posttitle +'" class="lkn1"><div class="anmems" style="width: 96%;">'+ posttitle +'<div class="tlrow"></div></div></a>';
        document.write(trtd);
        j++
    }  
 
}
function listado(json) {
 j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        var trtd = '<li><a href="'+posturl+'">'+posttitle+'<small class="right">'+daystr+'</small></a></li>';
        document.write(trtd);
        j++
    }  
 
}
function emision(json) {
 j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        var trtd = '<a href="'+posturl+'" title="'+ posttitle +'" class="lkn1"><div class="anmems">'+ posttitle +'<div class="tlrow"></div></div></a>';
        document.write(trtd);
        j++
    }  
 
}

function lateral(json) {
   j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        
		var re=/<\S[^>]*>/g;
        var post;
		var postcortado;
        postcortado=postcontent.replace(re,"");
      if(postcortado.length<500){
        post=postcortado;
      }else{
		post=postcortado.substring(0,500)+"...";
		}
        

		postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;

        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        
var trtd = '<div style="padding:10px; width:320px; margin-top:10px; background:url(http://i.imgur.com/iMuNCnt.png)"><h2 style="font-family:Bebas Neue;font-size:17px;color:#FFFFFF;padding:0px;margin:0px;font-weight:normal;text-shadow:0 0 0.2em #8BA8E2">'+ posttitle +'</h2></div><div class="cntrgtanmvw" style="min-height:250px"><img src="' + img[i] + '">  '+post+'</div>'; 
        document.write(trtd);
        j++
    }
}
function recomendado(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        
		var re=/<\S[^>]*>/g;
        var post;
		var postcortado;
        postcortado=postcontent.replace(re,"");
      if(postcortado.length<63){
        post=postcortado;
      }else{
		post=postcortado.substring(0,63);
		}
        

		postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;

        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        
var trtd = '<li><a href="' + posturl + '" title="'+ posttitle +'"><span class="img"><img border="0" height="54" src="' + img[i] + '" width="40"></span><div class="play_label_search"><span></span></div><span class="tit">'+ posttitle +'</span><span class="year"><span style="color:#D40C0C;font-weight: bold">'+daystr+'</span></span><span class="info">'+post+'</span></a></li>';   
        document.write(trtd);
        j++
    }
}
function noticia(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
      var trtd = '<li><a class="lknx1" href="' + posturl + '">' + posttitle + '</a></li>';
        document.write(trtd);
        j++
    }
}
function slider(json) {
 document.write("<ul class='overview' style='width: 0px; left: 0px;'>");
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
var trtd ='<li><a href="' + posturl + '" class="lkn1"><img src="'+img[i]+'" width="165" height="85" border="0" title="'+posttitle+'"></a></li>';
        document.write(trtd);
        j++
    } document.write("</ul>");
}
function showrecentposts1(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
      var trtd = '<div class="lstsradd"><div class="snplblkn"></div><div class="animedt">' + posttitle + '</div><a class="tooltip" title="'+ posttitle +'" href="' + posturl + '"><div class="lstanmadd-lston"></div><img class="imglstsr" src="' + img[i] + '" width="166" border="0" alt="' + posttitle + '"/></a></div>';
        document.write(trtd);
        j++
    }
}

function cap(anterior,link,siguiente) {
  if(siguiente!="#"){
document.write("<div class=\"cntanmbtn\"><a href=\""+anterior +"\"><div class=\"btnactplyr\">&lt; Capitulo anterior</div></a><div class=\"btnactplyr btnactrpt\"><a class=\"tooltip\" title=\"Listado de Capitulos\" href=\""+link +"\"><img src=\"http://i.imgur.com/C78DS2t.png\"></a></div><a href=\""+siguiente +"\"><div class=\"btnactplyr\" style=\"text-align:right\">Capitulo siguiente &gt;</div></a></div>");
  }else{
  document.write("<div class=\"cntanmbtn\"><a href=\""+anterior +"\"><div class=\"btnactplyr\">&lt; Capitulo anterior</div></a><div class=\"btnactplyr btnactrpt\"><a class=\"tooltip\" title=\"Listado de Capitulos\" href=\""+link +"\"><img src=\"http://i.imgur.com/C78DS2t.png\"></a></div></div>");
  }
}
  function descarga(server,enlace,peso,formato){
    if(server=="mega"){
      document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://1.bp.blogspot.com/-XEHN-MXkb-s/U4oshDTfNwI/AAAAAAAAA2o/DY3bHSloI10/s1600/megadernick.png' title='Descargar por Mega'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}
   
   if(server=="megaesp"){
        document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://1.bp.blogspot.com/-XEHN-MXkb-s/U4oshDTfNwI/AAAAAAAAA2o/DY3bHSloI10/s1600/megadernick.png' title='Descargar por Mega'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}  

   if(server=="zip"){
        document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://1.bp.blogspot.com/-8NriPtogFJA/U4or_ajp8WI/AAAAAAAAA2I/-cZDycSfnOQ/s1600/408Jo3u.png' title='Descargar por Zippyshare'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");} 
		
   if(server=="drive"){
        document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://1.bp.blogspot.com/-8jJK_4Gddw8/U4osbiv-RpI/AAAAAAAAA2Y/BX0aHzYNLfU/s1600/firedrive-boton.png' title='Descargar por Firedrive'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}	
	
   if(server=="shared"){
        document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='https://lh5.googleusercontent.com/-p-QkK6MmJIw/U3mnvzTBWjI/AAAAAAAAAG8/csJohYIB6vY/s16-no/4shared-icon.png' title='Descargar por 4shared'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}	
	   
   if(server=="depo"){
        document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://1.bp.blogspot.com/-JD3orqDq770/U4osYlhd2HI/AAAAAAAAA2Q/d-iFSFoWhH0/s1600/depositfiles.png' title='Descargar por depositfiles'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}		
		
   if(server=="uploaded"){
        document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://3.bp.blogspot.com/-k5iHG-r2RA4/U4osjmVNcmI/AAAAAAAAA2w/2gK9mJCiGZo/s1600/uploaded.png' title='Descargar por Uploaded'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}		

if(server!="mega" && server!="megaesp" && server!="zip" && server!="drive" && server!="shared" && server!="depo" && server!="uploaded"){
document.write("<tr><td width='103' bgcolor='#FFF' align='center'><a href='"+enlace+"' target='_blank'><img src='http://3.bp.blogspot.com/-JPzh4EQtFPg/U4osd-ZN6UI/AAAAAAAAA2g/Kur3AlFFB44/s1600/JdIBUts.png' title='Descargar por 1fichier'></a></td><td bgcolor='#FFF' align='center'>"+peso+" MB</td><td bgcolor='#FFF' align='center'>"+formato+"</td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-oX1GofarIRc/U3uHYxC35ZI/AAAAAAAAAMw/KuxpM63hYwc/w15-h10-no/japones.gif' width='15' height='10'></td><td bgcolor='#FFF' align='center'><img src='https://lh6.googleusercontent.com/-sc8N1savU5Q/U3uHxuCk5hI/AAAAAAAAANA/GNvsA5Bv1b0/w15-h10-no/espanol.gif' width='15' height='10'></td></tr>");}
}
