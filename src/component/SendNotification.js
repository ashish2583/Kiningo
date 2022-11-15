const sendNotification= async(data)=>{
    const firApiKey="AAAAGoJqRw8:APA91bH1UmgoFE2kajk8BWXUADY3dqfRRLV_8gQPk8r3I6WlJo6atv7CGNUOWPSRygBgIJw8W5u9K3Kbx2MOoy3W1EgRG9WLBdgNi0UAS7F0L6t9SOonCyfdRNkni3IFlZqbbhMUvKmn"
    const  message={
registration_ids:[data.token], //Devide token
data : data.data,
notification: {
  title: data.title,
  body: data.body,
  "vibrate":1,
  "sound": 1,
  "show_in_foreground": true,
  "priority": "high",
  "content_available": true,
}
  }
  let headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": "key=" + firApiKey
  });

let response = await fetch("https://fcm.googleapis.com/fcm/send", {method: "POST", headers,body: JSON.stringify(message) })
responce = await response.json();
console.log('HIIIII',responce);
 }
  export default {sendNotification}