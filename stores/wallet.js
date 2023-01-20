import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
    state: ()=> {
        return {
            balance: null
        }
    },

    actions: {
        loadBalance(){
            const { data } = useFetch("http://localhost:8000/balance");
            console.log(data.value);
            this.balance = data.value;
        }
    },
});