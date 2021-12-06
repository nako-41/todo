import React from "react";


export default function Todos({toDoItems}) {
    const renderTodos = () => {
        const todos = toDoItems.map((item) => {
            return <li>{item}</li>;
        })
        
        let arrays = ["okan","kaipoğlu"];
        localStorage.setItem("okan",arrays);
        const get =localStorage.getItem("okan");
        console.log(get);
        return (
            <>
            <lu>{todos}</lu>
            </>
        );
            
        }
 return  <> {renderTodos()} </>;
}