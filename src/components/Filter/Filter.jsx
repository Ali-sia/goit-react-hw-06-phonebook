import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/actions';
import PropTypes from 'prop-types';
import { EnterLabel, EnterInput } from '../App.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <EnterLabel>
        Filter:
        <EnterInput type="text" value={filter} onChange={onChangeFilter} />
      </EnterLabel>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filtrValueid: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
