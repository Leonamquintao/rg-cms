# RG CMS (RN 60.+)
Projeto destinado para inicializar de forma mais facil projetos mobile.

## ORIENTAÇÕES GERAIS
* Utilizar identação com 2 tabs;
* Utilizar `single coutes` para strings ou afins.
* Paginas serem criadas como classe `export default class MyClass extends Component { ... } `;
* Componentes fica à critério do dev, entretanto, recomenda-se componentes funcionais `stateless`;

### COMPONENTES PRINCIPAIS (libs)

Lib responsável pela navegação no App: 
[React-native Navigation 3.0](https://reactnavigation.org/)
[React-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
[Font Awesome ref](https://fontawesome.com/v4.7.0/icons/)

### LIBS RECOMENDADAS OU NECESSÁRIAS:
`npm install react-native-gesture-handler react-native-reanimated`;
`npm install redux react-redux redux-persist`;

### Android
Anter de rodar o projeto no ANDROID pode ser necessário incluir um arquivo
`local.properties`com o path do `ANDROID_SDK_ROOT`, no caso do do PC utilizado
(mackMini) `sdk.dir = /Users/USER_NAME/Library/Android/sdk`.

### IOS
Antes de rodar o projeto para IOS, é necessário entrar no diretório do mesmo `cd ios`
e rodar o comando `pod install`. esse comando instalará as dependencias do projeto para
objective-C utilizando o [CocoaPods](https://cocoapods.org/)

A utilização da lib `react-native-vector-icons` pode ocasionar em um conflito de dependências
no que diz respeito a forma de build, para resolver essa situação basta abrir o projeto no `xcode` >
`MyProject.workspace > File > Workspace settings... > Build System`para `Legacy Build System`.