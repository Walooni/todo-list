import React, {useState} from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title:"",
    text:""
  })

  function handleChange(event){
    const {value, name} = event.target
    setInput(prev => {
      if (name === "title") {
        return { title:value, text:prev.text }
      } else if (name === "content"){
        return { title:prev.title, text:value }
      }
    })
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={input.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={input.text} />
        <button onClick={ (event)=> {
          props.addItem({ title: input.title, text: input.text });
          event.preventDefault();
          setInput({title: "", text: ""});
        }} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
