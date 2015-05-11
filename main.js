//Preload the image
//love.graphics.preload("tile0.png");
love.graphics.preload("pion0.png");
love.graphics.preload("pion1.png");
love.graphics.preload("pion2.png");
love.graphics.preload("pion3.png");

for (var i = 0; i < 7; i++) {
	love.graphics.preload("tile" + i.toString() + "S.png");
}


//Called when the preloading is done
love.load = function () {
	
	
	printer = ""
	tile = new Array();
	player = {};
	player.lock = true;
	for (var i = 0; i < 7; i++) {
		 tile[i+1] = love.graphics.newImage("tile" + i.toString() + "S.png");
	}
	pion = {};
	pion.img = {}
	pion.img[0] = love.graphics.newImage("pion0.png");
	pion.img[1] = love.graphics.newImage("pion1.png");
	pion.img[2] = love.graphics.newImage("pion2.png");
	pion.img[3] = love.graphics.newImage("pion3.png");
	pion.move = false;
	pion.posi = 0;
	pion.posj = 0;
	pion.fall = false;
	pion.fallId = {};
	pion.fallId.idsize = 0;

	

	pion.map =[
		[0,0,0,11,0,0],
		[0,0,0,0,0,0],
		[0,0,2,0,3,0],
		[0,0,0,0,0,0],
		[0,12,0,0,0,13],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[4,0,0,0,0,5],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[14,0,0,0,0,15],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,6,0,0,0,7],
		[0,0,0,0,0,0],
		[0,0,16,0,17,0],
		[0,0,0,0,0,0],
		[0,0,0,1,0,0],
	];

	tile.sizex = 284;
	tile.sizey = 47;
	tile.boxx = 170;
	tile.boxy = 40;
	tile.i = {};
	tile.j = {};
	tile.maxh = tile.sizey/1.5
	tile.h = -tile.sizey/2
	tile.inc = 7;
	tile.offsetX = -22;
	tile.offsetY = -5;

	button = {};
	button.vx = [25,70,95,70,25, 0,25];
	button.vy = [ 0, 0,25,50,50,25, 0];
	button.sx = [25,70,95,70,25, 0,25];
	button.sy = [ 0, 0,25,50,50,25, 0];
	
	/*
	//test
	map =[
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
		[1,1,1,1,1,1],
	];
	
	*/
	//standard
	map =[
		[0,0,0,1,0,0],
		[0,0,1,1,0,0],
		[0,0,1,2,1,0],
		[0,1,2,2,1,0],
		[0,1,2,3,2,1],
		[1,2,3,3,2,1],
		[0,2,3,4,3,2],
		[1,3,4,4,3,1],
		[0,2,4,5,4,2],
		[1,3,5,5,3,1],
		[0,2,4,6,4,2],
		[1,3,5,5,3,1],
		[0,2,4,5,4,2],
		[1,3,4,4,3,1],
		[0,2,3,4,3,2],
		[1,2,3,3,2,1],
		[0,1,2,3,2,1],
		[0,1,2,2,1,0],
		[0,0,1,2,1,0],
		[0,0,1,1,0,0],
		[0,0,0,1,0,0],
	];
	
	/*
	//insane
	map =[
		[0,0,1,1,0,0],
		[0,0,1,2,0,0],
		[0,1,1,2,0,0],
		[0,1,2,2,0,0],
		[0,1,2,3,0,0],
		[1,2,3,3,0,0],
		[0,2,3,4,3,4],
		[1,3,3,4,4,4],
		[0,2,4,4,4,5],
		[1,3,4,4,5,5],
		[0,2,4,4,4,6],
		[1,3,4,4,5,5],
		[0,2,4,4,4,5],
		[1,3,3,4,4,4],
		[0,2,3,4,3,4],
		[1,2,3,3,0,0],
		[0,1,2,3,0,0],
		[0,1,2,2,0,0],
		[0,1,1,2,0,0],
		[0,0,1,2,0,0],
		[0,0,1,1,0,0],
	];
	*/
}

