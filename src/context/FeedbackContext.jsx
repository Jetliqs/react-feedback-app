import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 5,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 7,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 9,
    },
  ]);

  const [selectedFeedback, setSelectedFeedback] = useState({
    feedback: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const generateRandomID = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const id = Math.floor(Math.random() * (max - min)) + min;
    return id;
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = generateRandomID(feedbacks.length + 1, 1000000);
    setFeedback([newFeedback, ...feedbacks]);
    console.log(newFeedback);
  };

  // const editFeedback = (updatedFeedback) => {
  //   setFeedback(updatedFeedback);
  // };

  const updateFeedback = (id, updFeedback) => {
    setFeedback(
      feedbacks.map((feedback) => {
        // we use the spread operator to replace the text and the rating
        // of the selected feedback
        //
        // obj1 = { id: 1, text: "This is feedback item 1", rating: 5 }
        // obj2 = { id: 1, text: "Modified feedback", rating: 10 }
        // obj3 = {...obj1, ...obj2}
        // obj3 = { id: 1, text: "Modified feedback", rating: 10 }

        if (feedback.id === id) {
          console.log(feedback);
          console.log(updFeedback);
          console.log({ ...feedback, ...updFeedback });
          return { ...feedback, ...updFeedback };
        } else {
          return feedback;
        }
      })
    );
  };

  const selectFeedback = (feedback) => {
    setSelectedFeedback({
      feedback,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        selectedFeedback,

        deleteFeedback,
        addFeedback,
        selectFeedback,
        setSelectedFeedback,
        setFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
