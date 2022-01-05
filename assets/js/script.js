let top_highscore = window.localStorage.getItem(`user`);
top_highscore = JSON.parse(top_highscore);
const timer_elemnt = document.getElementById(`timer`);
const score_elemnt = document.getElementById(`highscore`);
let answered = false;
let score = 0;
let ques_number = 1;
let end = false
let timeCount = 60
const questions_and_answers = [
    {
        question: "In Which of These Do You Put Your Javascript File ?",
        answers:[
            {text:"script", value: true},
            {text: "href", value: false},
            {text:"source", value: false},
            {text:"embed", value: false}
        ],
        id: 0
    },
    {
        question: "Which of These has The Correct Syntax ?",
        answers:[
            {text:"if x = y then;", value: false},
            {text:"if(x = y){};", value: false},
            {text:"x = y then", value: false},
            {text:"if(X == y){};", value: true}
        ],
        id: 1
    },
    {
        question:"Which Of These Is Used To Make An Ordered List",
        answers:[
            {text: "ul", value: false},
            {text: "li", value: false},
            {text: "ol", value: true},
            {text: "div", value: false},
        ],
        id:2
    },
    {
        question:"Which of These Can Hold Multiple Data Points of the Same Type ?",
        answers:[
            {text: "Variable", value: false},
            {text: "Array", value: true},
            {text: "Integer", value: false},
            {text: "Object", value: false},
        ],
        id:3
    },
    {
        question:"What does CSS Stand For ?",
        answers:[
            {text: "Coding Style System", value: false},
            {text: "Cool Style Sheets", value: false},
            {text: "Cascading Style Sheets", value: true},
            {text: "Cascading Sheets Style", value: false},
        ],
        id:4
    },
    {
        question:"What tag Defines The Body Of a WebPage In HTML ?",
        answers:[
            {text: "body", value: true},
            {text: "div", value: false},
            {text: "head", value: false},
            {text: "section", value: false},
        ],
        id:5
    },
    {
        question:"How Do You Define a Class In CSS ?",
        answers:[
            {text: "#`ClassName`", value: false},
            {text: ".`ClassName`", value: true},
            {text: "`ClassName`", value: false},
            {text: "Class.`ClassName`", value: false},
        ],
        id:6
    },
    {
        question:"Which of These Holds Decimals",
        answers:[
            {text: "int", value: false},
            {text: "var", value: false},
            {text: "float", value: true},
            {text: "blob", value: false},
        ],
        id:7
    },
    {
        question:"Which Of These Is Used To Reference CSS Files ?",
        answers:[
            {text: "div", value: false},
            {text: "link", value: true},
            {text: "source", value: false},
            {text: "script", value: false},
        ],
        id:8
    },
    {
        question:"HTML and CSS Use Which Colors To Make Different Shades ?",
        answers:[
            {text: "BWM", value: false},
            {text: "YRB", value: false},
            {text: "YMB", value: false},
            {text: "RGB", value: true},
        ],
        id:9
    }
]

score_elemnt.innerHTML =" "+ top_highscore.initials + ": " + top_highscore.score;

document.querySelector(`#start`).addEventListener(`click`, function(){
    let card = document.querySelector(`.card`);
    card.remove();
    build_card();
});

function end_status(){
    if(ques_number > 10){
        return true
    }else{
        return false
    }
}

