# UA Cyber SHIELD

*See this README [in English](README-en.md)*


**Система волонтерської кібероборони України**

- Відео інструкція [українською](https://youtu.be/snTzpRt7a5k)

## Для кіберзахисників

1. Скачуємо і запускаємо

**В користувачів на Linux можливо треба буде додати аргумент `--no-sandbox`. Windows повинен працювати без всяких додаткових речей**

## Як це працює

Наш центр волонтерів займається всією тяжкою роботою: моніторингом цілей, підтримкою технічної структури, координацією атак, передачею даних до програм клієнтів, тощо.
Тому на момент атаки всі підготовчі дані є.
Вам залишається тільки встановити програму і приєднатися.
Цілі міняються автоматично і підвантажуються з центру координації

## Інтерфейс програми

![A working example](docs/working.png)

## Збірка коду

1. Клонуємо репозиторій: `git clone https://github.com/Luzhnuy/uashield`
2. Встановлюємо залежності: `cd uashield && npm install`
3. Запускаємо білд: `npm run build:electron`
4. Запускаємо виконавчий файл в `./dist/electron` або електрон версію: `npm run start:electron`

## Headless версія (Docker)

1. Збірка імежду: `docker build . -t uashield`
2. Запуск: `docker run uashield 500 true` - де `500` - кількість потоків, і `true` | `false` чи ви бажаєте використати проксі

Або за допомогою вже [зібраного імежду](https://hub.docker.com/repository/docker/lvinni/uashield):

```bash
docker run -d lvinni/uashield 512 true
```

## Docker-compose версія

1. Запуск: `docker-compose up -d`
2. Відредагуйте значення змінних `WORKERS` та `USEPROXY` в файлі `docker-compose.yml` - де `256` - кількість потоків, і `true` | `false` чи ви бажаєте використати проксі

## Деплой на Raspberry Pi

[![balena deploy button](https://www.balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/opengs/uashield)

## Деплой за допомогою Ansible

[tools/ansible/README.md](tools/ansible/README.md)

## Деплой у Kubernetes

[tools/helm/README.md](tools/helm/README.md)

## Деплой на Play With Docker - безкоштовний інстанс на 4 години

[![Try in PWD](https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png)](https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/opengs/uashield/0.0.x/pwd-docker-compose.yml)
