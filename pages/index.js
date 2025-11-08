import { useState } from "react";
import Tabs from "@/components/Tabs";
import TokenInput from "@/components/TokenInput";
import PromptManager from "@/components/PromptManager";
import HistoryTable from "@/components/HistoryTable";

export default function Home(){
  const [tab,setTab]=useState("control");
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-primary mb-1">Flow Automation Studio <span className="text-sm text-gray-500">by tienhv</span></h1>
      <p className="mb-5 text-gray-600">🔵 Giao diện sáng (white/blue), chạy prompt online, lưu token tại local.</p>
      <Tabs tab={tab} setTab={setTab}/>
      {tab==="control" && <PromptManager/>}
      {tab==="settings" && <TokenInput/>}
      {tab==="history" && <HistoryTable/>}
      {tab==="docs" && <iframe src="/docs" className="w-full h-[80vh] border rounded" title="Docs"/>}
    </div>
  );
}
