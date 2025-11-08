import { useState } from "react";
import { runFlowRequest } from "@/lib/flowApi";

export default function PromptManager(){
  const [prompt,setPrompt]=useState("");
  const [img,setImg]=useState(null);
  const [res,setRes]=useState("");

  const run=async()=>{
    try{
      const token=localStorage.getItem("flow_token");
      if(!token) return alert("Chưa có token!");
      const data=await runFlowRequest(token,prompt,img);
      setRes(JSON.stringify(data,null,2));
    }catch(e){ alert(e.message); }
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-2">🧠 Prompt Runner</h2>
      <textarea className="textarea" value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Nhập prompt..."/>
      <div className="mt-3 flex items-center gap-3">
        <input className="input" placeholder="Image URL (optional)" value={img||""} onChange={e=>setImg(e.target.value||null)} />
        <button onClick={run} className="btn">🚀 Run</button>
      </div>
      {res && <pre className="mt-3 p-3 bg-white border rounded text-xs overflow-x-auto">{res}</pre>}
    </div>
  );
}
