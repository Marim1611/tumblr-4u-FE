//handlers.js is going to be the place where we specify the behaviors of our mock API.
import { rest } from 'msw'

export default [
  rest.get('/message', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'it works :)'
      })
    )
  }),
  

  rest.get('/autoCompleteSearchDash', (req, res, ctx) => {
    return res(
      ctx.json({
        searchResults: [
                 [
                    "car",
                    "sports",
                    "handmade",
                    "fashion",
                    "pets",
                    "friends",
                    "travel",
                    "Art"
                  ],
                [  
                {
                  name: "Moatasem",
                  img: "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
                  coverImg:
                    "https://64.media.tumblr.com/b4d4c2744e85a37c68d2b719d8d41317/57f5781bde74b4d8-0e/s640x960/777e2d9c3327ec8b2cab9fc7cf60e0ee3a5f24a0.jpg",
                },
                {
                  name: "Sara",
                  img: "https://boostlikes-bc85.kxcdn.com/blog/wp-content/uploads/2018/04/Short-URL-Illustration.jpg",
                  coverImg:
                    "https://64.media.tumblr.com/511d1c6162b006d519670ec642d5bae9/98396c886dff04ae-83/s640x960/2c89deda482294956a9726a993138b9d430ca2d6.jpg",
                },
                {
                  name: "Merna",
                  img: "https://64.media.tumblr.com/ff6dd3486dd2fee8dff0acd0b937366a/6772020191e59538-4e/s640x960/bba93fe58569441392b77f831cad960169f11bda.jpg",
                  coverImg:
                    "https://64.media.tumblr.com/511d1c6162b006d519670ec642d5bae9/98396c886dff04ae-83/s640x960/2c89deda482294956a9726a993138b9d430ca2d6.jpg",
                },
               ]  ,
        
            [   
              {
                name: "crafts",
                img: "https://64.media.tumblr.com/6eb8d7c15856ffa76b0a6b5bdb35f2de/5cf38a736b98badf-f9/s640x960/0762f14581a4a9bf7599fc7899b35cd909878bde.jpg",
              },
              {
                name: "embroidery",
                img: "https://64.media.tumblr.com/497a6f202f642d914081723f42b3688c/tumblr_pocj2z2m6F1sst4ed_1280.jpg",
              },
              {
                name: "crochet",
                img: "https://64.media.tumblr.com/b9a38eb82f59f226df54f746e9ce1193/03dd693220f8205b-41/s640x960/54f78a4ffa63f468c6648ac14f0921b3c9fccb9a.jpg",
              },
                    ]  
           
        ],
      })
    )
  }),
  

]