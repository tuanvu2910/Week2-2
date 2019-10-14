
let Textandtake = function (text) {
    this.text = text;
    this.Display = function () {
        let get1 = document.getElementById("list");
        for (i = 0; i < 20; i++) {
            this.text = "<li  class ='team'> <img style='width: 30px;height: 30px' src='"+PMLdata[i].icon+"'" + "&nbsp&nbsp "+ PMLdata[i].name + "</li>" + "</br>";
            get1.innerHTML += this.text;
        }
    }
    this.Display2 = function () {
        let get2 = document.getElementById("list2");
        for (j = 0;j<20;j++) {
            this.text = "<td>" + "<p>"+"<a class='stanfButton' href='http://localhost:63342/Quản%20lý%20đội%20bóng/ImformationLiverpool.html?"+parseInt(j+1)+"'>"+ '<img  onmouseover="MouseDo.ShowUp'+j+'()" id='+j+' src="' + PMLdata[j].icon + '" height="150px" width="150px">' + "</img></a>" +
                "</td>"+'<img style="display:none" onmouseover="MouseDo.GetBack'+j+'()" id="img'+j+'"'+'src="'+PMLdata[j].Information+'" width="300"height="200">';
            get2.innerHTML += this.text;
        }
    }





};
let Take = function () {
    this.ShowUp0 = function () {
        document.getElementById("img0").style="display:block";
    }

    this.GetBack0 = function () {
        document.getElementById("img0").style="display:none";
    }
    this.ShowUp1 = function () {
        document.getElementById("img1").style="display:block";
    }

    this.GetBack1 = function () {
        document.getElementById("img1").style="display:none";
    }
    this.ShowUp2= function () {
        document.getElementById("img2").style="display:block";
    }

    this.GetBack2 = function () {
        document.getElementById("img2").style="display:none";
    }
    this.ShowUp3 = function () {
        document.getElementById("img3").style="display:block";
    }

    this.GetBack3 = function () {
        document.getElementById("img3").style="display:none";
    }
    this.ShowUp4 = function () {
        document.getElementById("img4").style="display:block";
    }

    this.GetBack4 = function () {
        document.getElementById("img4").style="display:none";
    }
    this.ShowUp5 = function () {
        document.getElementById("img5").style="display:block";
    }

    this.GetBack5 = function () {
        document.getElementById("img5").style="display:none";
    }
    this.Showup6 = function () {
        document.getElementById("img6").style="display:block";
    }

    this.GetBack6 = function () {
        document.getElementById("img6").style="display:none";
    }
    this.ShowUp7 = function () {
        document.getElementById("img7").style="display:block";
    }

    this.GetBack7 = function () {
        document.getElementById("img7").style="display:none";
    }
    this.ShowUp8 = function () {
        document.getElementById("img8").style="display:block";
    }

    this.GetBack8 = function () {
        document.getElementById("img8").style="display:none";
    }
    this.ShowUp9 = function () {
        document.getElementById("img9").style="display:block";
    }

    this.GetBack9 = function () {
        document.getElementById("img9").style="display:none";
    }
    this.ShowUp10 = function () {
        document.getElementById("img10").style="display:block";
    }

    this.GetBack10 = function () {
        document.getElementById("img10").style="display:none";
    }
    this.ShowUp11 = function () {
        document.getElementById("img11").style="display:block";
    }

    this.GetBack11 = function () {
        document.getElementById("img11").style="display:none";
    }
    this.ShowUp12 = function () {
        document.getElementById("img12").style="display:block";
    }

    this.GetBack12 = function () {
        document.getElementById("img12").style="display:none";
    }
    this.ShowUp13 = function () {
        document.getElementById("img13").style="display:block";
    }

    this.GetBack13 = function () {
        document.getElementById("img13").style="display:none";
    }
    this.ShowUp14 = function () {
        document.getElementById("img14").style="display:block";
    }

    this.GetBack14 = function () {
        document.getElementById("img14").style="display:none";
    }
    this.Showup15 = function () {
        document.getElementById("img15").style="display:block";
    }

    this.GetBack15 = function () {
        document.getElementById("img15").style="display:none";
    }
    this.ShowUp16 = function () {
        document.getElementById("img16").style="display:block";
    }

    this.GetBack16 = function () {
        document.getElementById("img16").style="display:none";
    }
    this.ShowUp17 = function () {
        document.getElementById("img17").style="display:block";
    }

    this.GetBack17 = function () {
        document.getElementById("img17").style="display:none";
    }
    this.ShowUp18 = function () {
        document.getElementById("img18").style="display:block";
    }

    this.GetBack18 = function () {
        document.getElementById("img18").style="display:none";
    }
    this.ShowUp19 = function () {
        document.getElementById("img19").style="display:block";
    }

    this.GetBack19 = function () {
        document.getElementById("img19").style="display:none";
    }
};



