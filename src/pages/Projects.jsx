import {ProjectComponent} from "../components/ProjectComponent.tsx";
import {Project} from "../objects/Project.ts";

function AllReleased() {
    const releasedProjects = [
        new Project(
            0,
            "Test Project",
            "Complete",
            "0.0.1",
            "/assets/favicon.png",
            true,
            "Today",
            "Yesterday - Today",
            "All of them",
            "This is a short description for the Test Project",
            "This is a long description for the Test Project"
        )
    ];

    const rendered = releasedProjects.map((project) => (<ProjectComponent project={project}></ProjectComponent>));

    return (
        <>
            <h2>Released</h2>
            <ul>
                {rendered}
            </ul>
        </>
    )
}

function AllUpcoming() {
    const upcomingProjects = [
        new Project(
            0,
            "Test Project",
            "Complete",
            "0.0.1",
            "/assets/favicon.png",
            false,
            "Today",
            "Yesterday - Today",
            "All of them",
            "This is a short description for the Test Project",
            "This is a long description for the Test Project"
        )
    ];

    const rendered = upcomingProjects.map((project) => (<ProjectComponent project={project}></ProjectComponent>));

    return (
        <>
            <h2>Upcoming</h2>
            <ul>
                {rendered}
            </ul>
        </>
    )
}

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <section id="prj-released" className="prj-holder">
                <AllReleased />
            </section>
            <section id="prj-upcoming" className="prj-holder">
                <AllUpcoming />
            </section>
        </>
    )
}

export default Projects;
