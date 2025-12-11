import clientPromise from "@/lib/mongodb";


export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("branch");
    const collection = db.collection("branches");

    const doc = await collection.findOne({handle: body.handle})

    if(doc){
        return Response.json({success: false, error: true, data: null, message: "Branch Handle already existing!"});
    }


    const result = await collection.insertOne(body);

    return Response.json({success: true, error: false, data: result, message: "Branch Added Successfully! "});
}