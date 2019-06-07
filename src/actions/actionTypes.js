// action types specifically for fetching data from the API

// make a fetch request
export const makeFetchRequest = () => {
  return { type: 'MAKING_API_REQUEST' }
}

// finish the fetch request
export const finishFetchRequest = () => {
   return { type: 'FINISHED_API_REQUEST' }
}

// let me know if the fetch didn't worl
export const unsuccessfulFetchRequest = () => {
   return { type: 'UNSUCCESSFUL_API_REQUEST' }
}