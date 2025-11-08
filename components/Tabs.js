export default function Tabs({tab,setTab}){
  const tabs=[["control","Control"],["settings","Settings"],["history","History"],["docs","Docs"]];
  return (
    <div className="flex gap-3 border-b mb-5">
      {tabs.map(([k,label])=>(
        <button key={k} onClick={()=>setTab(k)} className={"tab "+(tab===k?"active":"")}>{label}</button>
      ))}
    </div>
  );
}
