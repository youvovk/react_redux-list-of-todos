import React from 'react';

import { store } from './store/redux';

class App extends React.Component {
  state = {
    data: [],
  };

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.getData);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getData = () => {
    this.setState({
      data: [...store.getState().data],
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="mech"><img className="mech-img" src="./mech.png" alt="" /></div>
        <section className="cards">
          <div className="card">
            <div className="card-name">
              <p className="title">Income</p>
              <button type="button" className="title__button blue">Monthly</button>
            </div>
            <div className="card-counted">
              <p className="card-counted__number">40 886,200</p>
              <div className="card-counted__info">
                <p>Total Income</p>
                <div className="card-percent">
                  <p><span className="percent_blue">98%</span></p>
                  <img src="./light.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-name">
              <p className="title">Orders</p>
              <button type="button" className="title__button ocean">Annual</button>
            </div>
            <div className="card-counted">
              <p className="card-counted__number">275,800</p>
              <div className="card-counted__info">
                <p>New orders</p>
                <div className="card-percent">
                  <p><span className="percent_ocean">20%</span></p>
                  <img src="./arrow-ocean.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-name">
              <p className="title">Visits</p>
              <button type="button" className="title__button green">Today</button>
            </div>
            <div className="card-counted">
              <p className="card-counted__number">106,120</p>
              <div className="card-counted__info">
                <p>New visits</p>
                <div className="card-percent">
                  <p><span className="percent_green">44%</span></p>
                  <img src="./arrow-green.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-name">
              <p className="title">User activity</p>
              <button type="button" className="title__button red">Low value</button>
            </div>
            <div className="card-counted">
              <p className="card-counted__number">80,600</p>
              <div className="card-counted__info">
                <p>In first month</p>
                <div className="card-percent">
                  <p><span className="percent_red">38%</span></p>
                  <img src="./arrow-red.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="orders">
          <div className="orders-titels">
            <p className="title">Orders</p>
            <div className="filters">
              <button type="button" className="filter filter__today">Today</button>
              <button type="button" className="filter filter_monthly">Monthly</button>
              <button type="button" className="filter filter__annual">Annual</button>
            </div>
          </div>
          <div className="orders-main">
            <div className="orders-img" />
            <div className="orders-filters">
              <div className="orders-filters__info">
                <div className="filter__info">
                  <p className="filters-number">2.346</p>
                  <div className="filter__info-text filter__info-text-first">
                    <p>Total orders in period</p>
                    <div className="filter__percent">
                      <p>48%</p>
                      <img src="./arrow-green.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="filter__info">
                  <p className="filters-number">4.422</p>
                  <div className="filter__info-text  filter__info-text-second">
                    <p>Orders in last month</p>
                    <div className="filter__percent">
                      <p>60%</p>
                      <img src="./arrow-green-down.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="filter__info">
                  <p className="filters-number">9,180</p>
                  <div className="filter__info-text filter__info-text-third">
                    <p>Monthly income from orders</p>
                    <div className="filter__percent">
                      <p>22%</p>
                      <img src="./light-green.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="projects">
          <div className="project-left">
            <section className="messages">
              <div className="messages-title">
                <p className="title">Messages</p>
                <div className="icons">
                  <img src="./setting.png" alt="icon" />
                </div>
              </div>
            </section>

            <div className="new-messages">
              <div className="new-message__icon">
                <img src="./message.png" alt="icon" />
                <p className="new-message">New messages</p>
              </div>
              <p className="new-message__text">You have 22 new  messages and 16 waiting in draft folder.</p>
            </div>

            <section className="messages messages-list">
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Monica Smith</p>
                  <p><span className="percent_green">1m ago</span></p>
                </div>
                <p className="massage-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <p className="author-data">Today 5:60 pm - 12.06.2014</p>
              </div>
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Jogn Angel</p>
                  <p>2m ago</p>
                </div>
                <p className="massage-text">There are many variations of passages of Lorem Ipsum available</p>
                <p className="author-data">Today 2:23 pm - 11.06.2014</p>
              </div>
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Jesica Ocean</p>
                  <p>5m ago</p>
                </div>
                <p className="massage-text">Contrary to popular belief. Lorem Ipsum</p>
                <p className="author-data">Today 1:00 pm - 08.06.2014</p>
              </div>
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Monica Jackson</p>
                  <p>5m ago</p>
                </div>
                <p className="massage-text">The generated Lorem Ipsum is therefore</p>
                <p className="author-data">Yesterday 8:48 pm - 10.06.2014</p>
              </div>
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Anna Legend</p>
                  <p>1m ago</p>
                </div>
                <p className="massage-text">All the Lorem Ipsum generators on the Internet tend to repeat</p>
                <p className="author-data">Yesterday 8:48 pm - 10.06.2014</p>
              </div>
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Damian Nowak</p>
                  <p>5m ago</p>
                </div>
                <p className="massage-text">The standard chunk of Lorem Ipsum used</p>
                <p className="author-data">Yesterday 8:48 pm - 10.06.2014</p>
              </div>
              <div className="massage-info">
                <div className="author">
                  <p className="author-name">Garry Smith</p>
                  <p>5m ago</p>
                </div>
                <p className="massage-text">200 Latin words, combined with a handful</p>
                <p className="author-data">Yesterday 8:48 pm - 10.06.2014</p>
              </div>
            </section>
          </div>

          <div className="project-right">
            <div className="project-right__top">
              <section className="user-project-list">
                <div className="user-project-list__title">
                  <p className="title">User project list</p>
                  <div className="icons">
                    <img src="./setting.png" alt="icon" />
                  </div>
                </div>

                <div className="project-tabs">
                  <div className="project-tabs__titles">
                    <p>Status</p>
                    <p>Date</p>
                    <p>User</p>
                    <p>Value</p>
                  </div>

                  <div className="project-info">
                    <p>Pending...</p>
                    <div className="project-info__text">
                      <img src="./clocks.png" alt="icon" />
                      <p>11:20pm</p>
                    </div>
                    <p>Samantha</p>
                    <div className="project-info__text">
                      <img src="./arrow-green.png" alt="icon" />
                      <p><span className="percent_green">24%</span></p>
                    </div>
                  </div>
                  <div className="project-info">
                    <p className="canceled">Canceled</p>
                    <div className="project-info__text">
                      <img src="./clocks.png" alt="icon" />
                      <p>10:40pm</p>
                    </div>
                    <p className="project-info__text-indent_name">Monica</p>
                    <div className="project-info__text">
                      <img src="./arrow-green.png" alt="icon" />
                      <span className="percent_green">66%</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <p>Pending...</p>
                    <div className="project-info__text">
                      <img src="./clocks.png" alt="icon" />
                      <p>01:30pm</p>
                    </div>
                    <p className="project-info__text-indent">John</p>
                    <div className="project-info__text">
                      <img src="./arrow-green.png" alt="icon" />
                      <span className="percent_green">54%</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <p>Pending...</p>
                    <div className="project-info__text">
                      <img src="./clocks.png" alt="icon" />
                      <p>02:20pm</p>
                    </div>
                    <p className="project-info__text-indent_name">Agnes</p>
                    <div className="project-info__text">
                      <img src="./arrow-green.png" alt="icon" />
                      <span className="percent_green">12%</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="completed">Completei</div>
                    <div className="project-info__text">
                      <img src="./clocks.png" alt="icon" />
                      <p>04:10pm</p>
                    </div>
                    <p className="project-info__text-indent_name">Amelia</p>
                    <div className="project-info__text">
                      <img src="./arrow-green.png" alt="icon" />
                      <span className="percent_green">66%</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <p>Pending...</p>
                    <div className="project-info__text">
                      <img src="./clocks.png" alt="icon" />
                      <p>12:08pm</p>
                    </div>
                    <p className="project-info__text-indent_damian">Damian</p>
                    <div className="project-info__text">
                      <img src="./arrow-green.png" alt="icon" />
                      <span className="percent_green">23$</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="small-todo-list">
                <div className="small-todo-list-title">
                  <p className="title">Small todo list</p>
                  <div className="icons">
                    <img src="./setting.png" alt="icon" />
                  </div>
                </div>

                <div className="todos">
                  <div className="todo">
                    <img className="todo-check" src="./checked.png" alt="" />
                    <p className="todo-text text-decoration">Buy a milk</p>
                  </div>
                  <div className="todo">
                    <img className="todo-check" src="./unchecked.png" alt="" />
                    <p className="todo-text">Go to shop find some products.</p>
                  </div>
                  <div className="todo">
                    <img className="todo-check" src="./unchecked.png" alt="" />
                    <p className="todo-text text-decoration">Send documents to Mike</p>
                    <div className="todo-time">
                      <img className="green-clock" src="./clock-green.png" alt="icon" />
                      <p className="time-text">1 mins</p>
                    </div>
                  </div>
                  <div className="todo">
                    <img className="todo-check" src="./checked.png" alt="" />
                    <p className="todo-text">Go to the doctor dr Smith</p>
                  </div>
                  <div className="todo">
                    <img className="todo-check" src="./unchecked.png" alt="" />
                    <p className="todo-text">Plan vacation</p>
                  </div>
                  <div className="todo">
                    <img className="todo-check" src="./unchecked.png" alt="" />
                    <p className="todo-text">Create new stuff</p>
                  </div>
                  <div className="todo">
                    <img className="todo-check" src="./unchecked.png" alt="" />
                    <p className="todo-text">Call to Anna for dinner</p>
                  </div>
                </div>
              </section>
            </div>

            <section className="transactions">
              <div className="transactions-title">
                <p className="title">Transactions worldwide</p>
                <div className="icons">
                  <img src="./setting.png" alt="icon" />
                </div>
              </div>

              <div className="transactions-bottom">
                <div className="transactions-tabs">
                  <div className="transactions-tabs__titles">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text-decor transactions-text_indent">No.</p>
                      <p className="transactions-text-decor">Transition</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text-decor transactions-text_indent-second">Date</p>
                      <p className="transactions-text-decor">Amount</p>
                    </div>
                  </div>

                  <div className="transactions-info">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text_indent">1</p>
                      <p>Security doors</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text_indent-second">16 Jun 2014</p>
                      <div className="price">
                        <p className="price-text">$483.00</p> 
                      </div>
                    </div>
                  </div>
                  <div className="transactions-info">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text_indent">2</p>
                      <p>Wardrobes</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text_indent-second">10 Jun 2014</p>
                      <div className="price">
                        <p className="price-text">$327.00</p> 
                      </div>
                    </div>
                  </div>
                  <div className="transactions-info">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text_indent">3</p>
                      <p>Set of tools</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text_indent-second">12 Jun 2014</p>
                      <div className="price price-text_orange">
                        <p className="price-text">$125.00</p> 
                      </div>
                    </div>
                  </div>
                  <div className="transactions-info">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text_indent">4</p>
                      <p>Panoramic pictures</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text_indent-second">22 Jun 2014</p>
                      <div className="price">
                        <p className="price-text">$344.00</p> 
                      </div>
                    </div>
                  </div>
                  <div className="transactions-info">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text_indent">5</p>
                      <p>Phones</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text_indent-second">24 Jun 2014</p>
                      <div className="price">
                        <p className="price-text">$235.00</p> 
                      </div>
                    </div>
                  </div>
                  <div className="transactions-info">
                    <div className="transactions-tabs__first">
                      <p className="transactions-text_indent">6</p>
                      <p>Monitors</p>
                    </div>
                    <div className="transactions-tabs__second">
                      <p className="transactions-text_indent-second">26 Jun 2014</p>
                      <div className="price">
                        <p className="price-text">$100.00</p> 
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transactions-img" />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
