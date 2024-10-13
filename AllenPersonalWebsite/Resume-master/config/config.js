var config = {
    /*Configure your basic information here, all data should be provided as strings*/
    name: "Allen Ouyang",
    sex: "Male",
    age: "19",
    email: "allen.ouyang82@gmail.com",

    log: "Happysnaker",


    /*Configure your homepage mottos here*/
    motto: [
        "Excited",
        "Go For It!",
        "Nothing can stop me except myself",
        "Shocking fact! I did 80% of this DEV by myself",
        "Never give up!",
        "A rough start is a good start",
    ],


    /*Configure the welcome message on your homepage here, you can embed HTML tags to adjust formatting*/
    welcome: "<br>" +
             "My Name is Allen and I am currently in Dulwich College Beijing" +
             "Nice to meet you!",


    /*Configure the 'about me' section here, you can embed HTML tags to adjust formatting*/
    about: "<p> Hello! As mentioned before, my name is Allen.</p>" +
            "<p>I am resilient, open-minded, intelligent.</p>",



    /** 
    * Configure your skills here
    * ["Skill", Proficiency Level, "Skill bar color"]
    */  
    skills: [
        ["Sailing", 65, "red"],
        ["Snowboarding",62,"black"],
        ["Football", 53, "blue"],
        ["Programming", 71, "#1abc9c"],
        ["Physics", 80, "yellow"],
        ["Drama", 32, "pink"],
        ["Math",72,"grey"]
    ],


    /*Write your skill descriptions here, you can embed HTML tags to adjust formatting*/
    skills_description: "<ul>" +
        "     <li>Solid knowledge of programming basics like operating systems, computer networks, etc.</li>" +
        "     <li>Proficient in basic Java programming.</li>" +
        "     <li>Familiar with Java IO, multithreading, collections, and other basic frameworks.</li>" +
        "     <li>Knowledge of JVM principles.</li>" +
        "     <li>Familiar with basic Go language development.</li>" +
        "     <li>Skilled in writing and optimizing SQL queries.</li>" +
        "     <li>Proficient in basic Linux commands.</li>" +
        "     <li>Familiar with using frameworks like Spring, iBatis, Struts, and understanding their principles and mechanisms.</li>" +
        "     <li>Knowledge of caching and messaging mechanisms.</li>" +
        "     <li>Understanding of distributed system design and application.</li>" +
        "     <li>Familiar with HTML, CSS, JavaScript, and related front-end knowledge.</li>" +
        " </ul>",


    /**
     * Write your portfolio or personal project showcase here
     * ["img", "url", "Project Name", "brief description"]
     * img refers to the link to the image of your project, url refers to the project link, ProjectName refers to the name of your repository or project, and brief is a short introduction
     */
    portfolio: [
        ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "AI-based Gomoku", "AI-based Gomoku game written in C++<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "Student Management System", "Implemented in C language + AVL tree + double linked list"]
    ],


    /**
     * Write your work experience here
     * ["Date", "Job", "Description"]
     * You can embed HTML tags to adjust formatting
     */
    work: [
        // If you have no work experience, you can write the following
        // ["————————", "", "<p>No work experience, looking forward to your contact.</p>"]

        ["2020/7/1 — 2021/8/10", "<br>Yama's Internship",
            "<p><strong>Yama R&D Department</strong></p>" +
            "<p>With the upcoming Ghost Festival (15th of the seventh lunar month), Yama's tasks have become overwhelming. My team and I were mainly responsible for the backend of the 'Yama List', aiming to solve the problem of millions of concurrent visits. After much effort, we achieved stable and efficient product operation.</p>"
        ],

        ["2020/7/1 — 2021/8/10", "<br>Yama's Internship",
            "<p><strong>Yama R&D Department</strong></p>" +
            "<p>With the upcoming Ghost Festival (15th of the seventh lunar month), Yama's tasks have become overwhelming. My team and I were mainly responsible for the backend of the 'Yama List', aiming to solve the problem of millions of concurrent visits. After much effort, we achieved stable and efficient product operation.</p>"
        ]
    ],


    /**
     * Write your other experiences here
     * ["Date", "Experience", "Description"]
     * It is recommended to include any awards or certificates you received at the school or higher level.
     */
    others: [
        ["2024-09-28", "Being drafted by NBA","Birdnest barraging"],
        //["2021-04-28", "12th Blue Bridge Cup University A Group Provincial Third Prize", "In my freshman year, I participated in the 12th Blue Bridge Cup University A Group. However, the contest, unlike previous years, focused on dynamic programming (DP), and I only achieved the provincial third prize."],
    ],


    /**
     * Write your social media links here
     * ["img", "url", "description"]
     * img is the icon for the social platform, the './svg' folder already has icons for Weibo, Jianshu, Juejin, Xiaohongshu, Zhihu, CSDN, Facebook, GitHub, LeetCode, Codeforces, and QQ
     * url is your link
     * desc is a description that will be shown when you hover over the icon
     * It is recommended to include <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "My LeetCode profile"],
        ["./svg/github.svg", "https://github.com/happysnaker", "My GitHub profile"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "My personal blog"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "My Juejin profile"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "My Zhihu profile"]
    ],


    // These are image links, you are recommended to only change the second avatar image
    url: [
        // Background image, avatar, portfolio background, other experiences background
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
