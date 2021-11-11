import { useContext } from 'react'
import { AppContext } from '../provider/AppContext'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function SalarySlider(){
    const { salaryRange, setSalaryRange } = useContext(AppContext)
    const minDistance = 500

    const marks = [
        {
          value: 1000,
          label: '$1k',
        },
        {
          value: 1500,
          label: '$1.5k',
        },
        {
          value: 2000,
          label: '$2k',
        },
        {
          value: 2500,
          label: '$2.5k',
        },
        {
          value: 3000,
          label: '$3k',
        },
        {
          value: 3500,
          label: '$3.5k',
        },
        {
          value: 4000,
          label: '$4k',
        },
      ];

    function valuetext(value) {
        return `$${value}`
    }

    const handleChange = (event, newValue, activeThumb) => {
        if(!Array.isArray(newValue)){
            return
        }
        if(activeThumb === 0){
            setSalaryRange([Math.min(newValue[0], salaryRange[1] - minDistance), salaryRange[1]])
        } else {
            setSalaryRange([salaryRange[0], Math.max(newValue[1], salaryRange[0] + minDistance)])
        }
      }

    return (
      <Box sx={{ maxwidth:300, minWidth:250, textAlign:'center' }}>
        <Slider
            color = "primary"
            getAriaLabel={() => 'Salary range'}
            value={salaryRange}
            min={1000}
            max={4000}
            step={500}
            onChange={handleChange}
            getAriaValueText={valuetext}
            marks={marks}
            valueLabelDisplay="auto"
            disableSwap
          />
      </Box>
      )
}