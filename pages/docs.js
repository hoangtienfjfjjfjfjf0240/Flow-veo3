import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Docs(){
  const [md,setMd]=useState("# Loading...");
  useEffect(()=>{ fetch("/docs.md").then(r=>r.text()).then(setMd).catch(()=>setMd("# Docs not found")); },[]);
  return (
    <div className="container">
      <div className="prose max-w-none">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </div>
  );
}
