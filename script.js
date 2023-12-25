//WICHTIG:
//IHR SOLLTET HIER NICHT SEIN!
//TUT EUCH SELBST DEN GEFALLEN UND KEHRT UM!
//DANKE!



//pop-ups:
//1: Such nochmal, aber genauer. / Klick Klack...
//2: Verarschen kann ich mich selber. / Selber.
//3: Nicht sehr sicher... / Hacking in progress...
//4: *sad trombone* / Do Re Mi Fa Sol
//5: Kalt, kälter... / Viel Spaß mit dem Geruch.
//6: Mmm, Frühstück für die Sphinx. / Die Zeit rennt, Leute.
//7: Mama Mia! / Gucci!



//1

function checkAnswer1() {
    var userInput1 = document.getElementById('input1').value;
    var correctAnswer1 = 'Mindset';
    var solutionDisplay1 = document.getElementById('assurance1');
    var solutionText1 = document.getElementById('solution1');

    if (userInput1.toLowerCase() === correctAnswer1.toLowerCase()) {
        document.getElementById('congrats-message1').style.display = 'block';
        document.getElementById('next-riddle-btn1').style.display = 'block';
        document.getElementById('input1').style.display = 'none';
        document.getElementById('checkButton1').style.display = 'none';
        solutionDisplay1.style.display = 'block';
        solutionText1.textContent = correctAnswer1;
        document.getElementById('next-riddle-btn1').focus();
    } else {
        alert('Sucht nochmal, aber genauer.');
    }
}

function loadNextRiddle1() {
    window.location.href = "2dos.html";
}

//2

function checkAnswer2() {
    var userInput2 = document.getElementById('input2').value;
    var correctAnswer2 = 'Quarkbällchen';
    var solutionDisplay2 = document.getElementById('assurance2');
    var solutionText2 = document.getElementById('solution2');

    if (userInput2.toLowerCase() === correctAnswer2.toLowerCase()) {
        document.getElementById('congrats-message2').style.display = 'block';
        document.getElementById('next-riddle-btn2').style.display = 'block';
        document.getElementById('input2').style.display = 'none';
        document.getElementById('checkButton2').style.display = 'none';
        solutionDisplay2.style.display = 'block';
        solutionText2.textContent = correctAnswer2;
        document.getElementById('next-riddle-btn2').focus();
    } else {
        alert('Verarschen kann ich mich selber!');
    }
}

function loadNextRiddle2() {
    window.location.href = "3trois.html";
}

//3

function checkAnswer3() {
    var userInput3 = document.getElementById('input3').value;
    var correctAnswer3 = 'x4?Jp3#G!a91';
    var solutionDisplay3 = document.getElementById('assurance3');
    var solutionText3 = document.getElementById('solution3');

    if (userInput3.toLowerCase() === correctAnswer3.toLowerCase()) {
        document.getElementById('congrats-message3').style.display = 'block';
        document.getElementById('next-riddle-btn3').style.display = 'block';
        document.getElementById('input3').style.display = 'none';
        document.getElementById('checkButton3').style.display = 'none';
        solutionDisplay3.style.display = 'block';
        solutionText3.textContent = correctAnswer3;
        document.getElementById('next-riddle-btn3').focus();
    } else {
        alert('Nicht sicher genug!');
    }
}

function loadNextRiddle3() {
    window.location.href = "4quattro.html";
}

//4

function checkAnswer4() {
    var userInput4 = document.getElementById('input4').value;
    var correctAnswer4 = 'dead';
    var solutionDisplay4 = document.getElementById('assurance4');
    var solutionText4 = document.getElementById('solution4');

    if (userInput4.toLowerCase() === correctAnswer4.toLowerCase()) {
        document.getElementById('congrats-message4').style.display = 'block';
        document.getElementById('next-riddle-btn4').style.display = 'block';
        document.getElementById('input4').style.display = 'none';
        document.getElementById('checkButton4').style.display = 'none';
        solutionDisplay4.style.display = 'block';
        solutionText4.textContent = correctAnswer4;
        document.getElementById('next-riddle-btn4').focus();
    } else {
        alert('*sad trombone*');
    }
}

function loadNextRiddle4() {
    window.location.href = "5five.html";
}

//5

function checkAnswer5() {
    var userInput5 = document.getElementById('input5').value;
    var correctAnswer5 = 'cringe';
    var solutionDisplay5 = document.getElementById('assurance5');
    var solutionText5 = document.getElementById('solution5');

    if (userInput5.toLowerCase() === correctAnswer5.toLowerCase()) {
        document.getElementById('congrats-message5').style.display = 'block';
        document.getElementById('next-riddle-btn5').style.display = 'block';
        document.getElementById('input5').style.display = 'none';
        document.getElementById('checkButton5').style.display = 'none';
        solutionDisplay5.style.display = 'block';
        solutionText5.textContent = correctAnswer5;
        document.getElementById('next-riddle-btn5').focus();
    } else {
        alert('Kalt, kälter...');
    }
}

function loadNextRiddle5() {
    window.location.href = "6kuus.html";
}

//6

function checkAnswer6() {
    var userInput6 = document.getElementById('input6').value;
    var correctAnswer6 = 'Uhr';
    var solutionDisplay6 = document.getElementById('assurance6');
    var solutionText6 = document.getElementById('solution6');

    if (userInput6.toLowerCase() === correctAnswer6.toLowerCase()) {
        document.getElementById('congrats-message6').style.display = 'block';
        document.getElementById('next-riddle-btn6').style.display = 'block';
        document.getElementById('input6').style.display = 'none';
        document.getElementById('checkButton6').style.display = 'none';
        solutionDisplay6.style.display = 'block';
        solutionText6.textContent = correctAnswer6;
        document.getElementById('next-riddle-btn6').focus();
    } else {
        alert('Mmm, Frühstück für die Sphinx!');
    }
}

function loadNextRiddle6() {
    window.location.href = "7sju.html";
}

//7

function checkAnswer7() {
    var userInput7 = document.getElementById('input7').value;
    var correctAnswer7 = 'Bolo';
    var solutionDisplay7 = document.getElementById('assurance7');
    var solutionText7 = document.getElementById('solution7');

    if (userInput7.toLowerCase() === correctAnswer7.toLowerCase()) {
        document.getElementById('congrats-message7').style.display = 'block';
        document.getElementById('next-riddle-btn7').style.display = 'block';
        document.getElementById('input7').style.display = 'none';
        document.getElementById('checkButton7').style.display = 'none';
        solutionDisplay7.style.display = 'block';
        solutionText7.textContent = correctAnswer7;
        document.getElementById('next-riddle-btn7').focus();
    } else {
        alert('Mama Mia!');
    }
}

function loadNextRiddle7() {
    window.location.href = "0final.html";
}



//Mindset
//Quarkbällchen
//x4?Jp3#G!a91
//dead
//cringe
//Uhr
//Bolo