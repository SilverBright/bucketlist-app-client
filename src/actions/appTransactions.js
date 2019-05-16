export const makeFetchRequest = () => {
  return {
    type: 'MAKING_API_REQUEST',
  }
}

export const finishFetchRequest = () => {
   return {
     type: 'FINISHED_API_REQUEST'
   }
}

export const unsuccessfulFetchRequest = () => {
   return {
     type: 'UNSUCCESSFUL_API_REQUEST'
   }
}