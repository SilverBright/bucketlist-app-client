export const makeFetchRequest = () => {
  return {
    type: 'MAKE_API_REQUEST',
  }
}

export const completeFetchRequest = () => {
   return {
     type: 'COMPLETE_API_REQUEST'
   }
}

export const failedFetchRequest = () => {
   return {
     type: 'FAILED_API_REQUEST'
   }
}