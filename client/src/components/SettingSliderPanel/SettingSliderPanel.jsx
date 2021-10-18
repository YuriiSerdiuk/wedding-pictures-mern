import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import DragDrop from "../DragDropContext/DragDropContext.container";
import {getPhotosMongoDB} from "../../redux/actions/applicationData.action";


const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display:"flex",
    justifyContent:"space-between"
  },
  slider: {
    marginBottom: 100,
    marginTop: 50
  },
  time: {
    width: 300,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  configurePanel : {
    width:'60%'
  },
  dragPanel:{
    width:'30%'
  }
}));


function valuetext(value) {
  return `${value}°C`;
}

export const SettingSliderPanel = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authorisation);
  const applicationData = useSelector((state) => state.applicationData);
  const [sliderAnimation, setSliderAnimation] = useState('cubeAnimation');
  const [value, setValue] = useState(1);

  // updatePhotos
  useEffect(() => {
    auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
    // eslint-disable-next-line
  }, [auth]);

  useEffect(()=>{
  },[value,sliderAnimation])

  const handleChange = (event) => {
    setSliderAnimation(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <div className={classes.configurePanel}>
        <div >
          <Typography variant="h5" component="h5">
            Slider Variant :
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">variant</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sliderAnimation}
              onChange={handleChange}
              label="variant"
            >
              <MenuItem value='cubeAnimation'>cubeAnimation</MenuItem>
              <MenuItem value='openAnimation'>openAnimation</MenuItem>
              <MenuItem value='fallAnimation'>fallAnimation</MenuItem>
              <MenuItem value='foldOutAnimation'>foldOutAnimation</MenuItem>
              <MenuItem value='scaleOutAnimation'>scaleOutAnimation</MenuItem>
            </Select>
          </FormControl>

        </div>
        <Divider />
        <div className={classes.slider}>
          <AutoplaySlider
            animation={sliderAnimation}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={ value * 1000 }
          >
            {applicationData.photos.map((photo)=>{
              return <div data-src={photo.href} />
            })}
          </AutoplaySlider>
        </div>

        <div className={classes.time}>
          <Typography id="discrete-slider-small-steps" component="h1" gutterBottom>
            Slider interval
          </Typography>
          <Slider
            value={value}
            onChange={handleSliderChange}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={10}
            valueLabelDisplay="auto"
          />
        </div>
      </div>

      <div className={classes.dragPanel}>
        <DragDrop />
      </div>

    </div>
  )
}
