import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function EllipsisList({name, type, urlImg}) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: "space-between",
      flexDirection: "column"
    }}>
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--ListItemDecorator-size': '56px' }}
      >
        <ListItem>
          <ListItemDecorator>
            <Avatar src={urlImg} />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">{name}</Typography>
            <Typography level="body-sm" noWrap>
              I&apos;{type}
            </Typography>
          </ListItemContent>
        </ListItem>


      </List>
    </Box>
  );
}
