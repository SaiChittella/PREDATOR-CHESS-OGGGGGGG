//GRAMARLY CERTIFIEd
// SAIHAAN API CREATION

boardArr = {
    'A': [1,2,3,4,5,6,7,8],
    'B': [1,2,3,4,5,6,7,8],
    'C': [1,2,3,4,5,6,7,8],
    'D': [1,2,3,4,5,6,7,8],
    'E': [1,2,3,4,5,6,7,8],
    'F': [1,2,3,4,5,6,7,8],
    'G': [1,2,3,4,5,6,7,8],
    'H': [1,2,3,4,5,6,7,8],
}

// DA BOARD

const letters = Object.keys(boardArr);

removeHighlights();

// pieces
pieces = {
    'white': {
        'rook': 'ChessPieces/WhitePieces/Rook.png',
        'knight': 'ChessPieces/WhitePieces/Knight.png',
        'bishop': 'ChessPieces/WhitePieces/Bishop.png',
        'king': 'ChessPieces/WhitePieces/King.png',
        'queen': 'ChessPieces/WhitePieces/Queen.png',
        'pawn': 'ChessPieces/WhitePieces/Pawn.png',
    },
    'black': {
        'rook': 'ChessPieces/BlackPieces/Rook.png',
        'knight': 'ChessPieces/BlackPieces/Knight.png',
        'bishop': 'ChessPieces/BlackPieces/Bishop.png',
        'queen': 'ChessPieces/BlackPieces/Queen.png',
        'king': 'ChessPieces/BlackPieces/King.png',
        'pawn': 'ChessPieces/BlackPieces/Pawn.png',
    }
}

// PUT THE PIECES ON DA BOARD
// whites (definitely not racisim)
//bottom row first

let img;
const letter = ['A','B','C','D','E','F','G','H']; 
const whitePieces = Object.keys(pieces['white']);
const blackPieces = Object.keys(pieces['black']);
let decrementing = false;

countForEachPiece = {
    'pawn': 1,
    'rook': 1,
    'bishop': 1,
    'knight': 1,
}
putPiecesOnBoard('white');
function putPiecesOnBoard(type) {
    let counter = 0;
    countForEachPiece['pawn'] = 1;
    countForEachPiece['rook'] = 1;
    countForEachPiece['bishop'] = 1;
    countForEachPiece['knight'] = 1;
    
    for(let i=0; i<16; i++) {
        img = document.createElement('img');
        if(type === 'white') { 
            if(whitePieces[counter] === 'king' || whitePieces[counter] === 'queen') { 
                img.id = whitePieces[counter];
            } else {
                img.id = whitePieces[counter] + countForEachPiece[whitePieces[counter]];
                countForEachPiece[whitePieces[counter]]++;
            }
            img.src = pieces[type][whitePieces[counter]];  
        } else {

            if(blackPieces[counter] === 'king' || blackPieces[counter] === 'queen') { 
                img.id = "black" + blackPieces[counter];
            } else {
                img.id = "black" + blackPieces[counter] + countForEachPiece[blackPieces[counter]];
                countForEachPiece[blackPieces[counter]]++;
            }
            img.src = pieces[type][blackPieces[counter]];  
        }
        img.style.height = "100px";
        img.style.position = 'absolute'; 
        img.style.left = "3%";
        if(type === 'black') {
            if(i >= 8) {
                document.querySelector('#' + letter[i-8] + "7").appendChild(img);
            } else {
                document.querySelector('#' + letter[i] + "8").appendChild(img);
            } 
        } else {
            if(i >= 8) {
                document.querySelector('#' + letter[i-8] + "2").appendChild(img);
            } else {
                document.querySelector('#' + letter[i] + "1").appendChild(img);
            }
        }
        if(counter === 4) {
            counter--;
            decrementing = true;
        }
        if(counter === 0 && decrementing){
            counter = 5;
            decrementing = false;
        }
        else if(counter === 5) {
            counter = 5;        
        } else if(decrementing) {
            counter--;
        } else {
            counter++;
        }
    } 
    
}

