import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/SectionTitle';
import { SectionBox } from './Section/SectionTitle.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = ['good', 'neutral', 'bad'];

  const handleClick = event => {
    if (event === 'good') {
      return setGood(state => state + 1);
    }
    if (event === 'neutral') {
      return setNeutral(state => state + 1);
    }
    if (event === 'bad') {
      return setBad(state => state + 1);
    }
  };

  const total = good + neutral + bad;
  const persentage = Math.round((good / total) * 100);

  console.log(feedback);
  console.log(useState);
  console.log(total, persentage);
  return (
    <SectionBox>
      <Section
        title={'Please leave feedback'}
        children={
          <FeedbackOptions option={feedback} onBtnClick={handleClick} />
        }
      />
      <Section
        title={'Statistics'}
        children={
          total === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              title={'Statistics'}
              total={total}
              persentage={persentage}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          )
        }
      />

      <GlobalStyle />
    </SectionBox>
  );
};

export default App;
