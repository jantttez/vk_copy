# если ты будешь открытвать репозиторий обязательно все секреты в env файл вынеси

### react ts graphql apollo react-hook-form firebase, react-router-dom, zustand, chakraUI

блядь если хочешь делать динамическую пагинацию делай ее с самого начала

я так и не понял нормально как переносить состояние юзера между страницами( если не брать куки, сторейджи либо бэкенд сессии)

# заметки

можно очень круто рефетчить параметры в gql с новыми параметрами, допустим вот так

```typescript
const [DELETE_POST, { loading, error }] = useMutation(DELETE_POST_BY_ID, {
  variables: { id: post.id },
  refetchQueries: [
    {
      query: GET_POSTS,
      variables: {},
    },
    {
      query: GET_USER_POSTS,
      variables: {
        id: id,
      },
    },
  ],
});
```

вот так допустим жэто пиздец круто если если не нуджын параметры то
моженог просто вбубенить в листе назщвания самих запросов в ""
