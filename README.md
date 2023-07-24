## BrainFlix API
The BrainFlix API provides access to a collection of videos with associated details and comments. It serves as the backend for a video streaming platform. The API comes pre-seeded with a list of videos, each containing default comments.



## BrainFlix API URL (Based on Local server)

API Base URL: `http://localhost:8550`


## API Errors
The API may return 400 or 404 errors in case of invalid requests or non-existing resources. An example error body looks like this:




## API Errors
The API may return 400 or 404 errors in case of invalid requests or non-existing resources. An example error body looks like this:



```javascript
{
    "message": "No video with that id exists"
}

```





## Routes

GET /videos
- Returns an array of video objects containing basic information to display in the sidebar.

```javascript
[
    {
        "id": "1af0jruup5gu",
        "title": "BMX Rampage: 2018 Highlights",
        "channel": "Red Cow",
        "image": "https://i.imgur.com/l2Xfgpl.jpg"
    },
    {
        "id": "1ainjruutd1j",
        "title": "Become A Travel Pro In One Easy Lesson",
        "channel": "Todd Welch",
        "image": "https://i.imgur.com/5qyCZrD.jpg"
    }
]


```

GET /videos/:id
- Retrieves a detailed object of a single video identified by :id.
- The response includes video details and a list of comments for that video.

```javascript
{
    "id": "1af0jruup5gu",
    "title": "BMX Rampage: 2018 Highlights",
    "channel": "Red Cow",
    "image": "https://i.imgur.com/l2Xfgpl.jpg",
    "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    "views": "1,001,023",
    "likes": "110,985",
    "duration": "4:01",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": 1545162149000,
    "comments": [
        {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
            "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            "likes": 0,
            "timestamp": 1545162149000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            "likes": 0,
            "timestamp": 1544595784046
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
            "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
            "likes": 0,
            "timestamp": 1542262984046
        }
    ]
}

```







