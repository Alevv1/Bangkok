import React from 'react';
import styles from "./Historia.module.css";

import { Container } from 'react-bootstrap'; // Importa el componente Container de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

function Historia() {
  return (
    <section id="historia">
      <Container>
        <div className="row">
          <div className="col-md-12 text-center ">
            <div className='container my-auto'>
              <p className={styles.title}>HISTORIA</p>
              <p className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi iure nostrum incidunt consequuntur, eos veniam, ipsam libero at quibusdam nam deserunt ea nobis ab, porro explicabo quo facere quaerat.
              Harum id quaerat suscipit dicta impedit adipisci dolore, ab pariatur quas exercitationem, laudantium deserunt consectetur ut beatae. Dolorum temporibus dicta, natus nulla, qui autem aliquid minima cupiditate dolorem eligendi minus.
              Labore eligendi dolores voluptas tempora error necessitatibus culpa sequi odio officiis saepe itaque, fuga, optio repudiandae quae! Voluptas nam magni porro, repudiandae, tenetur minus nihil vitae illo rerum sint deleniti.
              Voluptas distinctio ea dolorum, nobis necessitatibus quas velit amet doloribus assumenda, provident eum est, aperiam dicta ducimus minus! Rerum nihil alias aperiam velit repellendus qui voluptas illo odit aspernatur eligendi!
              Consectetur ipsa asperiores earum, modi dolorem autem in, veniam perferendis facilis porro quisquam voluptatibus repellendus dicta, tempore molestiae fugit a cum deserunt dolores iusto neque est? Architecto expedita tempora voluptate.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Historia;
