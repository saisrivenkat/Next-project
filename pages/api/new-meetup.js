import { MongoClient } from 'mongodb';
async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body
        const {title,image,address,description} = data
        const client = await MongoClient.connect('mongodb+srv://main_db:srisaivenkat@cluster0.sxfds.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupcollections = db.collections('meetups')
        const result = meetupcollections.insertOne(data)
        console.log(result);
        client.close();
        res.status(201).json({message:'meetup inserted'})
    }
}
export default handler();