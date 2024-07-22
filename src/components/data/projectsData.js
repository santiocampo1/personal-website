import projectOne from '../../assets/project-1.png';
import projectTwo from '../../assets/project-2.png';
import projectThree from '../../assets/project-3.png';

const projects = {
    1: {
        title: "Spotify Clone",
        image: projectOne,
        description: (
            <>
                <p>
                    This project aims to create a clone of the popular music streaming platform, Spotify. The goal is to replicate the core features and functionalities of Spotify, providing users with a similar experience.
                </p>
            </>
        ),
        github: "https://github.com/santiocampo1/spotify_clone",
        demo: "https://songplayerclone.netlify.app"
    },

    2: {
        title: "Tasks Manager (CRUD)",
        image: projectTwo,
        description: (
            <>
                <p>
                    This is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. The application is a task manager that allows users to create, read, update, and delete tasks.
                </p>
            </>
        ),
        github: "https://github.com/santiocampo1/task-manager",
        demo: "https://tasksmanagercrud.netlify.app"
    },

    3: {
        title: "Lorem Ipsum",
        image: projectThree,
        description: (
            <>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </>
        ),
        github: "https://github.com/",
        demo: "https://netlify.com/"
    }
}

export default projects;