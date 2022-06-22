// import PropTypes from "prop-types";
// import { default as ReactSelect } from "react-select";
// import React, { Component } from "react";
// import makeAnimated from "react-select/animated";
// import { components } from "react-select";
// import { useContext } from "react";
// import { MainContext } from "../filterContext/FIlterContext";

// const MySelect = props => {
//     if (props.allowSelectAll) {
//       return (
//         <ReactSelect
//           {...props}
//           options={[props.allOption, ...props.options]}
//           onChange={selected => {
//             if (
//               selected !== null &&
//               selected.length > 0 &&
//               selected[selected.length - 1].value === props.allOption.value
//             ) {
//               return props.onChange(props.options);
//             }
//             return props.onChange(selected);
//           }}
//         />
//       );
//     }
  
//     return <ReactSelect {...props} />;
//   };
  
//   MySelect.propTypes = {
//     options: PropTypes.array,
//     value: PropTypes.any,
//     onChange: PropTypes.func,
//     allowSelectAll: PropTypes.bool,
//     allOption: PropTypes.shape({
//       label: PropTypes.string,
//       value: PropTypes.string
//     })
//   };
  
//   MySelect.defaultProps = {
//     allOption: {
//       label: "Select all",
//       value: "*"
//     }
//   };


//   const Option = props => {
//     return (
//       <div              className="drop-down-checkbox"
//       >
//         <components.Option {...props}>
//           <input
//             type="checkbox"
//             checked={props.isSelected}
//             onChange={() => null}
//           />{" "}
//           <label>{props.label}</label>
//         </components.Option>
//       </div>
//     );
//   };
  
//   const MultiValue = props => (
//     <components.MultiValue {...props}>
//       <span>{props.data.label}</span>
//     </components.MultiValue>
//   );
  
//   const animatedComponents = makeAnimated();

//     const colourOptions = [
//         { value: "agriculture", label: "Agriculture" },
//         { value: "agriculture Production Livestock", label: "Agriculture Production Livestock" },
//         { value: "forestry", label: "Forestry" },
//         { value: "fishing, Hunting & Trapping", label: "Fishing, Hunting & Trapping" },
//     ];

// export default class DropdownCheckbox extends Component {
//   static contextType = MainContext;

//     constructor(props) {
//         super(props);
//         this.state = {
//         optionSelected: null
//         };
//     }
    
//     handleChange = selected => {
//       const context = this.context;

//     console.log("🚀 ~ file: DropdownCheckbox.js ~ line 88 ~ DropdownCheckbox ~ selected", selected)
//     let newData = selected.map((data)=>{
//      return data.label
//     })
//     context.setContextData("industry",this.props.title,newData)
//         this.setState({
//         optionSelected: selected
//         });
//     };
    
//     render() {
//         return (
//           <div className="position-relative drop-main">
//         <MySelect
//             options={colourOptions}
//             isMulti
//             closeMenuOnSelect={false}
//             hideSelectedOptions={false}
//             components={{  Option , MultiValue, animatedComponents }}
//             onChange={this.handleChange}
//             allowSelectAll={true}
//             value={this.state.optionSelected}
//             className="drop-down-checkbox"
//         />
//         </div>
//         );
//     }
//     }
    
    // const rootElement = document.getElementById("root");
    // ReactDOM.render(<DropdownCheckbox />, rootElement);


    import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      height:"150px"
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DropdownCheckbox() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='drop-select'>
      <FormControl sx={{ m: 1, width: 370 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          // style={{height:"70px"}}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
         
        </Select>
      </FormControl>
    </div>
  );
}

    