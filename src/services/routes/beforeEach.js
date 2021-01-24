import store from '../../store'

export default async (to, from, next) => {
    document.title = `Contacts 🚀 - ${to.name}`;
    
    // faz uma validacao de login: se ele nao esta na
    // pagina de login e nao tem token.
    // a funcao vai verificar se existe token e fazer
    // as atribuicoes. ve as actions criadas.
    // como as actions criadas ja sao promises, conseguimos
    // realizar a verificacao em apenas uma linha

    // se der tudo certo, ele vai para a pagina correspondente,
    // se nao der certo, ele volta pro login (ve o catch)

    if(to.name != 'login' && !store.getters['auth/hasToken']){
        try {
            await store.dispatch('auth/ActionCheckToken')

            next({ name: to.name })
        } catch (err) {

            next({ name: 'login'})
        }
    } else {
        // agora, se ele estiver logado e tentar acessar
        // a pagina de login, sera automaticamente
        // direcionado a pagina home
        if(!store.getters['auth/hasToken']){
            try {
                await store.dispatch('auth/ActionCheckToken')
            } catch (err) {
                
            }
        }

        if(to.name === 'login' && store.getters['auth/hasToken']){
            next({ name: 'home' })
        } else {
            next()
        }
    }
}