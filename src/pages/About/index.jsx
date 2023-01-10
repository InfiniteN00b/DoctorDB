import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopPost from '../../components/TopPost';
import CardA from '../../components/CardA';
import { Box, Typography, Grid } from '@mui/material';

const topPost = {
        title: "Need to Contact our team, Here is the way",
        subtitle: "About Us",
        description: "Safest Treatment by the Best Doctors, Book an Appointment Now!",
        image: "https://images.unsplash.com/photo-1659019479940-e3fd3fba24d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        // image: "https://source.unsplash.com/random",
        imageText: "Image Text",
        linkText: "Get Started..",
    };

// const posts = [post1, post2, post3];

const theme = createTheme();

export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopPost post={topPost} />
            <Box sx={{
                padding: 2,
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                bgcolor: 'background.paper',
                color: 'text.primary',
                minHeight: '100vh',

            }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Our Team
            </Typography>
            <CardA />
            <br></br>
            <Typography variant="h6" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </Typography>
            <br></br>
            <Typography variant="h4" component="h1" gutterBottom>
                Our Mission
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </Typography>
            <br></br>
            <br></br>
            <Typography variant="h4" component="h1" gutterBottom>
                Our Vision
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </Typography>

            <br></br>

            </Box>
        </ThemeProvider>
    );
}