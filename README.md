https://danilleqman.github.io/github-org-repos/

SPA для отображения списка репозиториев и информации по какой-либо компании на Github. Предусмотрено поле ввода названия компании, лоадер загрузки при запросе, отображение списка репозиториев, реализована пагинация.

В список выводимой информации включены:
- Название репозитория
- URL репозитория 
- Количество форков
- Количество watchers
- Количество звезд у репозитория (stargazers).



Стек: TypeScript, React, Redux, axios для выполнения запросов к API, redux-saga для side-эффектов. Используется material-ui для компонентов.

Структура файлов
```javascript
api/
 api.js             // Все запросы к https://api.github.com
components/
 orgReposPage/
  CardRepos.tsx     // Карточки репозиториев 
  InputOrg.tsx      // Тектовае поле для ввода организации и вывода информации
pages/
 OrgRreposPage.tsx  // Основная страница 
redux/ 
 loading/            
  index.ts          // Состояние для лоадера    
  selectors.ts      // Селекторы
 org/
  index.ts          // Состояние для организации 
  sagas.ts          // Side-эффекты
  selectors.ts      // Селекторы
 sagas.ts           // Root для sagas
 store.ts           // Root для reducers
 ```
