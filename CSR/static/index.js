const list=document.getElementById('list');

const form=document.querySelector('form');

getAllTask();
async function getAllTask(){
    const response=await fetch('/api/getAllTask')
    console.log(response);
    
    if(response.ok){
        const data=await response.json();
       console.log(data);
        
        // console.log(response);
        for (let index = 0; index < data.length; index++) {
            const newTask=document.createElement('li');
            const element = data[index];
            const desc=element.desc;
            newTask.innerHTML=desc;
            list.appendChild(newTask);
        }
    }
    else{
        console.log("error");
    }
}

async function addTask(input){
    let newTask={
        desc:input
    }
    console.log(newTask);
    const response=await fetch('api/createTask',{
        method:'POST',
        body:JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    console.log(response);
    if(response.ok){
        
        const newTask=document.createElement('li');
        newTask.innerHTML=input;
        list.prepend(newTask)
        console.log("data added successfully ");
    }
    else{
        console.log("error in adding task");
    }
}
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const input=document.querySelector('input');
    addTask(input.value)

    input.value=''


})