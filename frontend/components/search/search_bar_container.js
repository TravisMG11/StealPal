import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { updateSearchTerm, updateSearchSize, updateSearchType } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchSize: state.searchSize,
  searchType: state.searchType
});

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerm: searchTerm => dispatch(updateSearchTerm(searchTerm)),
    updateSearchSize: searchSize => dispatch(updateSearchSize(searchSize)),
    updateSearchType: searchType => dispatch(updateSearchType(searchType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
