module.exports = {
    title: 'Homework',
    description: '',
    themeConfig: {
        sidebar: [
            {
                title: 'lesson - 1',
                collapsable: false
            },
            {
                title: 'lesson - 2',
                collapsable: false
            },
            {
                title: 'lesson - 3',
                collapsable: false
            },
            {
                title: 'lesson - 4',
                collapsable: false
            },
            {
                title: 'lesson - 5',
                collapsable: false,
                children: [
                    'homework/lesson-05.md',
                    'javascript/ui/2.events-and-interfaces/1.introduction-browser-events.md',
                    'javascript/ui/2.events-and-interfaces/3.obtaining-event-object.md',
                    'javascript/ui/2.events-and-interfaces/5.event-delegation',
                    'javascript/ui/2.events-and-interfaces/6.behavior.md',
                    'javascript/ui/2.events-and-interfaces/7.default-browser-action.md',
                ]
            },
            {
                title: 'lesson - 6',
                collapsable: false,
                children: [
                    'homework/lesson-06.md',
                    'javascript/js/5.functions-closures/1.global-object.md',
                    'javascript/js/5.functions-closures/2.closures.md',
                    'javascript/js/5.functions-closures/4.closures-usage.md',
                ]
            },
            {
                title: 'lesson - 7',
                collapsable: false,
                children: [
                    'homework/lesson-07.md',
                ]
            },
            {
                title: 'lesson - 8',
                collapsable: false,
                children: [
                    'homework/lesson-08.md',
                ]
            },
            {
                title: 'lesson - 9',
                collapsable: false,
                children: [
                    'homework/lesson-09.md',
                ]
            },
        ]
    }
};