putPiecesOnBoard('black');


function putThingsOnBoard(type) {
    if(type === 'numbers') {
        let topCounter = 72;
        for(let i = 8; i >= 1; i--){
            let numberDiv = document.querySelector('#numberDiv');
            numberDiv.style.height = '107.5px';
            numberDiv.style.width = '107.5px';
            numberDiv.innerHTML += i + " <br /><br />";
            numberDiv.style.fontSize = "47px";
            numberDiv.style.color = 'white';
            numberDiv.style.position = 'absolute';
            numberDiv.style.left = '28%'
            numberDiv.style.top = topCounter + "%";
            topCounter -= 9.9;
        }
    } else{
        let leftCounter = -37;
        for(let i = 0; i < 8; i++){
            let letterDiv = document.querySelector('#letterDiv');
            letterDiv.style.height = '107.5px';
            letterDiv.style.width = '910px';
            letterDiv.innerHTML += letter[i] + '⠀⠀⠀';
            letterDiv.style.fontSize = "47px";
            letterDiv.style.color = 'white';
            letterDiv.style.position = 'absolute';
            letterDiv.style.top = '102%'
            letterDiv.style.left = leftCounter + "%";
            leftCounter += 10;
        }
    }
} 

putThingsOnBoard('numbers');
putThingsOnBoard('letters');


// DA ACTUAL JSSSSSSSSSSSSSSSSSS SAIHAAN API BEGINS HERE....

// put the forfiet and stats buttons on da board.
function putButtons() {
    let forfiet = document.querySelector("#forfietButton");
    let stats = document.querySelector("#statsButton");
    stats.style.backgroundColor = 'green';
    stats.style.height = '50px';
    stats.style.width = '100px';
    stats.style.position = 'absolute';
    stats.style.top = '10%';
    stats.style.left = '10%';

    forfiet.style.backgroundColor = 'red';
    forfiet.style.height = '50px';
    forfiet.style.width = '100px';
    forfiet.style.position = 'absolute';
    forfiet.style.top = '20%';
    forfiet.style.left = '10%';
}
putButtons();

const turns = [];
let whiteGuess = "";
let coinToss = 10;

function tossCoin() {
    let correctType = false;
    while(!correctType) {
        whiteGuess = prompt('Heads or Tails?(white)');
        if(whiteGuess.toLowerCase() === 'heads' || whiteGuess.toLowerCase() === 'tails') {
            correctType = true;
        }
    }
    
    coinToss = Math.round(Math.random() * 1);
    
    if(coinToss === 0) {
        alert('Heads!');
    } else {
        alert('Tails!');
    }
    determineWhoGoesFirst(); 
}

tossCoin();


function determineWhoGoesFirst() {
    if(whiteGuess.toLowerCase() === 'heads' && coinToss === 0) {
        displayWhoGoesFirst('White');
        putTurns('White');
    } else if(whiteGuess.toLowerCase() === 'tails' && coinToss === 1) {
        displayWhoGoesFirst('White');
        putTurns('White');
    } else {
        displayWhoGoesFirst('Black');
        putTurns('Black');
    }
}

function putTurns(firstPlayer) {
    if(firstPlayer == "White"){
        turns[0] = 'White';
        turns[1] = 'Black';
    }
    else{
        turns[0] = 'Black'; 
        turns[1] = 'White';
        // flipBoard();
    }
    checkTurns();
} 

function checkTurns() {
    alert('Order: ' + turns);
} 


function displayWhoGoesFirst(player) {
    alert(player + ' Goes First!');
}

