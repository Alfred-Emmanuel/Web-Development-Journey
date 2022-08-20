function gpa() {

    //  for the first text-box(input) of math

    const first = document.getElementById("first").value;

    if(first >= 70 && first <= 100){
        var first0 = document.getElementById("first").value = 5
        document.getElementById("score-1").innerHTML = first0
        var first01 = parseInt(first0) * 3;
        document.getElementById('maths').innerHTML = "Maths: " +first01
    }
    else if(first >= 60 && first <= 69){
        var first02 = document.getElementById('first').value = 4
        document.getElementById("score-1").innerHTML = first02
        var first03 = parseInt(first02) * 3
        document.getElementById('maths').innerHTML = "Maths: " +first03
    }
    else if(first >= 50 && first <= 59){
        var first04 = document.getElementById('first').value = 3
        document.getElementById("score-1").innerHTML = first04
        var first05 = parseInt(first04) * 3
        document.getElementById('maths').innerHTML = "Maths: " +first05
    }
    else if(first >= 45 && first <= 49){
        var first06 = document.getElementById('first').value = 2
        document.getElementById("score-1").innerHTML = first06
        var first07 = parseInt(first06) * 3
        document.getElementById('maths').innerHTML = "Maths: " +first07
    }
    else if(first >= 40 && first <= 44){
        var first08 = document.getElementById('first').value = 1
        document.getElementById("score-1").innerHTML = first08
        var first09 = parseInt(first08) * 3
        document.getElementById('maths').innerHTML = "Maths: " +first09
    }
    else if (first >= 1 && first <= 39){
        var  first1 = document.getElementById('first').value = 0
        document.getElementById('maths').innerHTML = "Maths: " +first1
    }

    // for the second text-box(input) for English

    const second = document.getElementById("second").value;

    if(second >= 70 && second <= 100){
        var second0 = document.getElementById("second").value = 5
        document.getElementById("score-2").innerHTML = second0
        var second01 = parseInt(second0) * 3;
        document.getElementById('eng').innerHTML = "English: " +second01
    }
    else if(second >= 60 && second <= 69){
        var second02 = document.getElementById('second').value = 4
        document.getElementById("score-2").innerHTML = second02
        var second03 = parseInt(second02) * 3
        document.getElementById('eng').innerHTML = "English: " +second03
    }
    else if(second >= 50 && second <= 59){
        var second04 = document.getElementById('second').value = 3
        document.getElementById("score-2").innerHTML = second04
        var second05 = parseInt(second04) * 3
        document.getElementById('eng').innerHTML = "English: " +second05
    }
    else if(second >= 45 && second <= 49){
        var second06 = document.getElementById('second').value = 2
        document.getElementById("score-2").innerHTML = second06
        var second07 = parseInt(second06) * 3
        document.getElementById('eng').innerHTML = "English: " +second07
    }
    else if(second >= 40 && second <= 44){
        var second08 = document.getElementById('second').value = 1
        document.getElementById("score-2").innerHTML = second08
        var second09 = parseInt(second08) * 3
        document.getElementById('eng').innerHTML = "English: " +second09
    }
    else if (second >= 1 && second <= 39){
        var second1 = document.getElementById('second').value = 0
        document.getElementById('eng').innerHTML = "English- " +second1
    }

    // for the third text-box(input) for Biology

    const third = document.getElementById("third").value

    if(third >= 70 && third <= 100){
        var third0 = document.getElementById("third").value = 5
        document.getElementById("score-3").innerHTML = third0
        var third01 = parseInt(third0) * 2;
        document.getElementById('bio').innerHTML = "Biology: " +third01
    }
    else if(third >= 60 && third <= 69){
        var third02 = document.getElementById('third').value = 4
        document.getElementById("score-3").innerHTML = third02
        var third03 = parseInt(third02) * 2;
        document.getElementById('bio').innerHTML = "Biology: " +third03
    }
    else if(third >= 50 && third <= 59){
        var third04 = document.getElementById('third').value = 3
        document.getElementById("score-3").innerHTML = third04
        var third05 = parseInt(third04) * 2;
        document.getElementById('bio').innerHTML = "Biology: " +third05
    }
    else if(third >= 45 && third <= 49){
        var third06 = document.getElementById('third').value = 2
        document.getElementById("score-3").innerHTML = third06
        var third07 = parseInt(third06) * 2;
        document.getElementById('bio').innerHTML = "Biology: " +third07
    }
    else if(third >= 40 && third <= 44){
        var third08 = document.getElementById('third').value = 1
        document.getElementById("score-3").innerHTML = third08
        var third09 = parseInt(third08) * 2;
        document.getElementById('bio').innerHTML = "Biology: " +third09
    }
    else if (third >= 1 && third <= 39){
        var third1 = document.getElementById('third').value = 0
        document.getElementById('bio').innerHTML = "Biology: " +third1
    }

    // for the fourth text-box(input) for Biology

    const fourth = document.getElementById("fourth").value;

    if(fourth >= 70 && fourth <= 100){
        var fourth0 = document.getElementById("fourth").value = 5
        document.getElementById("score-4").innerHTML = fourth0
        var fourth01 = parseInt(fourth0) * 2;
        document.getElementById('phy').innerHTML = "Physics: " +fourth01
    }
    else if(fourth >= 60 && fourth <= 69){
        var fourth02 = document.getElementById('fourth').value = 4
        document.getElementById("score-4").innerHTML = fourth02
        var fourth03 = parseInt(fourth02) * 2;
        document.getElementById('phy').innerHTML = "Physics: " +fourth03
    }
    else if(fourth >= 50 && fourth <= 59){
        var fourth04 = document.getElementById('fourth').value = 3
        document.getElementById("score-4").innerHTML = fourth04
        var fourth05 = parseInt(fourth04) * 2;
        document.getElementById('phy').innerHTML = "Physics: " +fourth05
    }
    else if(fourth >= 45 && fourth <= 49){
        var fourth06 = document.getElementById('fourth').value = 2
        document.getElementById("score-4").innerHTML = fourth06
        var fourth07 = parseInt(fourth06) * 2;
        document.getElementById('phy').innerHTML = "Physics: " +fourth07
    }
    else if(fourth >= 40 && fourth <= 44){
        var fourth08 = document.getElementById('fourth').value = 1
        document.getElementById("score-4").innerHTML = fourth08
        var fourth09 = parseInt(fourth08) * 2;
        document.getElementById('phy').innerHTML = "Physics: " +fourth09
    }
    else if (fourth >= 1 && fourth <= 39){
        var fourth1 = document.getElementById('fourth').value = 0
        document.getElementById('phy').innerHTML = "Physics: " +fourth1
    }

    // for the fifth and last text-box(input) for chemistry
    const fifth = document.getElementById("fifth").value;

    if(fifth >= 70 && fifth <= 100){
        var fifth0 = document.getElementById("fifth").value = 5
        document.getElementById("score-5").innerHTML = fifth0
        var fifth01 = parseInt(fifth0) * 2;
        document.getElementById('chem').innerHTML = "Chemstry: " +fifth01
    }
    else if(fifth >= 60 && fifth <= 69){
        var fifth02 = document.getElementById('fifth').value = 4
        document.getElementById("score-5").innerHTML = fifth02
        var fifth03 = parseInt(fifth02) * 2;
        document.getElementById('chem').innerHTML = "Chemistry: " +fifth03
    }
    else if(fifth >= 50 && fifth <= 59){
        var fifth04 = document.getElementById('fifth').value = 3
        document.getElementById("score-5").innerHTML = fifth04
        var fifth05 = parseInt(fifth04) * 2;
        document.getElementById('chem').innerHTML = "Chemistry: " +fifth05
    }
    else if(fifth >= 45 && fifth <= 49){
        var fifth06 = document.getElementById('fifth').value = 2
        document.getElementById("score-5").innerHTML = fifth06
        var fifth07 = parseInt(fifth06) * 2;
        document.getElementById('chem').innerHTML = "Chemistry: " +fifth07
    }
    else if(fifth >= 40 && fifth <= 44){
        var fifth08 = document.getElementById('fifth').value = 1
        document.getElementById("score-5").innerHTML = fifth08
        var fifth09 = parseInt(fifth08) * 2;
        document.getElementById('chem').innerHTML = "Chemistry: " +fifth09
    }
    else if (fifth >= 1 && fifth <= 39){
        var fifth1 = document.getElementById('fifth').value = 0
        document.getElementById('chem').innerHTML = "Chemistry: " +fifth1
    }

    // to calculate the GPA

    //scores multiplied by credit units
    let maths = document.getElementById('maths').value = first09 || first07 || first05 || first03 || first01 || first1;
    let english = document.getElementById('eng').value = second09 || second07 || second05 || second03|| second01 || second1;
    let biology = document.getElementById('bio').value = third09 || third07 || third05 || third03|| third01 || third1;
    let physics = document.getElementById('phy').value = fourth09 || fourth07 || fourth05 || fourth03 || fourth01 || fourth1;
    let chemistry = document.getElementById('chem').value = fifth09 || fifth07 || fifth05 || fifth03 || fifth01 || fifth1 ;
    //end

    //score points
    let score1 = document.getElementById('maths').value = first08 || first06 || first04 || first02 || first0 || first1;
    let score2 = document.getElementById('eng').value = second08 || second06 || second04 || second02 || second0 || second1;
    let score3 = document.getElementById('bio').value = third08 || third06 || third04 || third02 || third0 || third1;
    let score4 = document.getElementById('phy').value = fourth08 || fourth06 || fourth04 || fourth02 || fourth0 || fourth1;
    let score5 = document.getElementById('chem').value = fifth08 || fifth06 || fifth04 || fifth02 || fifth0 || fifth1;
    let scores = score1 + score2 + score3 + score4 + score5;
    document.getElementById('total2').innerHTML = scores;
    //end
    
    // actual gpa calculation.
    let s_c_u = ((maths) + (english) + (biology) + (physics) + (chemistry));
    document.getElementById('total').innerHTML = s_c_u;
    let CreditUnits = (3 + 3 + 2 + 2 + 2);
    let GPA = parseInt(s_c_u) / parseInt(CreditUnits);
    GPA = GPA.toFixed(2)
    document.getElementById('GPA').innerHTML = "GPA:" +GPA;

    // to keep the page from reloading and clearing the form outputs
    const form = document.getElementById('my_form');
    form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    form.reset();
    });
}