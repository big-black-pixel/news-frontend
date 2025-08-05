import axios from 'axios'
import { create } from 'zustand'




export const useNews = create((set)=> ({
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
                        language: 'ru',
                        pageSize: 19,
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
    setSecondHeader: (col, noli)=> set({statusSecondHeader: col,newsPopuliriti: noli}),

    newsPopuliriti: true,

    favorites:[],
    
    addToFavorites: async (articles) => {   // Добавление
        try {
            const response = await axios.post('https://687500d2dd06792b9c9643cc.mockapi.io/favorites1', {
                source: articles.source,
                title: articles.title,
                url: articles.url,
                publishedAt: articles.publishedAt,
                addedAt: new Date().toISOString()
            });
            
            set(state => ({  favorites: [...state.favorites, response.data],loading: false }));

        } catch (error) {
            set({errorStatus:error.message, loading: false})
            console.error("Ошибка в Добавлении  favorits:", error);
        }
    },
    deleteToFavorites: async (id) => {  // Удаление
        try {
            set({loading: true, errorStatus: null})
            await axios.delete(`https://687500d2dd06792b9c9643cc.mockapi.io/favorites1/${id}` )
            set((state) => ({ favorites: state.favorites.filter(em => em.id !== id) }));
            set({loading: false})

        } catch (error) {
            set({errorStatus:error.message, loading: false})
            console.error("Ошибка в удалении favorits:", error);
        }
    },
    getToFavorites: async () => {   // Загрузка всех favorits
        try {
            set({loading: true, errorStatus: null})
            const gats = await axios.get(`https://687500d2dd06792b9c9643cc.mockapi.io/favorites1` )

            set({ favorites: gats.data });
            set({loading: false})

        } catch (error) {
            set({errorStatus:error.message, loading: false})
            console.error("Ошибка загрузки favorits:", error);
        }
    }

}))

