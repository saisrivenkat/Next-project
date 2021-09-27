import Meetup from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
export default function index(props) {
    return <Meetup meetups={props.meetups} />
}
export async function getStaticProps() {
    const client = await MongoClient('mongodb+srv://main_db:srisaivenkat@cluster0.sxfds.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetup.map((meet) => ({
                title: meet.title,
                image: meet.image,
                address: meet.address,
                id: meet._id.toString()
            }))
        },
        revalidate: 1
    }
}