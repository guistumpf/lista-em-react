import { use, useState } from "react";

export default function App(){
    const [tarefas, novatarefa] = useState<any[]>([])
const [input, setinput] = useState<string>("")

function add(){
    if(input.trim() === ""){
        alert("digite uma tarefa")
    return
    }
const tasks: any = {
    id: Date.now(),
    text: input
}


novatarefa([...tarefas, tasks])
setinput("")
console.log(tasks)
}



return(
<section>
    
<h1>Lista de Tarefas</h1>
<input value={input} onChange={(e) =>{
    setinput(e.target.value)
    console.log(e.target.value)
    }}
/>
<button onClick={add}>Add</button>
<ul>
{tarefas.map((tarefa) => {
    return <li key={tarefa.id}>
        {tarefa.text}
    </li>
})

}

</ul>
</section>
)



}