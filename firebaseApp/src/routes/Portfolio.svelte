<script>
    import PageTransition from "../PageTransition.svelte";
    import ProjectCard from "../portfolio/ProjectCard.svelte";

</script>

<PageTransition>
    <main>
        <div>
            <ProjectCard imageURL="https://i.imgur.com/FjbNBBi.gif" name="Data Science for Sustainable Development - Madison Hub Website" 
                desc="Content focussed website that I acted as Project Manager for. Uses Contentful, a Headless CMS, and Astro for partial SSR."
                links={[["Website", "https://madison.dssdglobal.org/"], ["GitHub", "https://github.com/DSSD-Madison/madison-website"]}/>
            <ProjectCard imageURL="https://i.imgur.com/FjbNBBi.gif" name="Eirene Peacebuilding Database" 
                desc="Web app I helped build for Alliance for Peacebuilding during my internship with Data Science for Sustainbable Development (DSSD) Global. Allows public officials to search for measurements that can help them prove the effectiveness of their peacebuilding policies. Check out my Resume to learn more about my role!"
                links={[["Website", "https://eirene.allianceforpeacebuilding.org/#/login"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/mGbty4Y.gif" name="Slant" 
                desc="Browser game where users can create and play levels where they must bounce a ball into a goal gaurded by any number of walls. User experience inpired by Geometry Dash."
                links={[["Website", "https://sl4nt.herokuapp.com/"], ["GitHub", "https://github.com/JackBlake-zkq/slant-browser-game"]]}/>
            <ProjectCard imageURL="https://i.imgur.com/0UpIhZf.gif" name="Break Free From Plastic" 
                desc="Web app that tracks plastic usage avoided through reuses systems at 25 stores in the Philippines. Check out my Resume to learn more about my role!"
                links={[["Website", "https://bffp-backend.web.app/"]]}/>
        </div>
        <h4>
            Check out some of my older projects on <a href="https://jackblake-zkq.github.io/old-personal-website/">my old website</a>!
        </h4>
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
