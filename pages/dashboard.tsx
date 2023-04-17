import React, {  useState } from "react";

const dashboard = () => {
  const [text, setText] = useState<string[]>([]);
  const [newtext, setNewText] = useState("");
  const handelSubmit = ()=>{
    if (newtext !== "") {
      setText([...text, newtext]);
      setNewText("");
    }
  };
  const handleDelet = (index: number) => {
    let temp = [...text];
    temp.splice(index, 1);
    setText(temp);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-3">
          <input
            type="text"
            className="border border-white outline-none "
            placeholder="Todo"
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="" onClick={handelSubmit}>
            Click
          </button>
        </div>
        <ul className="py-4">
          {text.map((todo, index) => (
            <li className="" key={index}>
              {todo}
              <button onClick={(e) => handleDelet(index)} className="px-2">delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default dashboard;
