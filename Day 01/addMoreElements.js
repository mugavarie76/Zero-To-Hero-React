const heading1 = React.createElement('h1', 
{
    id: 'name',
    className: 'nameClass'
}, 
'Manikandan E');

const heading2 = React.createElement('h2', 
{
    id: 'designation',
    className: 'desigClass'
}, 
'Senior Interactive Developer');

const description = React.createElement('p', 
{
    id: 'description',
    className: 'containerClass'
}, 
'Self-motivated web developer with 15+ years of experience');

const myBox = React.createElement('div', 
{
    id: 'container',
    className: 'containerClass'
},
[heading1, heading2, description]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//Render method takes the ReactDOM element and inject inside the root
root.render(myBox);