//The main updater
love.update = function (dt) {
	if (tile.h < tile.maxh){
		tile.h = tile.h + 0.2
	};

	for (var i = 0; i < 21; i++) {
		for (var j = 0; j < 6; j++) {
			if (map[i][j] == 0) {
			};
		}
	}
	
}

//The draw loop
love.draw = function () {
	//love.graphics.setDefaultFilter("nearest");
	for (var i = 0; i < 21; i++) {
		for (var j = 0; j < 6; j++) {
			if (map[i][j] >0) {
				love.graphics.draw(tile[map[i][j]],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40+tile.offsetY,0,0.5,0.5);
				
				for (var t = 1; t < tile.inc; t++) {
					if (tile.j[t] == j && tile.i[t] == i) {
					love.graphics.draw(tile[7],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40+tile.offsetY,0,0.5,0.5);
					
					//love.graphics.line(button.vx[0] ,button.vy[0],button.vx[1] ,button.vy[1],button.vx[2] ,button.vy[2],button.vx[3] ,button.vy[3],button.vx[4] ,button.vy[4],button.vx[5] ,button.vy[5])
					};
				};
				if (pion.map[i][j] == 1) {
					love.graphics.draw(pion.img[2],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+25+tile.offsetY,0,0.5,0.5);
				}
				if (pion.map[i][j] == 11) {
					love.graphics.draw(pion.img[3],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+25+tile.offsetY,0,0.5,0.5);
				}
				if (pion.map[i][j] >1 && pion.map[i][j] < 10) {
					love.graphics.draw(pion.img[0],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+tile.offsetY+25,0,0.5,0.5);
				}
				else if(pion.map[i][j] >0 && pion.map[i][j] > 11){
					love.graphics.draw(pion.img[1],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+tile.offsetY+25,0,0.5,0.5);
				}
				else if(pion.tempy == i && pion.tempx == j){
					love.graphics.draw(tile[7],((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+25+tile.offsetY,0,0.5,0.5);
				}
			};
		};
	};
	//love.graphics.circle("fill",love.mouse.getX(),love.mouse.getY(), 10,3);
	//love.graphics.circle("line",MX,MY, 10,10);
	
}

love.config = function (t) {
	//Set the width/height of the canvas
	t.width = 900;
	t.height = 600;
	t.identity = "throne guard";
}

//If a key is pressed
love.keypressed = function (key) {
	//If the key pressed is spacebar
	if (key==" ") {
		
	}

}
function pionMoveTo(index,i,j,y,x){
	if (i+y < 21 && j+x < 6 && i+y >= 0 && j+x >= 0){
		if (map[i+y][j+x] >= map[i][j] && pion.map[i+y][j+x] == 0) {
			tile.j[index] = j+x;
			tile.i[index] = i+y;
		};
	};
}
function pionDeclair(){
	pion.fallId.idsize = 0;
	for (var i = 0; i < 21; i++) {
		for (var j = 0; j < 6; j++) {
				if (pion.map[i][j] >0) {
							//fix to the no more move glitch
				if (map[i][j] == 6) {
								//pion.move = false;
				};
				if (pionAttack(1,i,j, -2, 0)){ 
								//printer = "got a hit1";
				if (pionConfirm(1,i,j, -4, 0)) {
					pion.fall = true;
					pion.fallId[pion.fallId.idsize] = pion.map[i-2][j];
					pion.map[i-2][j] = 0;
									pion.fallId.idsize++;
								};
							};
							if (pionAttack(2,i,j, +1, 0)){
							 	//printer = "got a hit2";
							 	if (pionConfirm(1,i,j, +2, -1)) {
							 		pion.fall = true;
									pion.fallId[pion.fallId.idsize] = pion.map[i+1][j];
									pion.map[i+1][j] = 0;
									pion.fallId.idsize++;
							 	};
							 };
							if (pionAttack(3,i,j, -1, 0)){
							 	//printer = "got a hit3";
							 	if (pionConfirm(1,i,j, -2, -1)) {
							 		pion.fall = true;
									pion.fallId[pion.fallId.idsize] = pion.map[i-1][j];
									pion.map[i-1][j] = 0;
									pion.fallId.idsize++;
							 	};
							 };
							if (pionAttack(6,i,j, +2, 0)){
							 	//printer = "got a hit4";
							 	if (pionConfirm(1,i,j, +4, 0)) {
							 		pion.fall = true;
									pion.fallId[pion.fallId.idsize] = pion.map[i+2][j];
									pion.map[i+2][j] = 0;
									pion.fallId.idsize++;
							 	};
							 };
							if (i%2 == 1) {
								if (pionAttack(5,i,j, +1, +1)){
								//printer = "got a hit5";
								if (pionConfirm(1,i,j, +2, +1)) {
									pion.fall = true;
									pion.fallId[pion.fallId.idsize] = pion.map[i+1][j+1];
									pion.map[i+1][j+1] = 0;
									pion.fallId.idsize++;
								};
							};
								if (pionAttack(4,i,j, -1, +1)){ 
									//printer = "got a hit6";
									if (pionConfirm(1,i,j, -2, +1)) {
										pion.fall = true;
										pion.fallId[pion.fallId.idsize] = pion.map[i-1][j+1];
										pion.map[i-1][j+1] = 0;
										pion.fallId.idsize++;
									};
								};
							}
							else{
								if (pionAttack(5,i,j, +1, -1)){
								 //printer = "got a hit7";
								 if (pionConfirm(1,i,j, +2, -1)) {
								 	pion.fall = true;
									pion.fallId[pion.fallId.idsize] = pion.map[i+1][j-1];
									pion.map[i+1][j-1] = 0;
									pion.fallId.idsize++;
								 };
								};
								if (pionAttack(4,i,j, -1, -1)){
									 //printer = "got a hit8";
									 if (pionConfirm(1,i,j, -2, -1)) {
									 	pion.fall = true;
										pion.fallId[pion.fallId.idsize] = pion.map[i-1][j-1];
										pion.map[i-1][j-1] = 0;
										pion.fallId.idsize++;
									 };
								};
							};
						//};
					};
				};
			};
	if (pion.fall == true) {
		buttonCheck();
	};
}
function buttonCheck(){
	tile.inc = 1;
		pion.move = true;
		for (var i = 0; i < 21; i++) {
			for (var j = 0; j < 6; j++) {
				if (map[i][j] == 1 && pion.map[i][j] == 0) {
					tile.j[tile.inc] = j;
					tile.i[tile.inc] = i;
					tile.inc++;
				};
			}
		}
}
function buttonClear(){
	tile.inc = 1;
	for (var i = 0; i < 21; i++) {
		for (var j = 0; j < 6; j++) {
			if (map[i][j] == 1) {
				tile.j[tile.inc] = 0;
				tile.i[tile.inc] = 0;
				tile.inc++;
			};
		}
	}
}
function pionAttack(index,i,j,y,x){
	if (i+y < 21 && j+x < 6 && i+y >= 0 && j+x >= 0){
		if (pion.map[i+y][j+x] > 0) {
			if (pion.map[i][j] < 10) {
				if (pion.map[i+y][j+x] > 10) {
					return true;			
				};
			}
			else if(pion.map[i][j] > 10){
				if (pion.map[i+y][j+x] < 10) {
					return true;
				};
			}
		};
	};
	return false;
}
function pionConfirm(index,i,j,y,x){
	if (i+y < 21 && j+x < 6 && i+y >= 0 && j+x >= 0){
		if (pion.map[i+y][j+x] > 0) {
			if (pion.map[i][j] < 10) {
				if (pion.map[i+y][j+x] < 10) {
					return true;			
				};
			}
			else if(pion.map[i][j] > 10){
				if (pion.map[i+y][j+x] > 10) {
					return true;
				};
			}
		};
	};
	return false;
}
//If a mousebutton is pressed
function buttontest(mx,my,bx,by){
	for (var i = 0; i < 7; i++) {
		button.vy[i] = button.sy[i] + by;
		button.vx[i] = button.sx[i] + bx;
	};
	var c = false;
	for (var i = 0, j = 6; i < 7; j= i++) {
		if ( ((button.vy[i]>my) != (button.vy[j]>my)) && (mx < (button.vx[j]-button.vx[i])*(my-button.vy[i]) / (button.vy[j]-button.vy[i]) + button.vx[i]) ) {
			c = !c;
		};
	};
	return c;
}
//Initialize love
love.mousepressed = function (x,y,button) {
	//If the left mousebutton is pressed
	
	if (button=="l") {
		if (pion.move == false) {

			for (var i = 0; i < 21; i++) {
				for (var j = 0; j < 6; j++) {
					//if (map[i][j] >0) {
					//love.graphics.draw(tile[map[i][j]],((j*tile.sizex+(i%2*tile.sizex/2))/2)-50,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40,0,0.5,0.5);
					if (player.lock && pion.map[i][j] < 10) {
					if (pion.map[i][j] >0) {
						//if(x > (( j*tile.sizex+(i%2*tile.sizex/2))/2)-40 && y >((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40 && x < ((j*tile.sizex+(i%2*tile.sizex/2))/2)-40+73 && y < ((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40+42){
						if (buttontest(x,y,((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40+tile.offsetY)) {

							pion.move = true;
							pion.posi = i;
							pion.posj = j;
							//fix to the no more move glitch
							if (map[i][j] == 6) {
								pion.move = false;
							};
							//pionMoveTo(4,i,j, +2, -1);

							pionMoveTo(1,i,j, -2, 0);
							pionMoveTo(2,i,j, +1, 0);
							pionMoveTo(3,i,j, -1, 0);
							pionMoveTo(6,i,j, +2, 0);
							if (i%2 == 1) {
								pionMoveTo(4,i,j, +1, +1);
								pionMoveTo(5,i,j, -1, +1);
							}
							else{
								pionMoveTo(4,i,j, +1, -1);
								pionMoveTo(5,i,j, -1, -1);
							};
						};
					};
				};
				};
			};
		}
		else{
			for (var t = 1; t < tile.inc; t++) {
				j = tile.j[t];
				i = tile.i[t];
				if (j >= 0 && i >= 0) {
					//if(x > (( j*tile.sizex+(i%2*tile.sizex/2))/2)-40 && y >((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40 && x < ((j*tile.sizex+(i%2*tile.sizex/2))/2)-40+73 && y < ((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40+60){
					if (buttontest(x,y,((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+40+tile.offsetY)) {
	
						if (pion.fall) {
							//fall
						//pion.fallId.idsize
							if (pion.fallId.idsize > 0) {
								console.log(pion.fallId);
								pion.fallId.idsize--;
								pion.map[i][j] = pion.fallId[pion.fallId.idsize];
								if (pion.fallId.idsize > 0) {
									buttonClear();
									buttonCheck();
								}
								else{
									pion.move = false;
									pion.fall = false;
									buttonClear();
								}
							}
						}
						else{
							// move
							pion.map[i][j]	= pion.map[pion.posi][pion.posj];
							pion.map[pion.posi][pion.posj] = 0;
							pion.move = false;
							buttonClear();

							pionDeclair();
							//((j*tile.sizex+(i%2*tile.sizex/2))/2)+tile.offsetX,((i*tile.sizey-((map[i][j]-1)*(tile.h)))/2)+25+tile.offsetY
						}
					};
				};
			};
		};
	}

}



love.run();