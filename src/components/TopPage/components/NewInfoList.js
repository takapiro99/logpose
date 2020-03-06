import React, { Component } from 'react';
import styled from 'styled-components';
import NewsCard from "../../NewsCard";


const topBarText = "新着情報";
class NewInfoList extends Component{
  render(){
    return (
      <div>
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
        <TopBarWrapper>
          <TopBarTextContainer>
            {topBarText}
          </TopBarTextContainer>
        </TopBarWrapper>
      <ListContainer>
        {
          this.props.content.map((item) => ( 
            <List key={item.sys.id}><NewsCard publishDate={item.fields.publishDate}
                                        newsTitle={item.fields.title}
                                        newsBody={item.fields.body}/></List>
       ))
    }
      </ListContainer>
      <Button>全てのお知らせを見る</Button>
      </div>
    );  
  }
}

const TopBarWrapper = styled.div`
  background: #707070;
  width: 100%;
  height: 43px;
`;

const TopBarTextContainer = styled.div`
  margin-left:10px;
  font-size:19px;
  color: #FFFFFF;
  line-height:43px;
`;
const List = styled.li`
  font-size:12px;
`;
const Button = styled.div`
  width:90%;
  background-color:silver;
  margin:5px auto;
  height:30px;
  line-height:30px;
  text-align:center;
  border-radius:5px;
  color:white;
`;
const ListContainer = styled.div`
  list-style:none;
`;


export default NewInfoList;
