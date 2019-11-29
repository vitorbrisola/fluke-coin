# Fluke Coin

Fluke Coin is an ios and android application build with react-native. This application makes easy the tracking of cryptocurrency price changes.
> __[PT-BR]__ 
> Fluke Coin é uma aplicação android e ios construída com react-native. Essa aplicação tem a intenção  de facilitar o acompanhamento de mudanças de preços em diferentes cryptomoedas.

## UI and UX Design

The intent of this application is to make easy the tracking of users preferred cryptocurrencys price. Therefore, some users action can be inferred from this goal:
- Easy visualization of choosed cryptocurrency price and change
- Easy finding and suggestions of new cryptocurrencys 
> __[PT-BR]__ 
> A intenção desta aplicação é facilitar o acompanhamento de mudanças no preço de cryptomoedas escolhidas pelo usuário. Portanto, podemos inferir algumas preferências do usuário com base nesse objetivo:
>- Fácil vizualização da muança de preço e preço atual de cryptomoedas escolhidas pelo usuário.
>- Fácil busca e sugestões de novas cryptomoedas.




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
    - [ ] Build registration logic.
    - [ ] Double check user password.
- [x] Build _sign in_ screen.
    - [ ] Build user auth logic.
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
>   - [ ] Repassar info de usuario com proxima tela.
>   - [ ] Construir resposta de checagem dobrada de senha.
>   - [ ] Resolver __bug__ de persistencia de dados validos, quando sao invalidos
>   - [ ] Menssagens de dados invalidos
>   - [ ] Checkar validade/existencia de nome de usuario
>- [x] Construir Tela de Autenticação.
>   - [ ] Construir Lógica de autenticação.
>- [ ] Salvar Moedas personalizadas por usuário.
>- [ ] Adicionar Notificações
>- [ ] Adicionar Informações de usuário

### Currency Display

### User Screen Navigation

### Cryptocompare API Management

### User Data Management
The user management consist of managing user credentials( sign in and sing up), personal data and tracking currencies information. 
> __Note:__ As this is not an aplication with real use safety concerns( except for user experience, that is the main priority) user data will be stored locally with the usage of react native __AsyncStorage__ for data persistence.
User credentials will consist of an __user name__ and an __password__, but user personal data will also contain user __email__.
>> __Warning:__ The user data local storage by __AsyncStorage__ will have some undesired consequences, as credentials and user data can be lost.

#### Credential Data Storage
As __AsyncStorage__ is an key-value database, credentials informations are stored in a key-value relation, where the __user name__ plus an __local storage key__ are joined as an string an stored as the __key__ and user __password__ and __email__ are joined by an string and store as the __value__.

