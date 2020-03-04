import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import AttensionEventList from './components/AttensionEventList';
import NewInfoList from './components/NewInfoList';
import Information from './components/Information';
import Calendar from '../Calendar/Calendar';

import styled from "styled-components";

class Top extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <TopPageContainer>
          <div className="parallax-wrapper">
            <Information /> {/* 新型コロナですよーとか */}
            <Heading /> {/* 写真 */}
          </div>
          <div className="regular-wrapper" id="regular-wrapper">
            <div className="container">
              <Calendar content={this.props.content}/>
              <TagList />
              <AttensionEventList />
              <NewInfoList content={this.props.content.news}/>
            </div>
          </div>
        </TopPageContainer>   
      </div>
     );
  }
}

const TopPageContainer = styled.div`
  width: 100%;  
  margin:0;
  padding:0;
`;
 
export default Top;
