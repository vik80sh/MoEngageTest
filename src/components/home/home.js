import { Component } from "react";
import { connect } from "react-redux";
import DisplayData from "./../tables/table"
import SearchBox from './../searchbox/searchbox';
import { updateListSize,updateCurrentPage } from './../../action/user.action'
import data from "./../../data.json";
import './home.css';
import PaginationList from './../pagination/pagination';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      tableData: data.length > 9 ? data.slice(0, 10) : data.slice(0, data.length),
      isSearchPresent:false,
      searchedData:[]
    }
  }
  componentDidMount() {
    this.props.updateListSize(data.length)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.currentPage !== this.props.currentPage)
      this.updateDisplayData(nextProps.currentPage);
    if(nextProps.userSearchText !== this.props.userSearchText)
      this.handleSearch(nextProps.userSearchText)
    return true
  }
  updateDisplayData = (currentPage) => {
    let startingIndex = (currentPage - 1) * 10;
    let endingIndex = currentPage * 10;
    let paginationData = this.state.isSearchPresent?this.state.searchedData:data;
    this.setState({
      tableData: paginationData.length > endingIndex ? paginationData.slice(startingIndex, endingIndex) : paginationData.slice(startingIndex, paginationData.length)
    })
  }
  handleSearch = (userText) =>{
    let searchText = userText.toLowerCase();
    if(userText){
      let filteredData=data.filter((item) =>  item.company.toLowerCase().indexOf(searchText) !== -1 ||  item.name.toLowerCase().indexOf(searchText) !== -1)
      this.setState({
        isSearchPresent:true,
        searchedData:filteredData
      },()=>this.updateDisplayData(1))
      this.props.updateListSize(filteredData.length)
    }
    else{
      this.setState({isSearchPresent:false,searchedData:[]},()=>this.updateDisplayData(1));
      this.props.updateListSize(data.length)
    }
    
    this.props.updateCurrentPage(1);
  }
  render() {
    const { tableData } = this.state;
    return <div className="home-page-wrapper">
      <SearchBox />
      <p>search function will call after 700ms of your last keypress , I have used debounce algorithm </p>
      <p>it will search on name and company parameter, checking substring is present or not</p>
      <DisplayData tableData={tableData} />
      <PaginationList />
    </div>

  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.hybridReducer.currentPage,
    listSize: state.hybridReducer.listSize,
    userSearchText: state.hybridReducer.userSearchText
  }
}
export default connect(mapStateToProps, { updateListSize,updateCurrentPage })(Home);