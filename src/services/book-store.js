export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images2.medimops.eu/product/d3f20d/M01491965975-large.jpg'
    },
    {
      id: 2,
      title: 'Release it!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://m.media-amazon.com/images/I/41q3BcHVR0S._SX342_SY445_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          // reject(new Error('Something bad has happend...'))
        resolve(this.data)
      }, 700)
    })
  }
}