// map of board
boardPieces = {
    '#rook1': 'rook1',
    '#knight1': 'knight1',
    '#bishop1': 'bishop1',
    '#king': 'king', 
    '#queen': 'queen',
    '#bishop2': 'bishop2',
    '#knight2': 'knight2',
    '#rook2': 'rook2',
    '#pawn1': 'pawn1',
    '#pawn2': 'pawn2',
    '#pawn3': 'pawn3',
    '#pawn4': 'pawn4',
    '#pawn5': 'pawn5',
    '#pawn6': 'pawn6',
    '#pawn7': 'pawn7',
    '#pawn8': 'pawn8',
    '#blackrook1': 'rook',
    '#blackknight1': 'knight',
    '#blackbishop1': 'bishop',
    '#blackking': 'king', 
    '#blackqueen': 'queen',
    '#blackbishop2': 'bishop',
    '#blackknight2': 'knight',
    '#blackrook2': 'rook',
    '#blackpawn1': 'blackpawn1',
    '#blackpawn2': 'blackpawn2',
    '#blackpawn3': 'blackpawn3',
    '#blackpawn4': 'blackpawn4',
    '#blackpawn5': 'blackpawn5',
    '#blackpawn6': 'blackpawn6',
    '#blackpawn7': 'blackpawn7',
    '#blackpawn8': 'blackpawn8',
}
board = {
    'rook1': {'positionColumn': 'A', 'positionRow': '1', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right']},  
    'knight1': {'positionColumn': 'B', 'positionRow': '1', 'slope': {'rise': [2], 'run': [1]}, 'distance': '3', 'direction':['L']},  
    'bishop1': {'positionColumn': 'C', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal']},
    'king': {'positionColumn': 'D', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
    'queen': {'positionColumn': 'E', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
    'rook2': {'positionColumn': 'H', 'positionRow': '1', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right']},  
    'knight2': {'positionColumn': 'G', 'positionRow': '1', 'slope': {'rise': [2], 'run': [1]}, 'distance': '3', 'direction': ['L']},  
    'bishop2': {'positionColumn': 'F', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal']},
    'pawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'pawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']}, 
    'pawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'pawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'pawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'pawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'pawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'pawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positionRow': '2', 'firstMove': true, 'distance': 1, 'direction': ['forward']},


    'blackrook1': {'positionColumn': 'A', 'positionRow': '8', 'slope': {'rise': [0], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right']},  
    'blackknight1': {'positionColumn': 'B', 'positionRow': '8', 'slope': {'rise': [2], 'run': [1]}, 'distance': '4', 'direction': ['L']},  
    'blackbishop1': {'positionColumn': 'C', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': 'diagonal'},
    'blackking': {'positionColumn': 'D', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
    'blackqueen': {'positionColumn': 'E', 'positionRow': '8', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
    'blackrook2': {'positionColumn': 'H', 'positionRow': '8', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right']},  
    'blackknight2': {'positionColumn': 'G', 'positionRow': '8', 'slope': {'rise': [2], 'run': [1]}, 'distance': '4', 'direction': 'L'},  
    'blackbishop2': {'positionColumn': 'C', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': 'diagonal'},
    'blackpawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'blackpawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']}, 
    'blackpawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'blackpawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'blackpawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'blackpawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'blackpawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    'blackpawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positionRow': '7', 'firstMove': true, 'distance': 1, 'direction': ['forward']},
    
}

// highlight each pieces as mouse goes over it.
const piecesArr = ['#rook1', '#knight1', '#bishop1', '#king', '#queen', '#bishop2', '#knight2', '#rook2', '#pawn1', '#pawn2', '#pawn3', '#pawn4', '#pawn5', '#pawn6', '#pawn7', '#pawn8', '#blackrook1', '#blackknight1', '#blackbishop1', '#blackking', '#blackqueen', '#blackbishop2', '#blackknight2', '#blackrook2','#blackpawn1', '#blackpawn2', '#blackpawn3', '#blackpawn4', '#blackpawn5', '#blackpawn6', '#blackpawn7', '#blackpawn8'];

// speedy speedy
function test() {
    for(let i=0; i<piecesArr.length; i++) {
        let stopColor = false;
        document.querySelector(piecesArr[i]).addEventListener('mouseover', () => {
            if(!stopColor) {
                document.querySelector(piecesArr[i]).style.backgroundColor = 'yellow';
                document.querySelector(piecesArr[i]).style.left = '-0.2%';
                document.querySelector(piecesArr[i]).style.height = '107.5px';
                document.querySelector(piecesArr[i]).style.width = '107.5px'; 
            }
        });
        document.querySelector(piecesArr[i]).addEventListener('mouseout', () => {
            if(!stopColor) {
                document.querySelector(piecesArr[i]).style.backgroundColor = '';
            }
        });
        // enforece movement (checking for legal moves)
        document.querySelector(piecesArr[i]).addEventListener('click', () => {
            document.querySelector(piecesArr[i]).style.backgroundColor = 'lightGreen'; 
            stopColor = true;            
            findSlopePawns(boardPieces[piecesArr[i]]); 
        }); 
    }
}
test();
 
function findSlopePawns(piece) {
    let rise;
    let run;

    if(piece.charAt(0) == 'p'){
        if(board[piece]['firstMove']) {
            rise = 2;
        } else {
            rise = 1;
        }
        run = 0;
    } else {
        rise = board[piece]['slope']['rise'];   
        run = board[piece]['slope']['run'];
    }

    highlightMoves(rise, run, piece);
}

// Highlights the possible moves
function highlightMoves(rise, run, currPiece) {
    let positionColumns = board[currPiece]['positionColumn'];
    let positionRow = board[currPiece]['positionRow'];
    const direction = board[currPiece]['direction'];
    let distance = parseInt(board[currPiece]['distance']);
    // alert((positionColumns) + '' + (parseInt(positionRow) + rise));

    if(rise === 2 && (currPiece.charAt(0) === 'p')) {
        let amount = 1;
        for(let i=0; i<2; i++) {
            document.querySelector('#' + (positionColumns) + '' + (parseInt(positionRow) + rise-amount)).style.backgroundColor = '#347890';
            amount--;
        }
    } else {
        // find the index of the current position column (letter) 
        let letterIndex = findIndex(positionColumns);
        
        for(let i=0; i<direction.length; i++) {
            if(direction[i] === 'forward') {
                findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false);
            } else if(direction[i] === 'backward'){
                findMovesDirection(direction[i], positionColumns, positionRow, distance,(letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false);
            } else if(direction[i] === 'left') {
                findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false);
            } else if(direction[i] === 'right') {
                findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false);
            } else if(direction[i] === 'diagonal') {
                findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false);
            } else if(direction[i] === 'L') {
                findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), true);
            }
        }
    }
    // diagonalHighlight(index, positionRow, positionColumn, newPosition, false, true);
    // 
    // killingMoves();
}
function findIndex(positionColumns) {
    for(let i=0; i<letter.length; i++) {
        if(positionColumns === letter[i]){
            return i; 
        }  
    }
}

function findMovesDirection(direction, positionColumn, positionRow, distance, position, knight){
    let newPosition = ''; 
    
    let index = findIndex(positionColumn);
    positionRow = parseInt(positionRow);
    let king = false;

    if(knight) {
        diagonalHighlight(index, positionRow, positionColumn, (letter[index] + '' + positionRow), false, true);
    }
    if(distance === 1){ 
        king = true;
    }

    do {
        if(direction === 'forward') { 
            positionRow+=1;
            newPosition = positionColumn + (parseInt(positionRow)); 
        } else if(direction === 'backward') {
            positionRow-=1;
            newPosition = positionColumn + (parseInt(positionRow));
        } else if(direction === 'left') {
            newPosition = (letter[index-1]) + positionRow;
            index-=1;
        } else if(direction === 'right') {
            newPosition = (letter[index+1]) + positionRow;
            index+=1;
        } else if(direction === 'diagonal'){
            newPosition = (positionColumn) + parseInt(positionRow);
            diagonalHighlight(index, positionRow, positionColumn, newPosition, king);
        } else if(knight) {
            break;
        }
        if(positionRow <= 0 || positionRow > 8 || index < 0 || index > letter.length - 1){
            break;
        } 
        
        if(document.querySelector('#' + newPosition).hasChildNodes()) {
            break;
        } else {
            document.querySelector('#' + newPosition).style.backgroundColor = '#347890';   
        }     

    }    
    while(positionRow <= 7 && positionRow > 0 && index < letter.length && index >= 0 && king != true); 
}


let positionRow;
function diagonalHighlight(index, positionRow, positionColumn, originalPosition, king, knight) {
    // right one up one(right diagonal)audio    
    let counter = 1;
    newPosition = originalPosition;
    let originalRow = positionRow;
    let originalColumn = index;

    // !document.querySelector('#' + newPosition).hasChildNodes()
    let rowChange = 1;
    let indexChange = 1;
    let second = false;
    do {
        let increment = false;
        if(knight){
            if(second) {
                rowChange = 1;
                indexChange = 2;
            } else {
                rowChange = 2;
                indexChange = 1;
            }   
        }

        if(counter === 1) {
            //big brain play
            positionRow += rowChange;
            index += indexChange;
            if(checkIfOutOfBounds(index, positionRow, positionColumn, originalPosition, originalRow, originalColumn, counter)) {
               // bro this is so weird i dont get it yeee time to debug babyyy
                increment = true;
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));   
            }
            newPosition = (letter[index]) + positionRow;
        } else if(counter === 2) {
            
            positionRow -= rowChange;
            index -= indexChange;
            
            
            if(checkIfOutOfBounds(index, positionRow, positionColumn, originalPosition, originalRow, originalColumn, counter)) {
                increment = true;
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));
            }
            newPosition = (letter[index]) + positionRow;
        } else if(counter === 3) {
            positionRow += rowChange;
            index -= indexChange;
            
            if(checkIfOutOfBounds(index, positionRow, positionColumn, originalPosition, originalRow, originalColumn, counter)) {
                increment = true; // gao to teast.dra wio ok audioooooooooooo aight I started itlmao bro Im gonna die in my room its burning help helllooo can you hearr meeeeeeeeeeeeeeeeeee
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));
            }
            newPosition = (letter[index]) + positionRow;
        } else if(counter === 4) { 
            positionRow -= rowChange;
            index += indexChange;
            if(checkIfOutOfBounds(index, positionRow, positionColumn, originalPosition, originalRow, originalColumn, counter)) {
                increment = true;
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));
            }
            newPosition = (letter[index]) + positionRow;
        }

        
        if(newPosition != originalPosition) {
            let clickPos = newPosition;
            document.querySelector('#' + newPosition).addEventListener('click', () => {
                let colors = Object.keys(pieces);
                let piecesToCheck = Object.keys(board)
                
                let daPiece = "";
                let black = false;
                let pieceSrc = "";
                
                for(let i=0; i<piecesToCheck.length; i++) {
                    if((board[piecesToCheck[i]]['positionColumn']) + (board[piecesToCheck[i]]['positionRow']) === originalPosition) {
                        daPiece = piecesToCheck[i];        
                    }
                }

                if(daPiece.startsWith('b') && daPiece.charAt(1) === 'l') {
                    black = true;
                }
                let breakLoop = false;
                for(let i=0; i<colors.length; i++) {
                    let piecesInColor = Object.keys(pieces[colors[i]])

                    for(let j=0; j<piecesInColor.length; j++){
                        if(black) {
                            continue;
                        } else {
                            if(daPiece.startsWith(piecesInColor[j].charAt(0)) && daPiece.charAt(1) === piecesInColor[j].charAt(1)) {
                                pieceSrc = pieces[colors[i]][piecesInColor[j]];
                                breakLoop = true;
                                break
                            }
                        }
                        if(breakLoop) {
                            break;
                        }
                    }
                }
                let divImg = document.createElement('img');
                divImg.src = pieceSrc;
                divImg.style.height = '117.5px';
                divImg.style.width = '117.5px';
                divImg.style.position = 'absolute';
                divImg.style.left = '-4%';
                divImg.style.top = '0%'; // problemmmmmmmm
                divImg.id = daPiece;// what is i sayst 583 that the thing isn't a node
                //ooop the move thing is not working wiat what ok so go to a3 and then c4 yeah what about it oh dayum it ain't working uh oh shoot
                // bruh that only happens for some squares, but for others it works huhhh what is this scamm
                document.querySelector('#' + originalPosition).removeChild(document.querySelector('#' + originalPosition).childNodes[0]);// this is only if we move it to C3 its working still  ohhh wait i think i know
                document.querySelector('#' + clickPos).appendChild(divImg);
                test();
                board[daPiece]['positionColumn'] = clickPos.charAt(0);
                board[daPiece]['positionRow'] = clickPos.charAt(1);
                // ok so basically lets say you go from the starting position to A 3 or c3 the next move you make if you go left 1 and then up 2 or right one and then up two from either of those positions afterwards it will not wokr
                
                
                //  yeah thats the problem wait les pull out the trust dusty alerts
                // document.querySelector('#' + originalPosition).appendChild(document.querySelector('#' + newPosition));
                removeHighlights();
            });
        }

        if((king || knight) && !checkIfOutOfBounds(index, positionRow, positionColumn, originalPosition, originalRow, originalColumn, counter) ) {
            if(!document.querySelector('#' + newPosition).hasChildNodes()) {
                document.querySelector('#' + newPosition).style.backgroundColor = '#347890';
            }
            
            if(knight) {
                newPosition = originalPosition;
                positionRow = originalRow;
                index = originalColumn; 
            }
            if(counter >= 4 && knight && !second) { 
                second = true;
                counter = 1;
                continue;
            }
            
            if(counter >= 4) {
                break;
            }
            counter++; 
        } else {
            if(increment)
                counter++;
            if(counter >= 4) 
                break;
        }

        document.querySelector('#' + newPosition).style.backgroundColor = '#347890';
    } while(true);


    // !document.querySelector('#' + newPosition).hasChildNodes()
}


