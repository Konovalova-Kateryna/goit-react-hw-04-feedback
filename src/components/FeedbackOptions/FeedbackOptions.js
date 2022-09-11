import { PropTypes } from 'prop-types';
import { BtnList, OptionBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ option, onBtnClick }) => {
  return (
    <BtnList>
      {option.map(key => (
        <li key={key}>
          <OptionBtn type="button" onClick={() => onBtnClick(key)}>
            {key.toUpperCase()}
          </OptionBtn>
        </li>
      ))}
    </BtnList>
  );
};
FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onBtnClick: PropTypes.func,
};
export default FeedbackOptions;
