const wform = document.querySelector('form');
const inp = document.getElementById('inp');
const out = document.getElementById('output');
wform.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('/weather?address='+encodeURIComponent(inp.value)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            out.innerHTML =data.error;
        }else{
        out.innerHTML ='Here in '+ data.address+' It is currently '+data.temperature + ' degree out there. with ' + data.forecast + '  ';
        }
    })
})
})



