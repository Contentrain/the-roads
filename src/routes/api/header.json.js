// @ts-nocheck
export async function GET() {
    const header = await import("../../../contentrain/header/header.json");
    return { body: header.default }
   
    
  }