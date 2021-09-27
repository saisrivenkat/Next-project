import MeetupForm from '../../components/meetups/NewMeetupForm.js'
export default function NewMeetupPage() {
    const onAddMeetup = async (data) => {

        const res = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        const final = await res.json();
        console.log(final)
    }
    return (
        <MeetupForm onAddMeetup={onAddMeetup} />
    )
}