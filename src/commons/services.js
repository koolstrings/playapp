const getQuestions = ()=>{
  return fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', {
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json;charset=UTF-16'
    }
  })
};

export default getQuestions;