function check_answear(){
    let timer;
    let card = document.querySelector(`.card`);
    timer = setInterval(function(){
        timeCount --;
        timer_elemnt.innerHTML = timeCount;
        if(timeCount == 0){
            ques_number++;
            card.remove();
            build_card();
            clearInterval(timer);
            timeCount = 60;
        }
    }, 1000);
    
    document.getElementById(`0`).addEventListener(`click`, function(){
        score = score + correctCheck(this.value);
        answered = true;
        ques_number = ques_number+1;
        if(timeCount != 0 && answered == true){
            clearInterval(timer);
            timer_elemnt.innerHTML = 00;
            timeCount = 60;
        }
        card.remove();
        end_status();
        build_card();
        
    });
    document.getElementById(`1`).addEventListener(`click`, function(){
        score = score + correctCheck(this.value);
        ques_number = ques_number+1;
        answered = true;
        if(timeCount != 0 && answered == true){
            clearInterval(timer);
            timer_elemnt.innerHTML = 00;
            timeCount = 60;
        }
        card.remove();
        end_status();
        build_card();
    });
    document.getElementById(`2`).addEventListener(`click`, function(){
        score = score + correctCheck(this.value);
        ques_number = ques_number+1;
        answered = true;
        if(timeCount != 0 && answered == true){
            clearInterval(timer);
            timer_elemnt.innerHTML = 00;
            timeCount = 60;
        }
        card.remove();
        end_status();
        build_card();

    });
    document.getElementById(`3`).addEventListener(`click`, function(){
        score = score + correctCheck(this.value);
        ques_number = ques_number+1;
        answered = true;
        if(timeCount != 0 && answered == true){
            clearInterval(timer);
            timer_elemnt.innerHTML = 00;
            timeCount = 60;
        }
        card.remove();
        end_status();
        build_card();

    });
}

function correctCheck(value){
    if(value == "true"){
        return 1
    }else if(value == "false"){
        return 0
    }
}

function build_card(){
    if(ques_number < 11){
        let ques_id = questions_and_answers[ques_number-1]
        answered = false;
    
        let card_cnt = document.querySelector(`#card_cnt`);
        let card = document.createElement(`div`);
        card.className = "card";
        let header = document.createElement(`div`);
        header.className = `header`;
        let h3 = document.createElement(`h3`);
        h3.className = `ques`;
        h3.innerHTML = ques_id.question;
        let section = document.createElement(`section`);
        section.className = `ans_cnt`;
        let p = document.createElement(`p`);
        p.innerHTML = "Hello Wolrd"
            
        card.appendChild(header);
        header.appendChild(h3);
        card.appendChild(section);
        for (let index = 0; index < 4; index++) {
            let button = document.createElement(`button`);
            button.className = "Aswr_op"
            button.innerHTML = ques_id.answers[index].text;
            button.setAttribute(`id`, index)
            button.value = ques_id.answers[index].value;;
            section.appendChild(button);
        }
        card_cnt.appendChild(card);
        check_answear();
    }else if (ques_number > 10){
        endCard();
    }

    }
    

function endCard(){

    let card_cnt = document.querySelector(`#card_cnt`);
    let card = document.createElement(`div`);
    card.className = "card";
    let header = document.createElement(`div`);
    header.className = `header`;
    let h3 = document.createElement(`h3`);
    h3.className = `ques`;
    h3.innerHTML = "END"
    let section = document.createElement(`section`);
    section.className = `ans_cnt`;
    let p = document.createElement(`p`);
    p.innerHTML = "This Quiz Has Ended, You Have Scored: "+score+"/"+"10";
    let button = document.createElement(`button`);
    button.innerHTML = "return To Main Menu"

    card.appendChild(header);
    header.appendChild(h3);
    card.appendChild(section);
    section.appendChild(p);
    section.appendChild(button);
    card_cnt.appendChild(card);

    document.querySelector(`button`).addEventListener(`click`, function(){
        local_storage(window.prompt("please enter Your Initials"), score);
        location.reload();
    })
}

function local_storage(initials, score){
    const person = {
        initials: initials,
        score: score+"/10"
    }
    window.localStorage.setItem(`user`, JSON.stringify(person));
}

function setTimer(){
    let timer;
    let card = document.querySelector(`.card`);
    timer = setInterval(function(){
        timeCount --;
        timer_elemnt.innerHTML = timeCount;
        if(answered == true && timeCount != 0){
            clearInterval(timer);
            timeCount = 60;
        }else if(timeCount == 0){
            ques_number++;
            card.remove();
            build_card();
            clearInterval(timer);
            timeCount = 60;
        }
    }, 1000);
    
}