function removeHighlights() {
    let left1 = 32.2;
    let top1 = 89.5;
    let black = true;
     
    
    for(let i=0; i<8; i++) {
        let j = 0;
        for(j=0 ; j<8; j++){
            square = document.querySelector("#" + letters[i] + boardArr[letters[i]][j]);  
            if(black) {
                square.style.backgroundColor = 'brown';
                black = false;
            } else {
                square.style.backgroundColor = 'white';
                black = true;   
            }
            square.style.top = top1 + "%";
            square.style.left = left1 + "%";
            top1 -= 12.65;
            if(j === 7) {
                if(black) {
                    black = false;
                } else {
                    black = true;
                }
            }
        }
        top1 = 89.5;
        left1 += 6;
    }
}
function checkIfOutOfBounds(index, positionRow, positionColumn, originalPosition, originalRow, originalColumn, counter) {    
    if((positionRow > 8) || (positionRow <= 0) ||(index > 7) || (index < 0)) {
        return true;
    } 

    return false;
}

// yooooooooooooooooo n jnjnjnjnjnjnjnjnjnjnjnknknknknnknjnjnjnjnjnjnjnjnjnjnjnjnjnjnjnjnj audio? yessirrrrrrrrrreee aight it startedd re start it kk
// de condition: !document.querySelector('#' + newPosition).hasChildNodes() 
// board = {
//     'rook1': {'positionColumn': 'A', 'positionRow': '8', 'slope': {'rise': ['infinty', 0], 'run': [0, 'infinity']}, 'distance': 'infinity', 'direction': ['forward','backward','left','right']},  
//     'knight1': {'positionColumn': 'B', 'positionRow': '8', 'slope': {'rise': [2,1], 'run': [1,2]}, 'distance': '4', 'direction':'L'},  
//     'bishop1': {'positionColumn': 'C', 'positionRow': '8', 'slope': {'rise': [1,-1], 'run': [1,-1]}, 'distance': 'infinity', 'direction': 'diagonal'},
//     'king': {'positionColumn': 'D', 'positionRow': '8', 'slope': {'rise': [1,-1,1,0], 'run': [1,-1,0,1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
//     'queen': {'positionColumn': 'E', 'positionRow': '8', 'slope': {'rise': ['infinity', '-infinity'], 'run': ['infinity','-infinity']}, 'distance': 'infinity', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
//     'rook2': {'positionColumn': 'H', 'positionRow': '8', 'slope': {'rise': ['infinty', 0], 'run': ['infinity', 0]}, 'distance': 'infinity', 'direction': ['forward','backward','left','right']},  
//     'knight2': {'positionColumn': 'G', 'positionRow': '8', 'slope': {'rise': [2,1], 'run': [1,2]}, 'distance': '4', 'direction': 'L'},  
//     'bishop2': {'positionColumn': 'C', 'positionRow': '8', 'slope': {'rise': [1,-1], 'run': [1,-1]}, 'distance': 'infinity', 'direction': 'diagonal'},
//     'pawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
//     'pawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'}, 
//     'pawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
//     'pawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
// //     'pawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
// //     'pawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
// //     'pawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
// //     'pawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positonRows': '7', 'firstMove': true, 'distance': 1, 'direction': 'forward'},
// //     'blackrook1': {'positionColumn': 'A', 'positionRow': '1', 'slope': {'rise': ['infinty', 0], 'run': [0, 'infinity']}, 'distance': 'infinity', 'direction': ['forward','backward','left','right']},  
// //     'blackknight1': {'positionColumn': 'B', 'positionRow': '1', 'slope': {'rise': [2,1], 'run': [1,2]}, 'distance': '4', 'direction':'L'},  
// //     'blackbishop1': {'positionColumn': 'C', 'positionRow': '1', 'slope': {'rise': [1,-1], 'run': [1,-1]}, 'distance': 'infinity', 'direction': 'diagonal'},
// //     'blackking': {'positionColumn': 'D', 'positionRow': '1', 'slope': {'rise': [1,-1,1,0], 'run': [1,-1,0,1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
// //     'blackqueen': {'positionColumn': 'E', 'positionRow': '1', 'slope': {'rise': ['infinity', '-infinity'], 'run': ['infinity','-infinity']}, 'distance': 'infinity', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal']},
// //     'blackrook2': {'positionColumn': 'H', 'positionRow': '1', 'slope': {'rise': ['infinty', 0], 'run': ['infinity', 0]}, 'distance': 'infinity', 'direction': ['forward','backward','left','right']},  
// //     'blackknight2': {'positionColumn': 'G', 'positionRow': '1', 'slope': {'rise': [2,1], 'run': [1,2]}, 'distance': '4', 'direction': 'L'},  
// //     'blackbishop2': {'positionColumn': 'C', 'positionRow': '1', 'slope': {'rise': [1,-1], 'run': [1,-1]}, 'distance': 'infinity', 'direction': 'diagonal'},
    
// // }
// // boardArr = {
// //     'A': [1,2,3,4,5,6,7,8],
// //     'B': [1,2,3,4,5,6,7,8],
// //     'C': [1,2,3,4,5,6,7,8],
// //     'D': [1,2,3,4,5,6,7,8],
//     'E': [1,2,3,4,5,6,7,8],
//     'F': [1,2,3,4,5,6,7,8],
//     'G': [1,2,3,4,5,6,7,8],
//     'H': [1,2,3,4,5,6,7,8],
// }
// */ { id ont like you  do i restrat or wait                   
// // audio audio auidio audio audio audioio i9sodio aidoia aiuda aighttt no
