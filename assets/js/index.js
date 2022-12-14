const propiedadesJSON = [
    {
      name: 'Casa de campo',
      description: 'Un lugar ideal para descansar de la ciudad',
      src: 'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
      cuarto: 2,
      m: 170,
    },
    {
      name: 'Casa de playa',
      description: 'Despierta tus días oyendo el oceano',
      src: 'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
      cuarto: 2,
      m: 130,
    },
    {
      name: 'Casa en el centro',
      description: 'Ten cerca de ti todo lo que necesitas',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      cuarto: 1,
      m: 80,
    },
    {
      name: 'Casa rodante',
      description: 'Conviertete en un nómada del mundo sin salir de tu casa',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      cuarto: 1,
      m: 6,
    },
    {
      name: 'Departamento',
      description: 'Desde las alturas todo se ve mejor',
      src: 'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',
      cuarto: 3,
      m: 200,
    },
    {
      name: 'Mansión',
      description: 'Vive una vida lujosa en la mansión de tus sueños ',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      cuarto: 5,
      m: 500,
    },
  ]
  
  const inputRooms = document.querySelector('#inputRooms')
  const inputFrom = document.querySelector('#inputFrom')
  const inputTo = document.querySelector('#inputTo')
  const buttonSearch = document.querySelector('#buttonSearch')
  const properties = document.querySelector('#propiedades')
  const totalProperties = document.querySelector('#totalProperties')
  
  const render = json => {
    properties.innerHTML = ''
  
    json.forEach(e => {
      properties.innerHTML += `
               <div class="propiedad">
                 <div
                   class="img"
                   style="
                     background-image: url('${e.src}');
                   "
                 ></div>
                 <section>
                   <h5>${e.name}</h5>
                   <div class="d-flex justify-content-between">
                     <p>Cuartos: ${e.cuarto}</p>
                     <p>Metros: ${e.m}</p>
                   </div>
                   <p class="my-3">Mansión gigante</p>
                   <button class="btn btn-info">Ver más</button>
                 </section>
               </div>
      `
    })
  }
  render(propiedadesJSON)
  
  const filterByRoom = json => {
    const filterPerRoom = json.map(propiedad => {
      if (+inputRooms.value === propiedad.rooms) {
        return propiedad
      }
    })
  
    return filterPerRoom
  }
  
  const filterByMeter = json => {
    const rangeMeter = json.map(propiedad => propiedad.m)
  
    const min = rangeMeter.reduce((a, b) => Math.min(a, b))
    const max = rangeMeter.reduce((a, b) => Math.max(a, b))
  
    const filterInputNumbers = json.map(propiedad => {
      const minNumberCondition =
        +inputFrom.value >= min && +inputFrom.value <= max
          ? +inputFrom.value
          : false
  
      console.log(minNumberCondition)
  
      const maxNumberCondition =
        +inputTo.value >= min && +inputTo.value <= max ? +inputTo.value : false
  
      if (maxNumberCondition >= propiedad.m && minNumberCondition <= propiedad.m) {
        return propiedad
      }
    })
  
    return filterInputNumbers
  }
  filterByMeter(propiedadesJSON)
  
  const filterUndefined = (cuarto, meters) => {
    const filterUndefinedRooms = cuarto.filter(propiedad =>
      propiedad !== undefined ? propiedad : false
    )
  
    const filterUndefinedMeters = meters.filter(propiedad =>
      propiedad !== undefined ? propiedad : false
    )
  
    const propertiesArr = [...filterUndefinedRooms, ...filterUndefinedMeters]
  
    const deleteRepeated = propertiesArr.filter(
      (propiedad, index) => propertiesArr.indexOf(propiedad) === index
    )
  
    return deleteRepeated
  }
  
  buttonSearch.addEventListener('click', () => {
    propiedades.innerHTML = ''
  
    if (+inputRooms.value <= 0) {
      return (totalProperties.textContent =
        'Debes ingresar una cantidad de cuartos')
    }
  
    if (+inputFrom.value <= 0 || +inputTo.value <= 0) {
      return (totalProperties.textContent =
        'Debes ingresar un rango de metros cuadrados.')
    }
  
    const finalObjectProperties = filterUndefined(
      filterByRoom(propiedadesJSON),
      filterByMeter(propiedadesJSON)
    )
  
    const finalArrProperties = []
  
    for (const i of finalObjectProperties) {
      if (+inputRooms.value === i.cuarto) {
        finalArrProperties.push(i)
      }
  
      if (+inputRooms.value === i.cuarto) {
        totalProperties.textContent = `Total: ${finalArrProperties.length}`
  
        properties.innerHTML += `
             <div class="propiedad">
               <div
                 class="img"
                 style="
                   background-image: url('${i.src}');
                 "
               ></div>
               <section>
                 <h5>${i.name}</h5>
                 <div class="d-flex justify-content-between">
                   <p>Cuartos: ${i.cuarto}</p>
                   <p>Metros: ${i.m}</p>
                 </div>
                 <p class="my-3">Mansión gigante</p>
                 <button class="btn btn-info">Ver más</button>
               </section>
             </div>
    `
      }
  
      if (finalArrProperties.length === 0) {
        totalProperties.textContent =
          'No hay propiedades con esas características'
      }
    }
    const filtroPorMetro = rangoDeMetros.filter((metros) => {
        if (+desde.value >= metros && +hasta.value <= metros) {
          return metros;
        }
      });
    
      console.log(filtroPorMetro);
    
      // filtrar las propiedades que tengan metros entre minimos y maximos
    filtroPorMetros(propiedadesJSON);
    
    btn.addEventListener("click", () => {
      if (inputRooms.value === "" || inputRooms.value === "0") {
        alert("Debes ingresar una cantidad de cuartos");
      }
    });
  })