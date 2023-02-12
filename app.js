const heading = React.createElement("h1",{
    id:"title",
    style:{color:"white"},key:"asdf"
},"Namaste Everyone")
const heading1 = React.createElement("h2",{id:"newti",key:"dsfsdv"},"visakhh");
const container = React.createElement("div",{id:"container"},[heading,heading1])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container);
