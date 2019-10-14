let index;
let index1;
let Choice = function (text,text1) {
    this.text = text;
    this.text1 = text1;
    this.DisPlay = function () {
        let get1 = document.getElementById(this.text);
        for (let i = 0; i < 20; i++) {
            this.text = "<option value ='" + PMLdata[i].id + "'>" + PMLdata[i].name + "</option></br>";
            get1.innerHTML += this.text;
            console.log(PMLdata[i].name);
        }
    }
    this.DisPlay1 = function () {
        let get1 = document.getElementById(this.text1);
        for (let i = 0; i < 20; i++) {
            this.text1 = "<option value ='" + PMLdata[i].id + "'>" + PMLdata[i].name + "</option></br>";
            get1.innerHTML += this.text1;
            console.log(PMLdata[i].name);
        }
    }
    this.displayTeam1 = function () {
        let take1 = document.getElementById("list1");
        let take2 = document.getElementById("list2");
        let takeValue1 = take1.options[take1.selectedIndex].value;
        let takeValue2 = take2.options[take2.selectedIndex].value;
        if(takeValue1 == takeValue2 ){
            alert("Chon lai")
        }else {
            console.log(takeValue1);
            dbs(takeValue1);
        }
    }
    this.displayTeam2= function() {
        let take1 = document.getElementById("list1");
        let take2 = document.getElementById("list2");
        let takeValue1 = take1.options[take1.selectedIndex].value;
        let takeValue2 = take2.options[take2.selectedIndex].value;
        if(takeValue1 == takeValue2 ){
            alert("Chon lai")
        }else {
            console.log(takeValue2);
            dbs1(takeValue2);
        }

    }

};
 function gotoresult() {
     window.location.assign("http://localhost:63342/Quản%20lý%20đội%20bóng/Result.html?"+PMLdata[index].id+'-'+PMLdata[index1].id);
     take1(PMLdata[index].id,PMLdata[index1].id);
 }



function dbs(takeValue) {

     index = 0;
    for (let i = 0; i < PMLdata.length; i++) {
        if (takeValue == PMLdata[i].id) {
            index = PMLdata[i].id-1;
        }

    }
    Showup0(index);

}
function dbs1(takeValue) {
     index1 = 0;
    for (let i = 0; i < PMLdata.length; i++) {
        if (takeValue == PMLdata[i].id) {
            index1 = PMLdata[i].id-1;
        }

    }
    Showup1(index1);
}

function Showup0(index) {
    let get = document.getElementById("Print");
    let text = "<div class ='content'><fieldset><legend style='text-align: center' id='1'  value= '"+PMLdata[index].name+"'>"+PMLdata[index].name+"</legend>"
        + '<img src="' + PMLdata[index].icon + '" width="200"height="200">' +
        "<p><h1>Xếp hạng:" + PMLdata[index].id + "</h1></p></br>" +
        "<p><h3>Địa chỉ:" + PMLdata[index].adress + "</h3></p></br>" +
        "<p><h3>Số lượng cầu thủ:" + PMLdata[index].NumberOfPlayers + "</h3></p></br>" +
        "<p><h3>Giá trị đội hình:" + PMLdata[index].TeamValue + " triệu đô</h3> </p></br>" +
        "<p><h3>Sức mạnh:" + PMLdata[index].TeamPower + "</h3> </p>" +
        "</fieldset></div>";
    get.innerHTML = text;
}
function Showup1(index1) {
    let get = document.getElementById("Print1");
    let text = "<div class ='content'><fieldset><legend style='text-align: center'id='2'value = '"+PMLdata[index1].name+"' >"+PMLdata[index1].name+"</legend>"
        + '<img src="' + PMLdata[index1].icon + '" width="200"height="200">' +
        "<p><h1>Xếp hạng:" + PMLdata[index1].id + "</h1></p></br>" +
        "<p><h3>Địa chỉ:" + PMLdata[index1].adress + "</h3></p></br>" +
        "<p><h3>Số lượng cầu thủ:" + PMLdata[index1].NumberOfPlayers + "</h3></p></br>" +
        "<p><h3>Giá trị đội hình:" + PMLdata[index1].TeamValue + " triệu đô</h3> </p></br>" +
        "<p><h3>Sức mạnh:" + PMLdata[index1].TeamPower + "</h3> </p>" +
        "</fieldset></div>";
    get.innerHTML = text;
}


let Display = new Choice("list1","list2");
Display.DisPlay();
Display.DisPlay1();