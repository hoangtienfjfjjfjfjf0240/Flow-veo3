async function runFlowRequest(token, prompt, imageUrl){
  if(!token) throw new Error("Thiếu Bearer Token");
  // Demo endpoint – bạn thay bằng endpoint thật của Google Flow khi có
  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model:"veo-3.1-f", prompt, image_url: imageUrl||null })
  });
  if(!res.ok) throw new Error("API lỗi: " + res.status);
  return await res.json();
}
module.exports = { runFlowRequest };
