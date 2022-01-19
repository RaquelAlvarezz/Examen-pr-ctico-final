const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
        <style>
          nav {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
            margin-top: -20px;
            
          }
  
          ul {
            display: flex;
            padding: 0;
          }

          li {
            padding-left: 100px;
            list-style: none;
            font-size: 15px;
          }
          
          a {
            font-weight: 700;
            margin: 0 0px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 0px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
            <ul>
            <li><a href="../examen final recu/index.html">Inicio</a></li>
            <li><a href="../examen final recu/acercade.html"> Acerca de nos</a></li>
            <li><a href="../examen final recu/servicios.html">Nuestros servicios</a></li>
            <li><a href="../examen final recu/contacto.html">Contacto</a></li>
            </ul>
          </nav>
        </header>
      `;      
      class Header extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          const shadowRoot = this.attachShadow({ mode: 'closed' });
      
          shadowRoot.appendChild(headerTemplate.content);
        }
    }
  customElements.define('header-component', Header);
