export interface Attachment {
    id: string;
    title: string;
    type: 'pdf' | 'image' | 'link';
    url: string;
    description?: string;
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    audioUrl: string;
    duration: string;
    description: string;
    content: string;
    keyTerms?: string[];
    attachments?: Attachment[];
    quiz?: {
        question: string;
        options: string[];
        correctAnswer: number;
    }[];
}

export interface Module {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
    lessons: Lesson[];
}

export const COURSE_CONTENT: Module[] = [
    {
        id: 'module-1',
        title: 'Введение в диспетчинг',
        slug: 'introduction',
        description: 'Основы профессии диспетчера грузоперевозок',
        icon: '🎓',
        color: 'from-blue-500 to-cyan-500',
        lessons: [
            {
                id: 'lesson-1-1',
                title: 'Кто такой диспетчер?',
                slug: 'who-is-dispatcher',
                audioUrl: '/audio/1-1.mp3',
                duration: '8:30',
                description: 'Разбираем роли и обязанности в логистике',
                content: `# Кто такой диспетчер?

Диспетчер грузоперевозок — это ключевое звено в логистической цепочке. Это профессионал, который координирует перевозку грузов от отправителя к получателю.

## Основные обязанности

**Поиск грузов:**
- Работа с досками грузов (DAT, Truckstop)
- Поиск выгодных маршрутов
- Анализ рынка ставок

**Работа с водителями:**
- Назначение рейсов
- Контроль выполнения
- Решение проблем на маршруте

**Документооборот:**
- Оформление Rate Confirmation
- Работа с BOL (Bill of Lading)
- Инвойсинг и факторинг

## Навыки успешного диспетчера

- Коммуникабельность
- Стрессоустойчивость
- Знание географии США
- Умение вести переговоры
- Базовые знания английского языка`,
                keyTerms: ['Диспетчер', 'BOL', 'Rate Confirmation', 'DAT', 'Truckstop'],
                attachments: [
                    {
                        id: 'att-1-1-1',
                        title: 'Руководство диспетчера v1.0',
                        type: 'pdf',
                        url: '/attachments/dispatcher-manual-v1.pdf',
                        description: 'Полное руководство для начинающих диспетчеров'
                    }
                ]
            },
            {
                id: 'lesson-1-2',
                title: 'Структура логистической компании',
                slug: 'company-structure',
                audioUrl: '/audio/1-2.mp3',
                duration: '6:45',
                description: 'Понимание ролей: брокер, перевозчик, диспетчер',
                content: `# Структура логистической компании

## Основные участники рынка

**Shipper (Грузоотправитель):**
Компания, которая отправляет груз. Например, Amazon, Walmart, производственные предприятия.

**Broker (Брокер):**
Посредник между грузоотправителем и перевозчиком. Находит грузы и распределяет их между перевозчиками.

**Carrier (Перевозчик):**
Компания, которая владеет грузовиками и выполняет перевозку.

**Dispatcher (Диспетчер):**
Работает на перевозчика. Находит грузы для водителей компании.

## Как это работает

1. Shipper размещает груз у Broker
2. Broker выставляет груз на доски (DAT, Truckstop)
3. Dispatcher находит груз и договаривается о ставке
4. Водитель забирает и доставляет груз
5. Документы отправляются для оплаты`,
                keyTerms: ['Shipper', 'Broker', 'Carrier', 'Dispatcher']
            }
        ]
    },
    {
        id: 'module-2',
        title: 'Основы трака',
        slug: 'truck-basics',
        description: 'Типы прицепов, веса, габариты и оборудование',
        icon: '🚛',
        color: 'from-orange-500 to-red-500',
        lessons: [
            {
                id: 'lesson-2-1',
                title: 'Типы прицепов',
                slug: 'trailer-types',
                audioUrl: '/audio/2-1.mp3',
                duration: '10:20',
                description: 'Dry Van, Reefer, Flatbed и другие типы',
                content: `# Типы прицепов

## Dry Van (Сухой фургон)
Самый распространенный тип прицепа. Закрытый фургон для перевозки обычных грузов.

**Характеристики:**
- Длина: 53 фута (стандарт)
- Вес: до 45,000 lbs
- Использование: одежда, электроника, упакованные товары

## Reefer (Рефрижератор)
Прицеп с холодильной установкой для перевозки скоропортящихся грузов.

**Характеристики:**
- Температурный режим: от -20°F до +70°F
- Выше ставки на 20-30%
- Использование: продукты, медикаменты, цветы

## Flatbed (Платформа)
Открытая платформа для негабаритных грузов.

**Характеристики:**
- Требует крепления груза (straps, chains)
- Использование: стройматериалы, оборудование, трубы

## Step Deck (Низкорамная платформа)
Для высоких грузов, которые не помещаются в обычный фургон.

## Специализированные:
- Tanker (цистерна) - жидкости
- Conestoga - с раздвижным тентом
- Power Only - только тягач без прицепа`,
                keyTerms: ['Dry Van', 'Reefer', 'Flatbed', 'Step Deck'],
                attachments: [
                    {
                        id: 'att-2-1-1',
                        title: 'Визуальный справочник типов прицепов',
                        type: 'pdf',
                        url: '/attachments/trailer-types-guide.pdf'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-3',
        title: 'Документооборот',
        slug: 'documentation',
        description: 'BOL, Rate Confirmation, W-9 и другие документы',
        icon: '📄',
        color: 'from-green-500 to-emerald-500',
        lessons: [
            {
                id: 'lesson-3-1',
                title: 'Rate Confirmation (RC)',
                slug: 'rate-confirmation',
                audioUrl: '/audio/3-1.mp3',
                duration: '12:15',
                description: 'Главный документ сделки между брокером и перевозчиком',
                content: `# Rate Confirmation (RC)

Rate Confirmation — это договор между брокером и перевозчиком на перевозку конкретного груза.

## Обязательные элементы RC

**Информация о сторонах:**
- Broker MC# (номер лицензии брокера)
- Carrier MC# (номер лицензии перевозчика)
- Контактные данные

**Детали груза:**
- Pickup location (адрес загрузки)
- Delivery location (адрес выгрузки)
- Pickup date & time
- Delivery date & time
- Commodity (тип груза)
- Weight (вес)

**Финансовые условия:**
- Rate (ставка)
- Payment terms (условия оплаты)
- Detention pay (оплата простоя)
- TONU (Trip Not Used - отмена рейса)

## Важные моменты

⚠️ **Всегда проверяйте:**
- Правильность MC номеров
- Соответствие адресов
- Четкость условий оплаты
- Наличие подписи брокера

💡 **Совет:** Сохраняйте копию RC до получения оплаты!`,
                keyTerms: ['Rate Confirmation', 'MC Number', 'Detention', 'TONU'],
                attachments: [
                    {
                        id: 'att-3-1-1',
                        title: 'Образец заполненного Rate Confirmation',
                        type: 'pdf',
                        url: '/attachments/sample-rate-confirmation.pdf',
                        description: 'Пример правильно оформленного RC'
                    },
                    {
                        id: 'att-3-1-2',
                        title: 'Чек-лист проверки RC',
                        type: 'pdf',
                        url: '/attachments/rc-checklist.pdf'
                    }
                ]
            },
            {
                id: 'lesson-3-2',
                title: 'Bill of Lading (BOL)',
                slug: 'bill-of-lading',
                audioUrl: '/audio/3-2.mp3',
                duration: '9:40',
                description: 'Товарно-транспортная накладная',
                content: `# Bill of Lading (BOL)

BOL — это товарно-транспортная накладная, подтверждающая получение и доставку груза.

## Типы BOL

**Straight BOL:**
Груз доставляется конкретному получателю

**Order BOL:**
Груз может быть передан третьей стороне

**Signed BOL:**
С подписью получателя — основание для оплаты!

## Что должно быть в BOL

- Shipper information (отправитель)
- Consignee information (получатель)
- Описание груза
- Количество паллет/коробок
- Вес
- Подпись водителя при загрузке
- Подпись получателя при выгрузке

## Критически важно!

🚨 **Без подписанного BOL нет оплаты!**

Водитель ОБЯЗАН получить подпись получателя на BOL при выгрузке. Это единственное доказательство доставки груза.

## Типичные проблемы

- Нечитаемая подпись
- Отсутствие даты/времени
- Повреждения груза не отмечены
- Неполная информация о грузе`,
                keyTerms: ['BOL', 'Bill of Lading', 'Signed BOL', 'POD'],
                attachments: [
                    {
                        id: 'att-3-2-1',
                        title: 'Образец BOL',
                        type: 'pdf',
                        url: '/attachments/sample-bol.pdf'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-4',
        title: 'Работа с досками грузов',
        slug: 'load-boards',
        description: 'DAT, Truckstop и поиск выгодных грузов',
        icon: '💼',
        color: 'from-purple-500 to-pink-500',
        lessons: [
            {
                id: 'lesson-4-1',
                title: 'Введение в DAT',
                slug: 'dat-introduction',
                audioUrl: '/audio/4-1.mp3',
                duration: '11:30',
                description: 'Крупнейшая доска грузов в США',
                content: `# DAT Load Board

DAT (Dial-A-Truck) — крупнейшая платформа для поиска грузов в Северной Америке.

## Основные функции

**Поиск грузов:**
- По маршруту (origin → destination)
- По типу прицепа
- По весу и размеру
- По дате загрузки

**Фильтры:**
- Минимальная ставка
- Максимальное расстояние
- Исключение определенных штатов
- Только проверенные брокеры

## Как читать объявление

\`\`\`
CHI, IL → ATL, GA | 53' DV | 42,000 lbs
Rate: $2,800 | $2.10/mi | 1,333 mi
Pickup: 05/15 8AM-12PM
Delivery: 05/17 by 5PM
Broker: XYZ Logistics | MC: 123456
\`\`\`

**Расшифровка:**
- CHI, IL → ATL, GA: маршрут Чикаго → Атланта
- 53' DV: 53-футовый Dry Van
- 42,000 lbs: вес груза
- $2,800: общая ставка
- $2.10/mi: ставка за милю
- 1,333 mi: расстояние

## Стратегии поиска

1. **Backhaul:** Поиск груза на обратный путь
2. **Deadhead:** Учет пустого пробега до загрузки
3. **Hot markets:** Фокус на популярных направлениях`,
                keyTerms: ['DAT', 'Load Board', 'Rate per mile', 'Deadhead', 'Backhaul']
            }
        ]
    }
];

// Utility functions
export const getAllModules = (): Module[] => COURSE_CONTENT;

export const getModuleBySlug = (slug: string): Module | undefined => {
    return COURSE_CONTENT.find(module => module.slug === slug);
};

export const getLessonBySlug = (moduleSlug: string, lessonSlug: string): Lesson | undefined => {
    const module = getModuleBySlug(moduleSlug);
    return module?.lessons.find(lesson => lesson.slug === lessonSlug);
};

export const getTotalLessons = (): number => {
    return COURSE_CONTENT.reduce((total, module) => total + module.lessons.length, 0);
};

export const getTotalDuration = (): string => {
    let totalSeconds = 0;

    COURSE_CONTENT.forEach(module => {
        module.lessons.forEach(lesson => {
            const [min, sec] = lesson.duration.split(':').map(Number);
            totalSeconds += min * 60 + sec;
        });
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return hours > 0 ? `${hours}ч ${minutes}мин` : `${minutes}мин`;
};
