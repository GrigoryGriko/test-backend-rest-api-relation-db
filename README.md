# test-backend

Бэкенд для тестового задания

# work with

1. установите npm модули командой `npm i`;
2. запустите коммандой `npm run dev`.

# Вводная информация

Данный проект имитирует работу сервера. Настроен эндпоинт get - '/objects'.

Ваша задачи:
1. Подключиться к Базе данных с помощью ORM-фреймворка (желателдьно prisma ORM)
2. Сделать возможность получения и создания записей в таблице базы данных по эндпоинтам: get - '/objects', post - '/object'


# API

### Получение списка объектов

Запрос:

```typescript
axios({
  method: 'get',
  url: '/objects',
});
```

Ответ:

```typescript
{
    "objects": Array<{
        "id": number,
        "name": string
    }>
}
```

### Создание объекта

Запрос:

```typescript
axios({
  method: 'post',
  url: '/object',
  data: {
    "name": string
  }
});
```

Ответ:

```typescript
{
    "object": {
          "id": number,
          "name": string,
    }
}
```


