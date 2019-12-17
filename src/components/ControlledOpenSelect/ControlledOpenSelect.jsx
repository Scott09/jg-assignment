import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect({handleChange, optionone, optiontwo, optionthree, title}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={null}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>No date filter</em>
          </MenuItem>
          <MenuItem value={optionone.value}>{optionone.name}</MenuItem>
          <MenuItem value={optiontwo.value}>{optiontwo.name}</MenuItem>
          <MenuItem value={optionthree.value}>{optionthree.name}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}