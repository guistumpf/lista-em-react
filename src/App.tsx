import { use, useState } from "react";

export default function App(){
    const [tarefas, novatarefa] = useState<string[]>([])
const [input, setinput] = useState<string>("")

function add(){
    if(input.trim() === ""){
        alert("digite uma tarefa")
    return
    }


novatarefa([...tarefas, input])
setinput("")
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
{tarefas.map((tarefas) => {
    return <li key={tarefas}>
        {tarefas}
    </li>
})

}

</ul>
</section>
)



}