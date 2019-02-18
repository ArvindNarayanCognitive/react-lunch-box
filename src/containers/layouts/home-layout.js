import React from 'react';
import './home-layout.scss';
import WeekDay from '../../components/weekDay';
import Aux from '../../hoc/aux';
import DayItems from './../elements/DayItems';
import http from '../../http/http';

class HomeLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      active: {},
      dates: []
    };
  }

  inputRefs = [];

  setRef = (ref) => {
    this.inputRefs.push(ref);
  };

  componentDidMount() {
    http.get('/getItems').then(
      res => {
        res = res.data;
        const buffState = {...this.state};
      for(let b=0; b<7; b++) {
      const d = new Date();
      const tmp = {
        date: d.addDays(b),
        dd: d.getDate(),
        dayName: d.getDayName(),
        monthName: d.getMonthName()
      };
      if(b === 0) {
        buffState['active'] = tmp['date'];
      }
      tmp.items = res;
      buffState.dates.push(tmp);
      }
      this.setState(buffState);
      console.log(this.state);
      }
    );
  }

  selDate = (i) => {
    const buffState = {...this.state};
    buffState['active'] = buffState['dates'][i]['date'];
    this.setState(buffState);
    document.querySelector('#di' + i).scrollIntoView({behavior: "smooth", block: "center"});
  }

   render() {
     return(
      <Aux>
      <div className="container">
      <WeekDay dates={this.state.dates} 
      active={this.state.active}
      selectDate={this.selDate} />
      </div>
      <div className="banner">
        <div className="container">
        <h1 className="title">Plant based diet, no oil!</h1>
        <span className="slogan">Secondary slogan goes here.</span>
        <button className="btn btn-primary">JOIN OUR CLUB</button>
        </div>
      </div>
      <div className="container">
        {
          this.state.dates.map(
            (d, i) => {
              return(
                <DayItems id={'di'+i} key={d+i} date={d} index={i} />
              );
            }
          )
        }
      </div>
      </Aux>
     );
   }
};

export default HomeLayout;