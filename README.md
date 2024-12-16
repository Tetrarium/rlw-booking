This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Проект "Система бронирования ж/д билетов"

[Deploy](https://rlw-booking.vercel.app/)

Проект по [макету Figma](https://www.figma.com/file/7981GjEsjSpBUKolk4xFoT/%D0%97%D0%B0%D0%BA%D0%B0%D0%B7-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2?node-id=0%3A1) в котором в качестве API используется [внешний сервер](https://students.netoservices.ru/fe-diplom/)

## Описание проекта

### Основные элементы
1. Вагон.
2. Направление.
3. Группа направлений.
4. Место (билет).

### Вагон
1. Вагон может быть одним из типов: сидячий, люкс (СВ), купе, плацкарт.
2. У каждого типа вагона своя карта рассадки мест.
3. У каждого вагона своя стоимость билетов.
4. Для каждого вагона есть возможность выбора дополнительных услуг: бельё, кондиционер и Wi-Fi.
5. Для некоторых вагонов стоимость белья включена в стоимость билета, то есть стоимость белья не должна прибавляться при формировании конечной стоимости билета.

### Направление

1. Направление — путь движения вагона из одного города в другой.
2. Направление предполагает движение поезда только в одну сторону.
3. Направление имеет дату отправления и дату прибытия.

### Группа направлений

1. Используется для того, чтобы обеспечить возможность путешествия из одного города в другой и обратно.
2. Объединяет в себе два направления

### Место (билет)
1. Имеет свой номер на карте вагона.
2. Может быть занято другим пассажиром.
3. Закреплено за конкретным направлением.

### TODO

 - [ ] Сделать провайдер для стора
 - [ ] Добавить для городов сохранение информации в сторе при изменении города отправления/назначения