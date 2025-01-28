import {render} from "react-dom";

class ReleasedProject {
    constructor(id,title,iconPath,developmentPeriod,releaseDate,platforms,description) {
        this.id = id;
        this.title = title;
        this.iconPath = iconPath
        this.developmentPeriod = developmentPeriod;
        this.releaseData = releaseDate;
        this.platforms = platforms;
        this.description = description;
    }

    render() {
        return (
            <>
                <li key={this.id}>
                    <img src={this.iconPath} alt={this.title + " Logo"}/>
                    <div className="prj-info-holder">
                        <h3>{this.title}</h3>
                        <ul className="prj-list">
                            <li>Development Period: {this.developmentPeriod}</li>
                            <li>Release Date: {this.releaseData}</li>
                            <li>Platform(s): {this.platforms}</li>
                        </ul>
                        <p>{this.description}</p>
                    </div>
                </li>
            </>
        )
    }
}

class UpcomingProject {
    constructor(id,title,iconPath,status,releaseDate,platforms,description) {
        this.id = id;
        this.title = title;
        this.iconPath = iconPath
        this.status = status;
        this.releaseData = releaseDate;
        this.platforms = platforms;
        this.description = description;
    }

    render() {
        return (
            <>
                <li key={this.id}>
                    <img src={this.iconPath} alt={this.title + " Logo"}/>
                    <div className="prj-info-holder">
                        <h3>{this.title}</h3>
                        <ul className="prj-list">
                            <li>Status: {this.status}</li>
                            <li>Estimated Release: {this.releaseData}</li>
                            <li>Platform(s): {this.platforms}</li>
                        </ul>
                        <p>{this.description}</p>
                    </div>
                </li>
            </>
        )
    }
}



function AllReleased() {
    const releasedProjects = [
        new ReleasedProject(
            0,
            "Rotari",
            "/assets/project-icons/rotari-logo.png",
            "January 2022 - November 2023",
            "November 2023",
            "Android",
            "Spinny spin spin"
        ),
    ];

    const rendered = releasedProjects.map((project) => (project.render()));

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
        new UpcomingProject(
            0,
            "SkyEye",
            "/assets/favicon.png",
            "Planning",
            "2025",
            "Android, iOS",
            "SkyEye is an app that will display weather conditions relevant to stargazing, such as sky cover, moon rise and set, and moon phase."
        ),
        new UpcomingProject(
            1,
            "Stargaze",
            "/assets/favicon.png",
            "Planning",
            "???",
            "Web",
            "Stargaze is a map that displays public locations near you with ideal conditions for stargazing."
        ),
        new UpcomingProject(
            2,
            "Dungeon of the Abyss",
            "/assets/favicon.png",
            "Planning",
            "???",
            "Web, Android, iOS",
            "A dungeon crawling roguelike game featuring a turn based battle system and an assortment of fun and interesting items."
        ),
    ];

    const rendered = upcomingProjects.map((project) => (project.render()));

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
            <section id="prj-music">
                <h2>Music</h2>
            </section>
        </>
    )
}

export default Projects;
