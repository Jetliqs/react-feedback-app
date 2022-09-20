import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedback] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState({
    feedback: {},
    edit: false,
  });

  // updating the data on start
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Fetching the data from the json mock server
  const fetchFeedbacks = async () => {
    const response = await fetch(`/feedbacks?_sort=id?_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //Delete the selected feedback from the json server
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`feedbacks/${id}`, { method: 'DELETE' });
      setFeedback(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  // Adding the feedback to the json server
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedbacks]);
    console.log(data);
  };

  // const editFeedback = (updatedFeedback) => {
  //   setFeedback(updatedFeedback);
  // };

  const updateFeedback = async (id, updFeedback) => {
    const response = await fetch(`feedbacks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updFeedback),
    });

    const data = await response.json();
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
          console.log(data);
          console.log({ ...feedback, ...data });
          return { ...feedback, ...data };
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
        isLoading,
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
