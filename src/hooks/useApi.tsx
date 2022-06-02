import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-b2c.herokuapp.com/'
})


export const useApi = () => ({

    validateToken: async (token: string) => {

        const response = await api.post('/validate', { token })

        const { user } = response.data

        return user
    },
    login: async (email: string, password: string) => {

        const response = await api.post('/login', {email, password} )

        const { user, token } = response.data

        return { 
        
            user, token
    
        }

    },

    logout: async () => { 
        return true;
    },

    EditPhoto: async (formData: FormData) => {
       
        const response = await api.post('/upload', formData)
        return response;

    },

    renderPremium: async() => {
        const response = await api.get('/feed')
        return response
    },

    register: async(values: Object) => {
        const response = await api.post('/register', values)

        return response
    },

    getPerfil: async(id: String) => {
        const response = await api.get(`/user/${id}`)
        return response
    },

    editBio: async(value: String, token: String) => {

        const response = await api.post('/updatebio', {value, token})
        return response

    },

    editDataPerfil : async (values: Object, token: String) => {

        const response = await api.post('/updatePerfilData', { values, token})
        return response

    },

    addCertification: async (values: Object, token: String) => {
        const response = await api.post('/addCertification', { values, token})

        return response
    },

    updateCertification: async(id:Number, values: Object, token: String) => {

        const response = await api.post('/updateCertification', { id, values, token})
        return response 

    },

    removeCertification: async(id: Number, token: String) => {

        const response = await api.post('/removeCertification', { id, token})
        return response 
    },

    updatePersonalData: async(token: String, values: Object) => {
       
        const response = await api.post('/updatePersonalData', { token, values })

        return response
    },

    updateWhatsApp: async(token: String, num: String, option: Number) => {

        const response = await api.post('/whats', { token, num, option}) 

        return response

    },

    addEvaluetion: async(values: Object, id: String) => {
        const response = await api.post('/addEvaluetion', {values, id})
        return response
    },

    FindJob: async(job: String) => {
        const response = await api.post('/search', {job})
        return response
    },

    maintenceRelations: async(values?: Object | null, id?:String, Option?: String) => {

        const response = await api.post('/addJobRelationShip', {values, id, Option})

        return response
    }
})