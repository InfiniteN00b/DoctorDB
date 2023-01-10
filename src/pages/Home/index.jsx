import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Main from '../../components/Main';
// import Sidebar from '../../components/SideBar';
import NewPosts from '../../components/NewPost';
import TopPost from '../../components/TopPost';
import post1 from '../../pagedata/text1.md';
import post2 from '../../pagedata/text2.md';
import post3 from '../../pagedata/text3.md';
import { Box } from '@mui/material';


const sections = [
    {title: "Technology", url: "#"},
    {title: "Design", url: "#"},
    {title: "Culture", url: "#"},
    {title: "Business", url: "#"},
    {title: "Politics", url: "#"},
    {title: "Opinion", url: "#"},
];

const topPost = {
    title: "Not Sure which Doctor to Consult?",
    subtitle: "We are Here to help !",
    description: "Safest Treatment by the Best Doctors, Book an Appointment Now!",
    image: "https://images.unsplash.com/photo-1659019479940-e3fd3fba24d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    // image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    linkText: "Get Started..",
};

const newPosts = [
    {
        title: "Post Covid World",
        date: 'Dec 31 2022',
        description: "The domain of health and healthcare has seen multiple and steep learning curves in the last few years. Globally, communities suffered unprecedented impact of the COVID-19 pandemic from early 2020 onwards...",
        // image: "https://source.unsplash.com/random",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageLable: "Image Text",
    },
    {
        title: "Analyzing impact of pandemic on malaria trends",
        date: 'Jan 02 2023',
        description: "Malaria inflicts a great socio-economic burden on humans, accounting for 85% of worldwide infectious disease burden together with six other diseases (diarrhoea, HIV/AIDS, tuberculosis, measles, hepatitis B, and pneumonia).",
        // image: "https://source.unsplash.com/random",
        image: "https://images.unsplash.com/photo-1625407528892-3a01371584be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        imageLable: "Image Text",
    },
    {
        title: "Analyzing impact of pandemic on malaria trends",
        date: 'Jan 02 2023',
        description: "Malaria inflicts a great socio-economic burden on humans, accounting for 85% of worldwide infectious disease burden together with six other diseases (diarrhoea, HIV/AIDS, tuberculosis, measles, hepatitis B, and pneumonia).",
        // image: "https://source.unsplash.com/random",
        image: "https://images.unsplash.com/photo-1625407528892-3a01371584be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        imageLable: "Image Text",
    },
    {
        title: "Post Covid World",
        date: 'Dec 31 2022',
        description: "The domain of health and healthcare has seen multiple and steep learning curves in the last few years. Globally, communities suffered unprecedented impact of the COVID-19 pandemic from early 2020 onwards...",
        // image: "https://source.unsplash.com/random",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageLable: "Image Text",
    }
];

const posts = [post1, post2, post3];

const theme = createTheme();

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                padding: 2,
            }}>
                    <TopPost post={topPost} />
                    <Grid container spacing={4}>
                        {newPosts.map((post) =>(
                            <NewPosts key={post.title} post={post} />
                        ))}
                    </Grid>

            </Box>
        </ThemeProvider>
    );
}