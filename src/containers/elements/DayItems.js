import React from 'react';
import './DayItems.scss';

class DayItems extends React.Component {

  constructor() {
    super();

    this.state = {
      activeTab: 1,
      items: ['LUNCH', 'DINNER']
    };
  }

  selItem = (i) => {
    this.setState({activeTab: i+1});
  }

  render() {
    return(
      <div className="DayItemCntnr" id={this.props.id}>
        <h2 className="dayName">
          {this.props.date.dayName + ', ' + this.props.date.monthName + ' ' + this.props.date.dd}
        </h2>
        <div className="subDiv">
          <div className="btn-cntnr">
            {
              this.state.items.map((el, i) => {
                return(
                  <button key ={el+i} onClick={() => {this.selItem(i)}}
                    className={this.state.activeTab === i+1 ? 
                      'btn btn-primary btn-round' : 'btn  btn-round'}>
                        {el}
                  </button>
                );
              })
            }
          </div>
          {
            this.props.date.date.toDateString() === new Date().toDateString() ? 
            <span className="info">ORDER DEADLINE: ORDER UNTIL 12PM</span> : null
          }
        </div>
      </div>
    );
  }
}

export default DayItems;