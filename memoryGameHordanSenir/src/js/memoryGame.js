

//render in <ul>
//add tansitions
//randomize

function Pic() {
const Picture=props.img.map((prop) =>  
    <div className="Pic" key={prop.id}>
        <img className="memory" //imortant for css when hovering and transitioning when someone presses the right button
             src={prop.avatarUrl}
             alt={prop.name} 
             height="150"
             width="150"/>
    </div>
  );
return (
    <div>
       <Section>
      {Picture}
      </Section>
      <hr />
      <Section>
      {Picture}
      </Section>
      </div>);
}
const img = [ { id: 1,
    name: "Little Cat",
    avatarUrl: 'http://placekitten.com/g/64/64'}]
 
};
ReactDOM.render(
  <Pic img={img} />,
  document.getElementById('root')
);
