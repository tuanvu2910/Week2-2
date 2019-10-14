let Choice = function (text) {
    this.text = text;
    this.Display = function () {
        let get1 = document.getElementById("list");
        for (i = 0; i < 20; i++) {
            this.text = "<li class ='team'>" + PMLdata[i].name +"</br>";
            get1.innerHTML += this.text;
            console.log(this.text);
        }
    }

};
      let newteam;
function take() {
    let teamId = window.location.href.split('?').pop();
    console.log(teamId);
    let team = PMLdata.find(function (item) {
        return item.id == teamId;
    });
    for (i=0;i<PMLdata.length;i++){
        if (teamId==PMLdata[i].id){
            newteam = PMLdata[i]
            console.log(newteam)
        }
    }
}
let Show = function (i) {
    this.text = "";
    this.text1 = "";
    this.Showup0 = function () {
       let get1= document.getElementById("team");
        let get = document.getElementById("list2");
        this.text1 = '<img id="Team" src="'+newteam.svd+'">';
        this.text = "<div class='content1'><fieldset><legend style='text-align: center'>" + newteam.name+ "</legend>"
            + '<img src="'+""+newteam.icon + '" width="200"height="200">' +
            "<p><h1>Xếp hạng:" + newteam.id + "</h1></p></br>" +
            "<p><h3>Địa chỉ:" + newteam.adress + "</h3></p></br>" +
            "<p><h3>Số lượng cầu thủ:" + newteam.NumberOfPlayers + "</h3></p></br>" +
            "<p><h3>Giá trị đội hình:" + newteam.TeamValue + " triệu đô</h3> </p></br>" +
            "<p><h3>Sức mạnh:" + newteam.TeamPower + "</h3> </p>" +
            "</fieldset></div>";
        get.innerHTML = this.text;
       get1.innerHTML = this.text1;
    }



}
take()
let ShowOn = new Choice("");
let Showup = new Show();

