import DetailPage from '../../components/meetups/MeetupDetail'
export default function Detail(props) {
    return (
        <>
            <DetailPage
                img={props.image}
                title={props.title}
                address={props.address}
                desc={props.description}
            />
        </>
    )
}
export async function getStaticPaths() {
    const client = await MongoClient('mongodb+srv://main_db:srisaivenkat@cluster0.sxfds.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
    client.close()
    return {
        fallback: false,
        paths: meetups.map(meet => ({ params: { meetupid: meetup._id.toString() }, }))
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient('mongodb+srv://main_db:srisaivenkat@cluster0.sxfds.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const selected = await meetupsCollection.findOne({ _id: meetupId })
    client.close()
    return {
        props: {
            meetupData: selected
        }
    }
}