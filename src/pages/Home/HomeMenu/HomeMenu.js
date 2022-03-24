import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;

export default class Demo extends React.PureComponent {


    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {
        
    }



    render() {
        console.log(this.props,'props123');
        const { tabPosition } = this.state;
        return (
            <>
                <Tabs tabPosition={tabPosition}>
                    <TabPane tab={<img src='https://picsum.photos/200' className='rounded-full' width="50"></img>} key="1">
                        Content of Tab 1
                    </TabPane>
                    <TabPane tab={<img src='https://picsum.photos/200' className='rounded-full' width="50"></img>} key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab={<img src='https://picsum.photos/200' className='rounded-full' width="50"></img>} key="3">
                        Content of Tab 3
                    </TabPane>
                </Tabs>
            </>
        );
    }
}
