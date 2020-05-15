/**
 * Contain the information about my projects
 */

 module.exports = [
     {
        name: 'Join-Code',
        date: 'December, 2019 - January, 2020',
        description: 'Made as part of an university subject called "Groupware and Collaborative Work", built by a team of three people. Consists of a online text editor where you can write code and share it with other users. These users can edit at the same time the same document, they can develop different part of the code in real-time. The project is divided in two parts: the front-end made in Angular and the back-end made in Node.',
        repositories: [
            {
                link: 'https://github.com/danielrs975/join-code-frontend',
                name: 'Front-End Repository'
            },
            {
                link: 'https://github.com/danielrs975/join-code-backend',
                name: 'Back-End Repository'
            }
        ],
        image: {
            link: '/images/joincode.PNG',
            alt: 'joincode-interface'
        }
     },
     {
        name: 'Expensify App',
        date: 'February, 2020',
        description: 'Made as part of an Udemy class that teach React (100% Recommended). Consists of an app that keep track of each of your expenses in the day. Made with React and Redux.',
        repositories: [
            {
                link: 'https://github.com/danielrs975/expensify-app',
                name: 'Repository'
            },
            {
                link: 'https://www.udemy.com/course/react-2nd-edition',
                name: 'Udemy Cours'

            }
        ]
     },
     {
        name: 'SIP Software',
        date: 'April, 2018 - July, 2018',
        description: 'Application built for an university subject called "Software Engineering". The objective of the development of this, was to teach the SCRUM methodology to build software. The application consists of a system to manage the inscription of students in a Master Program. I was part of a group to develop this project.',
        repositories: [
            {
                link: 'https://github.com/german1608/sip-software',
                name: 'Repository'
            },
        ]
     }
]