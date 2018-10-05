const app = {
    title: 'Visibility Toggle',
    details: ['Hey. These are some details you can now see!']
};

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

let visibility = false;

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();