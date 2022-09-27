
window.onload = function loadFiles() {
  
  let header = document.getElementById('header');
  header.innerHTML = `<nav class="font-size navbar navbar-expand-lg bg-light" >
    <div class="container-fluid  navbar-dark bg-dark">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav space-between" id="header">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
          <a class="nav-link" href="masculino.html">Masculino</a>
          <a class="nav-link" href="feminino.html">Feminino</a>
          <a class="nav-link" href="infantil.html">Infantil</a>
          <a class="nav-link" href="contato.html">Contato</a>
        </div>
      </div>
    </div>
  </nav>`;
  // console.log(header)
  document.getElementById('import').innerHTML = `</div> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet">`;
  let footer = document.getElementById('footer');
  footer.innerHTML = `<!-- Footer -->
    <footer class="bg-dark text-center text-white">
      <!-- Grid container -->
      <div class="container p-4">
        
    
        <!-- Section: Text -->
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        <!-- Section: Text -->
    
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            
    
            <!--Grid column-->
            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Redes Sociais</h5>
                <ul class="list-unstyled mb=0">
                <li>
                    <a class="btn btn-outline-light" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </li>
                <li>
                    <a class="btn btn-outline-light" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </li>
                <li>
                    <a class="btn btn-outline-light" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </li>
                <li>
                    <a class="btn btn-outline-light" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </li>
                </ul>
              </div>

            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contato</h5>
    
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">00000-0000</a>
                </li>
                <li>
                  <a href="#!" class="text-white">00000-0000</a>
                </li>
                <li>
                  <a href="#!" class="text-white">00000-0000</a>
                </li>
                <li>
                  <a href="#!" class="text-white">00000-0000</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->
      
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright: Site Roupas
  </div>
  <!-- Copyright -->
    `
}
