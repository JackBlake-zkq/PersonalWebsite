<script>
    import PageTransition from "../PageTransition.svelte";
    import ProjectCard from "../portfolio/ProjectCard.svelte";

</script>

<PageTransition>
    <main>
        <div>
            <ProjectCard imageURL="https://i.imgur.com/HYsendz.png" name="UW Madison - Course Seach & Enroll +" 
                desc="Chrome extension for UW Madison students that pulls Rate My Professors and Madgrades info into Course Search & Enroll"
                links={[["Website", "https://chrome.google.com/webstore/detail/uw-madison-course-search/ldnllmdimjknflobmdjnmefeollalodf"],["GitHub", "https://github.com/JackBlake-zkq/cse-plus"]]}/>
            <ProjectCard imageURL="https://images.ctfassets.net/x00i2tlytr27/6RmXcRxOTji0flKJf4JaSr/92d81414981ae9d742ad39e116cfcb95/Screen_Shot_2023-05-21_at_3.05.10_PM.png" name="UW Madison - Solar Array Analytics" 
                desc="Analytics page for the solar arrays on UW-Madison's campus, and the estimated benefit of proposed new arrays"
                links={[["Website", "https://madison-solar.dssdglobal.org/"],["GitHub", "https://github.com/DSSD-Madison/Helios"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/KyJMRPw.jpg" name="Website Framework for Student Organizations" 
                desc="Open-source framework for creating websites for student organizations. Made with Contentful, a Headless CMS, and Astro for partial SSR"
                links={[["Website", "https://madison.dssdglobal.org/"], ["GitHub", "https://github.com/DSSD-Madison/madison-website"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/fYnmy3o.png" name="ROBUG" 
                desc="Real-time multi-player browser game made for Madhacks 2023"
                links={[["Website", "https://madhacks-io-game-hhwbvukxcq-uc.a.run.app/"],["GitHub", "https://github.com/JackBlake-zkq/madhacks-io-game"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/LjyRGep.gif" name="Current Personal Website (This Website)" 
                desc="Newest iteration of my personal website, with more focus on SEO (still client rendered but Google's crawlers can see most important content) and interactivity. It's a single page app created with Svelte for the frontend and Firebase for some light backend functionality."
                links={[["GitHub", "https://github.com/JackBlake-zkq/personal-website-1"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/FjbNBBi.gif" name="Eirene Peacebuilding Database" 
                desc="Web app I helped build for Alliance for Peacebuilding during my internship with Data Science for Sustainbable Development (DSSD) Global. Allows public officials to search for measurements that can help them prove the effectiveness of their peacebuilding policies."
                links={[["Website", "https://eirene.allianceforpeacebuilding.org/#/login"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/mGbty4Y.gif" name="Slant" 
                desc="Browser game where users can create and play levels where they must bounce a ball into a goal gaurded by any number of walls. User experience inpired by Geometry Dash."
                links={[["Website", "https://slant-k2h52ozsya-uc.a.run.app"], ["GitHub", "https://github.com/JackBlake-zkq/slant-browser-game"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/0UpIhZf.gif" name="Break Free From Plastic" 
                desc="Web app that tracks plastic usage avoided through reuse systems at 25 stores in the Philippines."
                links={[["Website", "https://bffp-backend.web.app/"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/hEjoOMl.gif" name="Old Personal Website" 
                desc="The first iteration of my personal website. Made with vanilla Javascript, HTML & CSS"
                links={[["Website", "https://jackblake-zkq.github.io/personal-website-0/"], ["GitHub", "https://github.com/JackBlake-zkq/personal-website-0"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/G7aTQGT.gif" name="Janky Draw App" 
                desc="Draw app made using CSS box shadows. Fun Experiment"
                links={[["Website", "https://jackblake-zkq.github.io/janky-draw-app/"], ["GitHub", "https://github.com/JackBlake-zkq/janky-draw-app"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/0RniMzE.png" name="Minecraft Strength Alerts Mod" 
                desc="Minecraft Forge mod made for Hypixel Skyblock (a popular multiplayer gamemode). Alerts the player with by rendering text with the names of players when they get strength. Position, color, etc. is configurable with commands."
                links={[["GitHub", "https://github.com/JackBlake-zkq/skywars-strength-alerts"]]}/>
        </div>
    </main>
</PageTransition>

<style>
    div {
        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    h4 {
        text-align: right;
        padding-bottom: 7rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
</style>
