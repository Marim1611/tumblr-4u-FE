//browser.js is going to be the place where we initialize the actual 
//mock service worker using the code from handlers.js
import { setupWorker } from 'msw'
import handlers from './handlers'

//This worker is our “fake server.”
export const worker = setupWorker(...handlers)