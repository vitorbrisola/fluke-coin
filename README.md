# Fluke Coin

Fluke Coin is an ios and android application build with react-native. This application makes easy the tracking of cryptocurrency price changes.
>__Warning:__ The aplication usage will require the user to have and set an cryptocompare API key. The api key can be set under __FlukeCoin/src/services/cryptocompare/connect.js__.

> __[PT-BR]__ 
> Fluke Coin é uma aplicação android e ios construída com react-native. Essa aplicação tem a intenção  de facilitar o acompanhamento de mudanças de preços em diferentes cryptomoedas.
>> __Atenção:__ Antes de iniciar a aplicação é necessário obter um chave para a API cryptocompare. Apos obter uma chave o usuário pode mudar-la em __FlukeCoin/src/services/cryptocompare/connect.js__.

## UI and UX Design

The intent of this application is to make easy the tracking of users preferred cryptocurrencys price. Therefore, some users action can be inferred from this goal:
- Easy visualization of choosed cryptocurrency price and change
- Easy finding and suggestions of new cryptocurrencys 
> __[PT-BR]__ 
> A intenção desta aplicação é facilitar o acompanhamento de mudanças no preço de cryptomoedas escolhidas pelo usuário. Portanto, podemos inferir algumas preferências do usuário com base nesse objetivo:
>- Fácil vizualização da muança de preço e preço atual de cryptomoedas escolhidas pelo usuário.
>- Fácil busca e sugestões de novas cryptomoedas.

### UI flow
The image bellow shows the inital design for the screen flow. Besides, the login and sign up screens, there are only two main screens:
- __Home Screen:__ Is were  the user can see information about the cryptocurrencies he chooses to follow.
- __Explorer Screen:__ Is were the user can find and search for new coins to follow.

![Screen flow](/imgs/flukeCoin.png)


## Development Process
This section is dedicated for describing the app planning and development process.
>__[PT-BR]__ 
>Essa secção é dedicada a documentar o processo de planejamento de desenvolvimento do app.

### To-Do List
This is an list of the main tasks and components that were crucial in the development process.
- [x] Init Project (Git and React-native).
- [x] Build initial _Home_ screen template.
- [x] Build initial _Explorer_ screen template.
- [x] Connect screen with __react navigation__.
    - [x] Build _Bottom Tab_ for screen navigation.
    - [x] Use __Tab Navigator__
    - [ ] Use __Font Awesome__
- [x] Connect to __cryptocompare API__ using __Axios__.
    - [ ] Build data local cache.
    - [ ] Use __AsyncStorage__
- [x] Build _sign up_ screen.
    - [x] Build registration logic.
    - [ ] Double check user password.
- [x] Build _sign in_ screen.
    - [x] Build user auth logic.
- [ ] Save user currency options information.
- [ ] Add Notifications.
- [ ] Add user data to _upper tab_.
>__[PT-BR]__ 
> Essa é uma lista com as pricipais tarefas e componentes essenciais no processo de desenvolvimento.
>- [x] Inicializar Projeto (Git e React-native).
>- [x] Construir Template Inicial da tela _Home_.
>- [x] Construir Template padrão da tela _Explorer_.
>- [x] Conectar telas com react navigator.
>   - [x] Construir _Bottom Tab_ para navegar entre telas.
>   - [x] Usar __Tab Navigator__
>   - [ ] Usar __Font Awesome__
>- [x] Conectar com API.
>   - [ ] Construir Cache de dados.
>- [x] Construir Tela de Cadastro.
>   - [x] Construir lógica de registro.
>   - [x] Repassar info de usuario com proxima tela.
>   - [ ] Construir resposta de checagem dobrada de senha.
>   - [ ] Resolver __bug__ de persistencia de dados validos, quando sao invalidos
>   - [ ] Menssagens de dados invalidos
>   - [x] Checkar validade/existencia de nome de usuario
>- [x] Construir Tela de Autenticação.
>   - [x] Construir Lógica de autenticação.
>   - [x] Melhorar Logica de Authenticação.
>   - [ ] Incluir aviso de dados invalidos.
>- [x] Salvar informações de usuário logado.
>   - [x] Display de informações de usuário na tela de Perfil.
>- [ ] Salvar Moedas personalizadas por usuário.
>- [ ] Adicionar Notificações
>- [ ] Adicionar Informações de usuário


### Cryptocompare API Management

### User Data Management
The user management consist of managing user credentials( sign in and sing up), personal data and tracking currencies information. 
> __Note:__ As this is not an aplication with real use safety concerns( except for user experience, that is the main priority) user data will be stored locally with the usage of react native __AsyncStorage__ for data persistence.
User credentials will consist of an __user name__ and an __password__, but user personal data will also contain user __email__.
>> __Warning:__ The user data local storage by __AsyncStorage__ will have some undesired consequences, as credentials and user data can be lost.

#### Credential Data Storage
As __AsyncStorage__ is an key-value database, credentials informations are stored in a key-value relation, where the __user name__ plus an __local storage key__ are joined as an string an stored as the __key__ and user __password__ and __email__ are joined by an string and store as the __value__.

#### User Register
>__[PT-BR]__ O registro de dados de usuários é feito localmente, a lógica de entrada e fluxo de informações de registro podem ser encontrados em _FlukeCoin/src/pages/signUp.js_.As informações registradas são simples: nome de usuário, email e senha. Ja a lógica de registro de dados do usuário pode ser encontrada em _FlukeCoin/src/user/singIn.js_
Na __versão atual__ a aplicação verifica se todos os campos estão preenchidos antes de enviar as informações para registro local. Ao serem enviadas para o registro em
>>__Limitações:__ Na versão atual a aplicação ainda apresenta alguma limitações:
>>- Não é realizada a verificação de confirmação de senha.
>>- Não é verificado a existencia de usuários com dados semelhantes já existentes no sistema.

