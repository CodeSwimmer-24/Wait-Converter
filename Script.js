document.getElementById('lbsinput').addEventListener('input',function (e)
{
    let lbs=e.target.value;
    document.getElementById('gramsOutput').innerHTML=lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML=lbs/2.2045;
    document.getElementById('ozOutput').innerHTML=lbs*16;
})
