import { NextResponse } from "next/server";
import Search from "../../models/recent_searches"




export async function POST(request) {
    const { userid ,  text} = await request.json();
  
  const search = new Search({
     userid,
      text 
    
    });

    await search.save()

  console.log(search)
    return NextResponse.json(

      { status: 200 }
    );
  }
  




  
  