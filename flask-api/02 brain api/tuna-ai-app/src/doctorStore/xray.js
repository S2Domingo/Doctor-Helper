import { reactive } from 'vue'

const state = reactive({
  images: [
    {
      id: 'id1',
      url: '/images/xrays/1.jpg',
      caption: '환자번호 0001',
      date: '2021/03/01',
      age: '35',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id2',
      url: '/images/xrays/2.png',
      caption: '환자번호 0002',
      date: '2021/03/01',
      age: '25',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id3',
      url: '/images/xrays/3.png',
      caption: '환자번호 0003',
      date: '2021/03/01',
      age: '75',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id4',
      url: '/images/xrays/4.png',
      caption: '환자번호 0004',
      date: '2021/03/01',
      age: '20',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id5',
      url: '/images/xrays/5.png',
      caption: '환자번호 0005',
      date: '2021/03/01',
      age: '55',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id6',
      url: '/images/xrays/6.png',
      caption: '환자번호 0006',
      date: '2021/03/01',
      age: '65',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id7',
      url: '/images/xrays/7.png',
      caption: '환자번호 0007',
      date: '2021/03/01',
      age: '25',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id8',
      url: '/images/xrays/8.png',
      caption: '환자번호 0008',
      date: '2021/03/01',
      age: '30',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id9',
      url: '/images/xrays/9.png',
      caption: '환자번호 0009',
      date: '2021/03/01',
      age: '25',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    },
    {
      id: 'id10',
      url: '/images/xrays/10.png',
      caption: '환자번호 0010',
      date: '2021/03/01',
      age: '65',
      memo: '',
      result: '',
      bookmark: false,
      detect: false,
      detect_image: ''
    }
  ],
  usePageTransition: false,
  iosBrowserSwipingBack: false
})

const getters = {
  getImage(imageId) {
    return state.images.filter(image => image.id === imageId)[0]
  },

  getIndex(imageId) {
    // return state.images.map(function(d) { return d['id']}).indexOf(imageId)
    return state.images.map(image => { return image['id']}).indexOf(imageId)
  }
}

const store = {
  state,
  getters
}

export default store