let Infomation = function ()
{
    this.text ="";
    this.Showup0 = function () {

        let get = document.getElementById("infomation0");
        this.text = '<img onmouseover="MouseOver0()" onmouseout="MouseOut0()" id="img1"'+'src="'+PMLdata[0].Information+'" width="300"height="200">'
            ;
        document.getElementById('infomation0').innerHTML = this.text;
    }

    this.Showup1 = function () {

        let get = document.getElementById("infomation1");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[1].name+"</legend>"
            + '<img onmouseover="MouseOver1()" onmouseout="MouseOut1()"'+'src="'+PMLdata[1].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation1').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup2 = function () {

        let get = document.getElementById("infomation2");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[2].name+"</legend>"
            + '<img onmouseover="MouseOver2()" onmouseout="MouseOut2()"'+'src="'+PMLdata[2].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation2').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup3 = function () {


        let get = document.getElementById("infomation3");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[3].name+"</legend>"
            + '<img onmouseover="MouseOver3()" onmouseout="MouseOut3()"'+'src="'+PMLdata[3].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation3').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup4 = function () {


        let get = document.getElementById("infomation4");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[4].name+"</legend>"
            + '<img onmouseover="MouseOver4()" onmouseout="MouseOut4()"'+'src="'+PMLdata[4].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation4').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup5 = function () {


        let get = document.getElementById("infomation5");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[5].name+"</legend>"
            + '<img onmouseover="MouseOver5()" onmouseout="MouseOut5()"'+'src="'+PMLdata[5].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation5').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup6 = function () {
        let get = document.getElementById("infomation6");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[6].name+"</legend>"
            + '<img onmouseover="MouseOver6()" onmouseout="MouseOut6()"'+'src="'+PMLdata[6].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation6').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup7 = function () {
        let get = document.getElementById("infomation7");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[7].name+"</legend>"
            + '<img onmouseover="MouseOver7()" onmouseout="MouseOut7()"'+'src="'+PMLdata[7].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation7').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup8 = function () {
        let get = document.getElementById("infomation8");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[8].name+"</legend>"
            + '<img onmouseover="MouseOver8()" onmouseout="MouseOut8()"'+'src="'+PMLdata[8].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation8').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup9 = function () {
        let get = document.getElementById("infomation9");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[9].name+"</legend>"
            + '<img onmouseover="MouseOver9()" onmouseout="MouseOut9()"'+'src="'+PMLdata[9].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation9').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup10 = function () {


        let get = document.getElementById("infomation10");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[10].name+"</legend>"
            + '<img onmouseover="MouseOver10()" onmouseout="MouseOut10()"'+'src="'+PMLdata[10].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation10').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup11 = function () {
        let get = document.getElementById("infomation11");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[11].name+"</legend>"
            + '<img onmouseover="MouseOver11()" onmouseout="MouseOut11()"'+'src="'+PMLdata[11].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation11').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup12 = function () {
        let get = document.getElementById("infomation12");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[12].name+"</legend>"
            + '<img onmouseover="MouseOver12()" onmouseout="MouseOut12()"'+'src="'+PMLdata[12].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation12').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup13 = function () {
        let get = document.getElementById("infomation13");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[13].name+"</legend>"
            + '<img onmouseover="MouseOver13()" onmouseout="MouseOut13()"'+'src="'+PMLdata[13].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation13').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup14 = function () {
        let get = document.getElementById("infomation14");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[14].name+"</legend>"
            + '<img onmouseover="MouseOver14()" onmouseout="MouseOut14()"'+'src="'+PMLdata[14].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation14').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup15 = function () {
        let get = document.getElementById("infomation15");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[15].name+"</legend>"
            + '<img onmouseover="MouseOver15()" onmouseout="MouseOut15()"'+'src="'+PMLdata[15].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation15').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup16 = function () {
        let get = document.getElementById("infomation16");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[16].name+"</legend>"
            + '<img onmouseover="MouseOver16()" onmouseout="MouseOut16()"'+'src="'+PMLdata[16].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation2').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup17 = function () {
        let get = document.getElementById("infomation17");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[17].name+"</legend>"
            + '<img onmouseover="MouseOver17()" onmouseout="MouseOut17()"'+'src="'+PMLdata[17].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation17').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup18 = function () {
        let get = document.getElementById("infomation18");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[18].name+"</legend>"
            + '<img onmouseover="MouseOver18()" onmouseout="MouseOut18()"'+'src="'+PMLdata[18].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation18').innerHTML = this.text;
        console.log(this.text);
    }
    this.Showup19 = function () {
        let get = document.getElementById("infomation19");
        this.text = "<div id ='content'><fieldset><legend style='text-align: center'>"+PMLdata[19].name+"</legend>"
            + '<img onmouseover="MouseOver19()" onmouseout="MouseOut19()"'+'src="'+PMLdata[19].Information+'" width="300"height="200">' +
            "</fieldset></div>";
        document.getElementById('infomation19').innerHTML = this.text;
        console.log(this.text);
    }


};
let MouseDo = new Take()
let ShowInformation = new Infomation();
let DisPlayAll = new Textandtake("");



