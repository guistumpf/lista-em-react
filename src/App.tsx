import {useEffect, useState } from "react";

export default function App() {
    const [tarefas, novatarefa] = useState<any[]>(() => JSON.parse(localStorage.getItem("tarefas") || "[]"))
    const [input, setinput] = useState<string>("")
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas]
    )

    function add() {
        if (input.trim() === "") {
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

    function excluir() {
        // eslint-disable-next-line no-restricted-globals
        let sure = confirm("Tem certeza que deseja apagar tudo?")
        if (sure) {
            novatarefa([])
        }
    }



    return (
        <section>

            <h1>Lista de Tarefas</h1>
            <input value={input} onChange={(e) => {
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
            {tarefas.length > 0 && (
                <button onClick={excluir}>Delete All</button>
            )}
        </section>
    )



}