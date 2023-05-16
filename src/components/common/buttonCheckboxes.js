import { Checkbox, Button } from "@material-ui/core";
import { FcSalesPerformance } from "react-icons/fc";
import { GiSpookyHouse } from "react-icons/gi";
import { SiTerraform } from "react-icons/si";
import { BsHouseDoorFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const ButtonGroupCheckbox = ({ options, selected, onChange }) => {
  const [t, i18n] = useTranslation("common");
  const dir = i18n.dir();
  return (
    <div>
      {options.map((option) => (
        <Button
          size="large"
          className="mr-2 mb-2"
          style={{ gap: "7px !important" }}
          key={option.value}
          variant={selected.includes(option.value) ? "contained" : "outlined"}
          color={selected.includes(option.value) ? "primary" : "default"}
          onClick={() => onChange(option.value)}
          startIcon={option.icon}
          sx={{ ml: 2 }}
        >
          {/* <Checkbox checked={selected.includes(option.value)} /> */}
          {/* {options.icon} */}
          {option.label}
        </Button>
      ))}
    </div>
  );
};
export default ButtonGroupCheckbox;
