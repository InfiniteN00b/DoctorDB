import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItems(props) {
  return <Box component = 'li' sx = {{mt : 1, typography : 'body1'}} {...props} />;
}

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                variant: 'h3',
                gutterBottom: true,
            },
        },
        h2: {
            component: Typography,
            props: {
                variant: 'h4',
                gutterBottom: true,
            },
        },
        h3: {
            component: Typography,
            props: {
                variant: 'h5',
                gutterBottom: true,
            },
        },
        h4: {
            component: Typography,
            props: {
                variant: 'h6',
                gutterBottom: true,
            },
        },
        h5: {
            component: Typography,
            props: {
                variant: 'subtitle1',
                gutterBottom: true,
            },
        },
        h6: {
            component: Typography,
            props: {
                variant: 'subtitle2',
                gutterBottom: true,
            },
        },
        p: {
            component: Typography,
            props: {
                paragraph: true,
            },
        },
        a: {
            component: Link,
        },
        li: {
            component: MarkdownListItems,
        },
    },
};

export default function MarkDown(props){
    return <ReactMarkdown options = {options} {...props} />;
}