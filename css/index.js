//display
      document.getElementById('output').style.visibility = 'hidden'
    let hide = document.getElementsByClassName('hideMe')
for(let i = 0; i < hide.length; i++){
    let hidden = hide[i].classList.add('display')
}
let weightConverter= document.getElementById('weightConverter');
weightConverter.addEventListener('click', function showWeight(e){
    e.preventDefault();
    weightConverter.classList.add('display')
    let IbsInput=document.getElementById('IbsInput');
    IbsInput.classList.add('display');
    let hide = document.getElementsByClassName('hideMe');
for(let i = 0; i < hide.length; i++){
    hide[i].classList.remove('display');
}
})
//fetch items
let ounce= document.getElementById('ounce');
let kilogram = document.getElementById('kilogram');
let pounds = document.getElementById('pounds');
let gram = document.getElementById('gram');


//create event listeners for button clicks
//for ounce
ounce.addEventListener('click', function poundConvert(e)
{
    e.preventDefault();

  let IbsInput=document.getElementById('IbsInput');
    IbsInput.classList.remove('display');
   kilogram.classList.add('display'); 
   pounds.classList.add('display'); 
   gram.classList.add('display');
    ounceSolution();
})

//for kilogram
kilogram.addEventListener('click', function kiloConvert(e)
{
    e.preventDefault();

  let IbsInput=document.getElementById('IbsInput');
    IbsInput.classList.remove('display');
   kilogram.classList.remove('display'); 
   pounds.classList.add('display'); 
   gram.classList.add('display');
   ounce.classList.add('display')
    kiloSolution();
})

//for gram
gram.addEventListener('click', function gramConvert(e)
{
    e.preventDefault();

  let IbsInput=document.getElementById('IbsInput');
    IbsInput.classList.remove('display');
   kilogram.classList.add('display'); 
   pounds.classList.add('display'); 
   gram.classList.remove('display');
   ounce.classList.add('display')
    gramSolution();
});

//for pounds
pounds.addEventListener('click', function gramConvert(e)
{
    e.preventDefault();

  let IbsInput=document.getElementById('IbsInput');
    IbsInput.classList.remove('display');
   kilogram.classList.add('display'); 
   pounds.classList.remove('display'); 
   gram.classList.add('display');
   ounce.classList.add('display')
    gramSolution();
});
//function for buttons 
//for pound
function poundSolution(){ document.getElementById('IbsInput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible'
    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML= pounds/0.0022046 +' grams';
    let p = document.getElementById('poundsOutput').innerHTML = e.target.value;

    document.getElementById('kgOutput').innerHTML= pounds/2.2046;
    document.getElementById('ozOutput').innerHTML= pounds*16;
    

})
}
//function for ounce
function ounceSolution(){ document.getElementById('IbsInput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible'
    let ounce = e.target.value;
    document.getElementById('gramsOutput').innerHTML= ounce*28.35;
    document.getElementById('kgOutput').innerHTML= ounce*0.0283;
    document.getElementById('ozOutput').innerHTML= ounce;
    document.getElementById('poundsOutput').innerHTML= ounce*0.0625;
})
}
//function for kilogram
function kiloSolution(){ document.getElementById('IbsInput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible'
    let kilo = e.target.value;
    document.getElementById('gramsOutput').innerHTML= kilo*1000;
    document.getElementById('kgOutput').innerHTML= kilo*1;
    document.getElementById('ozOutput').innerHTML= kilo*35.274;
    document.getElementById('poundsOutput').innerHTML= kilo*2.205;
})
}
//function for gram
function gramSolution(){ document.getElementById('IbsInput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible'
    let gram = e.target.value;
    document.getElementById('gramsOutput').innerHTML= gram*1;
    document.getElementById('kgOutput').innerHTML= gram/1000
    document.getElementById('ozOutput').innerHTML= gram*35274
    document.getElementById('poundsOutput').innerHTML= gram*2205;
})
}