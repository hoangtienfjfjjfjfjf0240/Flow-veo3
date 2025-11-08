import { useEffect, useState } from "react";
export default function TokenInput(){
  const [t,setT]=useState("");
  useEffect(()=>{ const s=localStorage.getItem("flow_token"); if(s) setT(s); },[]);
  const save=()=>{ localStorage.setItem("flow_token",t); alert("✅ Token saved"); };
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-2">Flow API Token</h2>
      <textarea className="textarea" value={t} onChange={e=>setT(e.target.value)} placeholder="Dán Bearer Token vào đây..."/>
      <div className="mt-3"><button onClick={save} className="btn">💾 Lưu Token</button></div>
    </div>
  );
}
