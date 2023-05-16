import Card from '../card/Card.jsx';

export default function Cards({ characters }) {
   return (
      <div>
         {
            characters.map((cartas) => {
               return (
                  <Card 
                  name={cartas.name} 
                  status={cartas.status} 
                  species={cartas.species} 
                  gender={cartas.gender} 
                  origin={cartas.origin} 
                  image={cartas.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')} />
               )
            })
         }
      </div>
   )
}
