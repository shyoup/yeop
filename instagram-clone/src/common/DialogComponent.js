import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Avatar } from '@mui/material';

function DialogComponent(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
      onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
      onClose(value);
  };

  return (
  <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
              <ListItemButton>
              <ListItemAvatar>
                  <Avatar>
                  </Avatar>
              </ListItemAvatar>
              <ListItemText />
              </ListItemButton>
          </ListItem>
      <ListItem disableGutters>
          <ListItemButton
              autoFocus
              onClick={() => handleListItemClick('addAccount')}
          >
              <ListItemAvatar>
              <Avatar>
              </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
          </ListItemButton>
          </ListItem>
      </List>
      </Dialog>
  );
}

export default DialogComponent