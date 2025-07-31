import axios from 'axios'
import { create } from 'zustand'
import data from './data.json'



export const useNews = create((set,get)=> ({
    newsMas: [],
    loading: false,
    errorStatus: null ,
    setNewsMas: async () => {
        try {
            set({loading: true, errorStatus: null})
            const newsLoading = await axios.get('https://newsapi.org/v2/everything/',
                {params:
                    {
                        q: 'tesla AND (US OR America)',
                        sortBy: 'publishedAt',
                        language: 'en',
                        pageSize: 12,
                        apiKey: '1c4c3b8a0a5f4add894e604d79aa7225'
                    }
                }
            )
            set({newsMas:newsLoading.data.articles , loading:false})
            
        } catch (error) {
            set({errorStatus:error.message, loading: false})
            alert('Error getNews')
        }
    },
    inputStatus: '',
    setInputStatus: (col)=> {
        set({inputStatus: col})
    },
    statusSecondHeader:'Новости',
    setSecondHeader: (col,noli)=> set({statusSecondHeader: col,newsPopuliriti: noli}),

    newsPopuliriti: true,

    liksStatu: true,

    dataStatus: data.articles, // Используем сразу массив articles
  
  // Добавление в избранное
  addToFavorites: (article) => {
    set((state) => ({
      dataStatus: [...state.dataStatus, article]
    }))
  },
  
  // Удаление из избранного
  removeFromFavorites: (url) => {
    set((state) => ({
      dataStatus: state.dataStatus.filter(item => item.url !== url)
    }))
  }

}))

