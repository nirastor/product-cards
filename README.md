## Демо
https://nirastor.github.io/product-cards/

## Комментарии
* **Github pages используют https, картинки выложены на http поэтому в хроме при просмотре демо c github pages картинки не открываются.** Насколько смог разобраться: с фронта это поправить нельзя. В Мозилле пока работает. В хроме при запуске html-локально тоже работает.
* Задание не большое, поэтому сделал без сборщиков и разделения на файлы. В [портфолио](https://github.com/nirastor/about) есть примеры больших проектов.
* т.к. в ТЗ JSON был не по ссылке, а на гугл-диске, то не запрашиваю его, а сохранил в код. Получаю его через функцию, в которую потом можно дописать запрос
* Чтобы отправить email с фронтенда нужно или оставить на фронте свой адрес, или зарегистрироваться в сервисе рассылок. Поэтому отправку формы не делал
* В таблице поcтавил разные цены чтобы проверить отображение
* Учел, что название продукта может быть разной длинны. Если в ряду несколько карточек, то будет отображаться только две строки названия. В мобильной версии отображается полное название
* В модальном окне использовал метод closest без полифила и обработки ошибок. В IE не сработает.
