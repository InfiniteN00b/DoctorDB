import { Avatar, Button, Card, CardContent, CardHeader, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import SnackbarUtils from '../../components/SnackbarUtils';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function index() {
    const [feed, setFeed] = React.useState({
            name : "",
            feedback : "",
            rating : 5
    });
    const [feedback, setFeedback] = React.useState([]);
    React.useEffect(() => {
        fetch("/api/feedback")
        .then((res) => {
            if (res.status !== 200) {
                SnackbarUtils.error("Error fetching appointments");
                return;
            }
            res.json().then((data) => {
                console.log(data);
                setFeedback(data);
            });
        })
        .catch((err) => {
            console.error(err);
            SnackbarUtils.error("Unable to fetch appointments");
        });
    }, []);

    const handleSubmit = () => {
        console.log(feed)
        fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feed),
        })
        .then((res) => {
            if (res.status !== 200) {
                SnackbarUtils.error("Login to Submit Review");
                return;
            }
            res.json().then((data) => {
                console.log(data);
                setFeedback([...feedback, data]);
                setFeed(
                    {
                        name : "",
                        feedback : "",
                        rating : 5
                    }
                );
                SnackbarUtils.success("review Submitted with" + data.rating + "stars");
            });
        })
        .catch((err) => {
            console.error(err);
            SnackbarUtils.error("Unable to submit review");
        });
    }

  return (
    <>

        <Card sx={{
            minWidth: 475,
            maxWidth: "100%",
            m : 2,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography sx={{ fontSize: 20 , mb : 2}} color="text.primary" gutterBottom>
                Give Review About Website..!
            </Typography>
            <TextField id="standard-basic" label="Name" variant="standard" sx={{
                width: "50%",
                m: 2,
            }}
            value={feed.name}
            onChange={(event) => {
                setFeed({...feed, name : event.target.value})
            }}
            />
            <TextField
            id="standard-multiline-static"
            label="What do you think about our website?"
            multiline
            rows={4}
            variant="standard"
            sx={{
                width: "50%",
                m: 2,
            }}
            value={feed.feedback}
            onChange={(event) => {
                setFeed({...feed, feedback : event.target.value});
            }}
            />
            <Typography component="legend">Rating</Typography>
            <Rating
                name="simple-controlled"
                value={feed.rating}
                onChange={(event, newValue) => {
                    setFeed({...feed, rating : newValue});
                }}
                size="large"
                sx={{
                    m: 2,
                }}
            />
            <div>  

                <Button variant="contained" sx={{
                    m: 2,
                }}
                onClick = {handleSubmit}
                >Submit Review</Button>
                <Button variant="contained" sx={{
                    m: 2,
                }}
                onClick={() => {
                    setFeed({
                        name : "",
                        feedback : "",
                        rating : 0
                    })  
                    SnackbarUtils.success("Cleared");

                }}
                >Clear Fields</Button>
            </div>


        </Card >
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            minWidth: 575,
        }}>
        {feedback.map((f) => <Card sx={{
            width: 300,
            minHeight: 300,
            m : 2,
            p: 2,

        }}>
                <CardHeader
                    avatar={
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    }
                    title={f.name}
                    subheader={<Rating name="read-only" value={f.rating} readOnly />}
                    />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {f.feedback}
                    </Typography>
                </CardContent>
            </Card>
        
        )}
        </div>



    </>

  )
}

export default index