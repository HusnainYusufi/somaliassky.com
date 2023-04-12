import { Checkbox, Button } from '@material-ui/core';
import { FcSalesPerformance } from "react-icons/fc";
import { GiSpookyHouse } from "react-icons/gi";
import { SiTerraform } from "react-icons/si";
import { BsHouseDoorFill } from "react-icons/bs";



const ButtonGroupCheckbox=({ options, selected, onChange })=> {
  return (
    <div>
      {options.map((option) => (
        <Button
        size="large"
        className='mr-2 mb-2'
          key={option.value}
          variant={selected.includes(option.value) ? 'contained' : 'outlined'}
          color={selected.includes(option.value) ? 'primary' : 'default'}
          onClick={() => onChange(option.value)}
          startIcon={option.value === 'chocolate' ?  <BsHouseDoorFill /> : <FcSalesPerformance /> ||  option.value === 'strawberry' ?  <GiSpookyHouse /> : <FcSalesPerformance />}
        >
          {/* <Checkbox checked={selected.includes(option.value)} /> */}
          {/* {options.icon} */}
          {option.label}
        </Button>
      ))}
    </div>
  );
}
export default ButtonGroupCheckbox ;