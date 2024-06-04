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
        demo: "https://netlify.com/"
    },

    2: {
        title: "Lorem Ipsum",
        image: projectTwo,
        description: (
            <>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </>
        ),
        github: "https://github.com/",
        demo: "https://netlify.com/"
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