var config = {
    /*Configure your basic information here, all data should be provided as strings*/
    name: "Allen Ouyang",
    sex: "Male",
    age: "14",
    email: "allen.ouyang2010@gmail.com",
    log: "HappyCoder",


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
            "<p>I am resilient, open-minded, Responsible.</p>",



    /** 
    * Configure your skills here
    * ["Skill", Proficiency Level, "Skill bar color"]
    */  
    skills: [
        ["Sailing", 10, "red"],
        ["Snowboarding", 5,"black"],
        ["Soccer", 5, "blue"],
        ["Programming", 20, "#1abc9c"],
        ["Physics", 15, "yellow"],
        ["Drama", 5, "pink"],
        ["Math", 30,"grey"],
        ["basketball", 10, "blue"],
    ],


    /*Write your skill descriptions here, you can embed HTML tags to adjust formatting*/
    skills_description: "<ul>" +
        "     <li>Passionate about STEM with strong problem-solving skills and a love for innovation.</li>" +
        "     <li>Proficient in web development with a solid grasp of CSS, HTML, and JavaScript.</li>" +
        "     <li>Knowledgeable in programming languages like C++ and Python.</li>" +
        "     <li>Experience in building basic machine learning models such as Support Vector Machines (SVMs).</li>" +
        "     <li>Accomplished mathematician with a UKMT Gold Award and AMC 10 Honor Roll recognition.</li>" +
        "     <li>Active participant in physics competitions like BPhO and Physics Bowl.</li>" +
        "     <li>Won the National Championship in sailing, demonstrating teamwork and perseverance.</li>" +
        "     <li>Avid snowboarder and member of the SK Club, embracing challenges on the slopes.</li>" +
        "</ul>",



    /**
     * Write your portfolio or personal project showcase here
     * ["img", "url", "Project Name", "brief description"]
     * img refers to the link to the image of your project, url refers to the project link, ProjectName refers to the name of your repository or project, and brief is a short introduction
     */
    portfolio: [
        ["https://th.bing.com/th/id/OIP.EFF61WNWIoOsGILSMZfQEwAAAA?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "./template/Webiste/index.html", "Cybersecurity", "Made during CS lesson"],
        ["https://th.bing.com/th/id/OIP.20eC4PcBB-kjW_d3iBsEnwAAAA?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "./template/Planet hack website project/index.html", "Planet Hack 2024", "SDG goal 11"],
        ["./images/pro-2.png", "https://github.com/Hakcet/UI", "Source code of my website", "Written using hands"],
        ["./images/sail.png", "./images/sg2.mp4", "Sailing championship", "One of my achivements"],
        ["./images/sail-2.png", "./images/sg.mp4", "Sailing journal", "Normal days when I go sailing"],
        ["https://th.bing.com/th/id/OIP.8PHCriy7m-jH9THHlyFqAAHaGE?w=196&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "./images/sb.mp4", "Snowboarding", "Normal days when I go snowboarding"],
    ],


    /**
     * Write your other experiences here
     * ["Date", "Experience", "Description"]
     * It is recommended to include any awards or certificates you received at the school or higher level.
     */
    others: [
        ["2023-2", "IMC SILVER", "A starting point of Math competition", "./images/awards/IMC.jpg"],
        ["2023-10", "JMC GOLD", "First shoot in school", "./images/awards/JMC.jpg"],
        ["2024-2", "PADI DIVING","It was fun", "./images/awards/PADI.png"],
        ["2024-4", "Physics Bowl","My first physics competition!", "https://th.bing.com/th/id/OIP.sJ2DfyiWD16OAEf__1joyAAAAA?rs=1&pid=ImgDetMain"],
        ["2024-8", "JHMT","we won the gold for our school!!", "./images/awards/JHMT.jpg"],
        ["2024-8", "AI Camp","M0ney ball project","./images/awards/AI.png"],
        ["2024-10", "Sailing championship","All my sailing videos is in project section!", "./images/awards/S.jpg"],
        ["2024-10", "SMC GOLD","my first gold in UKMT, it is a monument!!", "./images/awards/SMC.jpg"],
        ["2024-11", "BPHO","An new attempt.","https://th.bing.com/th/id/OIP.hcejX4NzLh7FGtDNDY9quQHaCL?w=334&h=103&c=7&r=0&o=5&dpr=1.3&pid=1.7"],
        ["2024-11", "AMC","Honor roll of course!", "./images/awards/AMC10.jpg"],
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
        "https://th.bing.com/th/id/OIP.x_fttaXAhRW7uJvcPeoY1wHaHW?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.UVByChEKNghHK8L5c1twPgHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ]

}
