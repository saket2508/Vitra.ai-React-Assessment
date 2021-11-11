import { useContext } from 'react'
import { HeadingLarge, 
  BodyText,
  ItemGridContainer, 
  CardWrapper, 
  CardHeading, 
  UserCardList,
  SliderMenuContainer,
  MainContainer,
  SliderContainer
} from '../styles/index'
import SalarySlider from '../components/SalarySlider'
import { Avatar } from '@mui/material'
import { AppContext } from '../provider/AppContext'
import { Link } from 'react-router-dom'

export default function Home() {

    const { users, salaryRange } = useContext(AppContext)

    function stringToColor(string) {
        let hash = 0
        let i
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash)
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2)
        }  
        return color
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
            margin:'auto'
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        }
      }

      let usersFilteredBySalary = users.filter(obj => obj.balanceNum >= salaryRange[0] && obj.balanceNum <= salaryRange[1])

      return (
        <div className="Home">
            <HeadingLarge>
              List of Employees
              <span style={{paddingLeft: '0.2rem', color:'#52525B', fontSize: '1.4rem'}}>({usersFilteredBySalary.length})</span>
            </HeadingLarge>
            <div style={{marginTop:'0.8rem', textAlign:'center'}}>
              <Link style={{color:'#52525B', fontWeight:'400', textDecoration:'underline'}} to ="/friends">
                See Page Two
              </Link>
            </div>
          <SliderMenuContainer>
            <SliderContainer>
              <BodyText>Filter employees based on their balance</BodyText>
                <SalarySlider/>
              </SliderContainer>
              </SliderMenuContainer>
              <MainContainer>
                <ItemGridContainer>
                  {usersFilteredBySalary.map((obj) => {
                    return(
                      <CardWrapper key = {obj.id}>
                        <UserCardList>
                          <Avatar {...stringAvatar(obj.name)}/>
                          <CardHeading>{obj.name}</CardHeading>
                          <li>{obj.balance}</li>
                          <li>{obj.email}</li>
                          <li>{obj.phone}</li>
                          <li>{obj.friends.length} friends</li>
                        </UserCardList>
                      </CardWrapper>
                    )
                  })}
                </ItemGridContainer>
              </MainContainer>
          </div>
      );
}

