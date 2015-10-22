// create character libraries for Alliance team and Empire team

var characters = [

{
	pic 	: 'img/Luke.jpg',
	name 	: "Luke Skywalker",
	job 	: "Jedi",
	special_power : function(){
		return "Jedi mind control";
	}
},
{
	pic 	: 'img/Leia.jpg',
	name 	: "Leia Organa",
	job 	: "Princess",
	special_power : function(){
		return "Diplomacy";
	}
},
{
	pic 	: 'img/Han.jpg',
	name 	: "Han Solo",
	job 	: "Smuggler",
	special_power : function(){
		return "Making the Kessel Run in less than 12 parsecs";
	}
}

]

var enemies = [

{
	pic 	: 'img/Emperor.jpg',
	name 	: "Emperor Palpatine",
	job 	: "Emperor of the Galactic Empire",
	special_power : function(){
		return "Force lightning";
	}
},
{
	pic 	: 'img/Tarkin.jpg',
	name 	: "Grand Moff Tarkin",
	job 	: "Commander and Governor",
	special_power : function(){
		return "Ruthless destruction of planets";
	}
},
{
	pic 	: 'img/Vader.jpg',
	name 	: "Darth Vader",
	job 	: "Sith Lord",
	special_power : function(){
		return "Using the Dark Side of the Force";
	}
}

]

// Print to HTML as lists
function printAlliance(character){
	var allianceHTML = document.getElementById("alliance");
	allianceHTML.innerHTML = character;
}

function printEmpire(character){
	var empireHTML = document.getElementById("empire");
	empireHTML.innerHTML = character;
}

function listCharacters(character) {
	var listHTML= '<ol>';
	for (var i = 0; i < character.length; i++){
		listHTML += '<img src=' + character[i].pic + '>';
		listHTML += '<li>' + "<strong>Name: </strong>" + character[i].name + '<br>' + "<strong>Role: </strong>" + character[i].job + '<br>' + "<strong>Special Power: </strong>" + character[i].special_power() + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

printAlliance(listCharacters(characters));
printEmpire(listCharacters(enemies));

// Adding new players onclick
function addPlayer() {

	function Char(pic, name, job, special_power){
	this.pic = pic;
	this.name = name;
	this.job = job;
	this.special_power = special_power;
	}

	var playerName = prompt("What is your player's name?");
	var playerRole = prompt("What is your player's role?");
	var playerPower = prompt("What is your player's special power?");
	var specialPower = function(){return playerPower};
	var playerPic = prompt("Please provide a url for your player's profile pic. If none available, write 'none'.");
	if(playerPic ==="none"){
		playerPic = 'http://www.artofhustle.com/wp-content/uploads/featured/default-avatar_150x150.jpg';
	}

	var answer = prompt("Which side do you want to play for, Alliance or Empire?");
	answer = answer.toLowerCase();

	if(answer==="alliance"){
		var allianceObject = new Char(playerPic, playerName, playerRole, specialPower);
		characters.unshift(allianceObject);
		printAlliance(listCharacters(characters));
	}else{
		var empireObject= new Char(playerPic,playerName, playerRole, specialPower);
		enemies.unshift(empireObject);
		printEmpire(listCharacters(enemies));	
	}

}







